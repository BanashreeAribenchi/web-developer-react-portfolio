import React from "react";
import styles from "./Experience.module.css";
import experience from "../../data/experience.json";
import { getImageUrl } from "../../utils";

export const Experience = () => {
  return (
    <>
      <section className={styles.container} id="experience">
        <h2 className={styles.title}>Experience</h2>
        <div className={styles.content}>
          <ul className={styles.experience}>
            {experience.map((experienceItem, id) => {
              return (
                <li key={id} className={styles.experienceItem}>
                  <img
                    src={getImageUrl(experienceItem.imageSrc)}
                    alt={`${experienceItem.organisation} Logo`}
                  />
                  <div className={styles.experienceItemDetails}>
                    <h3>{`${experienceItem.role}, ${experienceItem.organisation}`}</h3>
                    <p>{`${experienceItem.startDate} - ${experienceItem.endDate}`}</p>
                    <ul>
                      {experienceItem.details.map((detail, id) => {
                        return <li key={id}>{detail}</li>;
                      })}
                    </ul>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </section>
    </>
  );
};
