import React from "react";
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <>
      <section className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.title}>Hi, I'm Banashree</h1>
          <p className={styles.description}>
            I'm a Frontend Developer skilled in JavaScript, React, and
            TypeScript
          </p>
          <a
            href="mailto:banashree.aribenchi17@gmail.com"
            className={styles.contactBtn}
          >
            Contact Me
          </a>
        </div>
        <img
          src={getImageUrl("hero/heroImage.png")}
          alt="Hero image of me"
          className={styles.heroImg}
        />
      </section>
    </>
  );
};
