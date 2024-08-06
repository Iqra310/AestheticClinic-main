import styles from "./service.module.css";

function ServiceCard({ imageUrl, name, tagline, onClick }) {
  return (
    <div className={styles.serviceContainer}>
      <img src={imageUrl} alt={name} className={styles.serviceImage} />
      <div className={styles.serviceContentContainer}>
        <div className={styles.serviceContent}>
          <h1 className={styles.serviceName}>{name}</h1>
          <p className={styles.serviceTagline}>{tagline}</p>
        </div>

        <div className={styles.serviceFooter}>
          <button
            type="button"
            onClick={onClick}
            className={styles.serviceButton}
          >
            Book an Appointment
          </button>
        </div>
      </div>
    </div>
  );
}

export default ServiceCard;
