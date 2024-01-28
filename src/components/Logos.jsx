import bmwLogo from "../assets/imgs/logos/bmw.png";
import mercedesLogo from "../assets/imgs/logos/mercedes-benz.png";
import mitsuLogo from "../assets/imgs/logos/mitsu.png";
import nissanLogo from "../assets/imgs/logos/nissan.png";
import subaruLogo from "../assets/imgs/logos/subaru.png";
import suzukiLogo from "../assets/imgs/logos/suzuki.png";
import toyotaLogo from "../assets/imgs/logos/toyota.png";
import volvoLogo from "../assets/imgs/logos/volvo.png";

import styles from "./Logos.module.css";

function Logos() {
  return (
    <section className={styles.logos}>
      <img src={bmwLogo} />
      <img src={volvoLogo} />
      <img src={suzukiLogo} />
      <img src={toyotaLogo} />
      <img src={nissanLogo} />
      <img src={mercedesLogo} />
      <img src={subaruLogo} />
      <img src={mitsuLogo} />
    </section>
  );
}

export default Logos;
