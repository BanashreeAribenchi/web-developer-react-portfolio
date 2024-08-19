import React from "react";
import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img
            src={getImageUrl("contact/linkedinLogo.png")}
            alt="Linkedin Logo"
          />
          <a href="https://www.linkedin.com/in/banashree-aribenchi/">
            linkedin.com/in/banashree-aribenchi
          </a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/githubLogo.png")} alt="Github Logo" />
          <a href="https://github.com/BanashreeAribenchi">
            github.com/BanashreeAribenchi
          </a>
        </li>
      </ul>
    </footer>
  );
};
