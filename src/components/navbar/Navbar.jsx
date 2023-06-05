import React from "react";
import classes from "./navbar.module.css";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <h2 className={classes.left}>
          <Link href="/">Sunny Bhandal</Link>
        </h2>
        <ul className={classes.left}></ul>
      </div>
    </div>
  );
};

export default Navbar;
