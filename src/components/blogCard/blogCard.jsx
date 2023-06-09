import React from "react";
import classes from "./blogCard.module.css";
import Link from "next/link";

const BlogCard = ({ blog: { title, desc, authorId } }) => {
  const isLiked = true;
  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <div className={classes.blogData}>
          <h3>{title}</h3>
          <p>{desc}</p>
          <span>
            Created By: <span>Jan 1st</span>
          </span>
        </div>
        <div className={classes.right}>
          {12} {isLiked ? <p>icon</p> : <p>close</p>}
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
