import React from "react";
import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <>
      <section className={styles.container}>
        <div className={styles.content}>
          <h2 className={styles.title}>About</h2>
          <img
            src={getImageUrl("about/aboutImage.png")}
            alt="About me image"
            className={styles.aboutImg}
          />
        </div>
        <div className={styles.content}>
          <p className={styles.description}>
            I'm a full-stack web developer with a degree in computer science and
            engineering. After five years as a digital marketer, I've decided to
            dive into the exciting world of web development.
          </p>
          <p className={styles.description}>
            Recently, I completed an intensive web development bootcamp where I
            learned JavaScript, React, Node.js, Express.js, and MongoDB. This
            immersive experience allowed me to work on real projects and improve
            my skills in all areas of web development.
          </p>
          <p className={styles.description}>
            I am actively seeking opportunities to collaborate and contribute in
            the ever-evolving field of web development. With my expertise in
            digital marketing and newfound coding skills, I bring a unique
            perspective to any team.
          </p>
        </div>
      </section>
    </>
  );
};
