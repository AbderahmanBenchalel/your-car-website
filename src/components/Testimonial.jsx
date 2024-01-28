import styles from "./Testimonial.module.css";
import starIcon from "../assets/icons/star.svg";
import carImg from "../assets/imgs/cars/bmw-7-series.png";

const { testimonial, car, starts } = styles;
function Testimonial() {
  return (
    <div className={testimonial}>
      <blockquote>
        I recently bought a car through YourCar and I was blown away by their
        exceptional service. The staff were friendly and knowledgeable, and they
        helped me find the perfect car for my needs. I highly recommend YourCar
        to anyone looking for a luxury car buying experience.
      </blockquote>
      <div className={starts}>
        <img src={starIcon} />
        <img src={starIcon} />
        <img src={starIcon} />
        <img src={starIcon} />
        <img src={starIcon} />
      </div>

      <p>Annie Rudy</p>
      <img className={car} src={carImg} />
    </div>
  );
}

export default Testimonial;