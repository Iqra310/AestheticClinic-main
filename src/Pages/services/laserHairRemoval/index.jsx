
import AboutSection from '../laserHairRemoval';
import ServiceCard from "../../../components/cards/service";
import { pageDetails, services } from "../../../utils/constants";
import styles from "./laserHairRemoval.module.css";
import Header from "../../../components/Header";
import Footer from '../../../components/Footer';
import Image from '../../../pics/L.png';
function LaserHairRemoval() {
  const { title, description } = pageDetails.laserHairRemoval;

  return (
    <div>
      
      <Header />
      <img style={{width:"100%", height:"100%"}} src={Image} alt=""/>
      <div className={styles.contentContainer}>
        <AboutSection title={title} description={description} />
        <div className={styles.servicesContainer}>
          {services?.map(({ imageUrl, name, tagline }, i) => (
            <ServiceCard
              key={i}
              name={name}
              tagline={tagline}
              imageUrl={imageUrl}
            />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default LaserHairRemoval;
