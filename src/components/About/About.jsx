import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
        <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>
                I'm a frontend developer with experience in building responsive
                and optimized sites
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Backend Developer</h3>
              <p>
                I have experience developing fast and optimised back-end systems
                and APIs
              </p>
            </div>
          </li>
          
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/school.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>HSC AND SSLC</h3>
              <p>
                  Mepco schlenk matric.hr.sec school.<br></br>Thirumangalam,Madurai.
              
              </p>
              <p>
                HSC:97% <br></br>  SSLC:94% 
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/graduate.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>DEGREE</h3>
              <p>B.Tech Information Technology<br></br>
              Madras Institute of Technology,Anna University.<br></br>
              CGPA:8.4
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/language.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>Languages known</h3>
              <p>
               Tamil-Full Professional Proficiency<br></br>English-Full Professional Proficiency
               <br></br>Telugu-Limited Working Proficiency<br></br>Hindi-Limited Working Proficiency
              </p>
            </div>
          </li>
          
        </ul>
      </div>
    </section>
  );
};
