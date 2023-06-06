"use client";
import React, { useState } from "react";
import classes from "./navbar.module.css";
import Link from "next/link";
import Image from "next/image";
import vercel from "../../../public/vercel.svg";

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const handleShowDropdown = () => setShowDropdown((prev) => true);
  const handleHideDropdown = () => setShowDropdown((perv) => false);
  const loggedIn = true;
  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <h2 className={classes.left}>
          <Link href="/">Sunny Bhandal</Link>
        </h2>
        <ul className={classes.left}>
          {loggedIn ? (
            <div>
              <Image
                onClick={handleShowDropdown}
                src={vercel}
                width="45"
                height="45"
                alt=""
              />
              {showDropdown && (
                <div className={classes.dropdown}>
                  <h2 onClick={handleHideDropdown}>Close Icon</h2>
                  <button className={classes.logout}>Logout</button>
                  <Link href="/create-post" className={classes.create}>
                    Create
                  </Link>
                </div>
              )}
            </div>
          ) : (
            <h2>hi</h2>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
