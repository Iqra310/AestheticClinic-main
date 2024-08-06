import styles from "./aboutSection.module.css";

function AboutSection({ title, description }) {
  return (
    <div className={styles.aboutSectionContainer}>
      <h1 className={styles.aboutTitle}>About {title}</h1>
      <p className={styles.aboutDescription}>{description}</p>
    </div>
  );
}

export default AboutSection;
