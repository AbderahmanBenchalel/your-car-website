import styles from "./Cars.module.css";

import SectionTitle from "./SectionTitle";
import Car from "./Car";

import { IcChevronRight, IcChevronLeft } from "../components/icons/Icons";

function Cars() {
  return (
    <section className={styles.cars}>
      <SectionTitle
        text="cars"
        color="var(--main-color)"
        bgColor="var(--title-bg)"
        textAlign="center"
      />

      <button className={styles.slideBtn}>
        <IcChevronLeft />
      </button>

      <ul className={styles.carsList}>
        <Car />
        {/* <Car /> */}
        {/* <Car /> */}
      </ul>

      <button className={styles.slideBtn}>
        <IcChevronRight />
      </button>
    </section>
  );
}

export default Cars;
