import db from "@/lib/db";
import { verifyJwtToken } from "@/lib/jwt";
import Blog from "@/models/Blog";

export async function PUT(req, ctx) {
  await db.connect();

  const id = ctx.params.id;
  const accessToken = req.headers.get("authorization");
  const token = accessToken.split(" ")[1];

  const decodedToken = verifyJwtToken(token);

  if (!accessToken || !decodedToken) {
    return new Response(
      JSON.stringify({ error: "unauthorized (wrong or expired token" }),
      { status: 403 }
    );
  }

  try {
    const blog = await Blog.findById(id);

    if (blog.likes.includes(decodedToken._id)) {
      blog.likes = blog.likes.filter(id);
    }
  } catch (error) {
    return new Response(JSON.stringify(null), { status: 500 });
  }
}
