import styles from "./Testimonial.module.css";
import { IcStar } from "./icons/Icons";
import carImg from "../assets/imgs/cars/bmw-7-series.png";

function Testimonial({ testimonial }) {
  return (
    <div className={styles.testimonial}>
      <blockquote>{testimonial?.description}</blockquote>
      <div className={styles.starts}>
        <IcStar />
        <IcStar />
        <IcStar />
        <IcStar />
        <IcStar />
      </div>

      <p>{testimonial?.name}</p>
      <img className={styles.car} src={carImg} />
    </div>
  );
}

export default Testimonial;
