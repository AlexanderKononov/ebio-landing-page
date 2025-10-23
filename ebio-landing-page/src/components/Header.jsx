import React from "react";
import styles from "./Header.module.css";
import logo from "../assets/pixel_green_flow_logo.png";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        <img src={logo} alt="eBio Logo" className={styles.logo} />
        <div>
          <h1 className={styles.name}>Alex</h1>
          <p className={styles.company}>eBio Ltd</p>
        </div>
      </div>
      <div>
        <a
          href="https://www.upwork.com/freelancers/alexanderkononov"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.upworkLink}
        >
          Upwork Profile
        </a>
      </div>
    </header>
  );
};

export default Header
