import React from "react";
import classes from "./footer.module.css";

const Footer = () => {
  return (
    <div>
      <div>
        <div className={classes.col}>
          <h2>About the App</h2>
          <p>Description stuff</p>
        </div>
        <div className={classes.col}>
          <h2>Contacts</h2>
          <p>403-123-1234</p>
          <p>GitHub</p>
        </div>
        <div className={classes.col}>
          <h2>Location</h2>
          <p>Calgary</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
