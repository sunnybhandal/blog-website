import React from "react";
import classes from "./blogCard.module.css";
import Link from "next/link";

const BlogCard = ({ blog: { title, desc, authorId } }) => {
  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <Link></Link>
      </div>
    </div>
  );
};

export default BlogCard;
