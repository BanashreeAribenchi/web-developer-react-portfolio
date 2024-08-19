import React from "react";
import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <>
      <section className={styles.container} id="about">
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
            I am a full-stack web developer with a degree in computer science
            and engineering. After spending five years as a WordPress Developer
            & digital marketer, I decided to dive into the exciting world of web
            development.
          </p>
          <p className={styles.description}>
            Recently, I completed an intensive web development bootcamp where I
            mastered JavaScript, React, Node.js, Express.js, and MongoDB. This
            immersive experience allowed me to work on real-world projects and
            hone my skills in all aspects of web development.
          </p>
          <p className={styles.description}>
            I am actively seeking opportunities to collaborate and contribute in
            the ever-evolving field of web development. With my background in
            digital marketing and newly acquired coding expertise, I offer a
            unique perspective to any team.
          </p>
        </div>
      </section>
    </>
  );
};
