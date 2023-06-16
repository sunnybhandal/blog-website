import db from "@/lib/db";
import bcrypt from "bcrypt";
import User from "@/models/User";

export async function POST(req) {
  try {
    db.connect();
  } catch (error) {
    return Response(JSON.stringify(error.message), { status: 500 });
  }
}
