import SectionTitle from "./SectionTitle";
import Car from "./Car";

import styles from "./Cars.module.css";
import chevronRight from "../assets/icons/chevron-right.svg";
import chevronLeft from "../assets/icons/chevron-left.svg";
const { cars, carsList, scrollBtn } = styles;

function Cars() {
  return (
    <section className={cars}>
      <SectionTitle
        text="cars"
        color="var(--main-color)"
        bgColor="var(--title-bg)"
        textAlign="center"
      />

      <button className={scrollBtn}>
        <img src={chevronLeft} />
      </button>

      <ul className={carsList}>
        <Car />
        <Car />
        <Car />
      </ul>

      <button className={scrollBtn}>
        <img src={chevronRight} />
      </button>
    </section>
  );
}

export default Cars;
