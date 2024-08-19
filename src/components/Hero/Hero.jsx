import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Deepika M</h1>
        <p className={styles.description}>
        Passionate and dedicated second-year IT student with a strong foundation in software development and problem-solving. Actively
        enhancing skills in data structures, and algorithms through coursework and personal projects
        </p>
        <a href="mailto:deepikamoorthi178@email.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
