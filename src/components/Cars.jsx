import styles from "./Cars.module.css";

import SectionTitle from "./SectionTitle";
import Car from "./Car";

import { IcChevronRight, IcChevronLeft } from "../components/icons/Icons";
import { useState } from "react";

function Cars() {
  const [step, setStep] = useState(0);

  function handleStepRight() {
    setStep((s) => s + 1);
  }
  function handleStepLeft() {
    setStep((s) => (s === 0 ? 0 : s - 1));
  }
  return (
    <section className={styles.cars} id="cars">
      <SectionTitle
        text="cars"
        color="var(--main-color)"
        bgColor="var(--title-bg)"
        textAlign="center"
      />

      <div className={styles.slider}>
        <button
          className={styles.slideBtn}
          onClick={handleStepLeft}
          disabled={!step}
        >
          <IcChevronLeft />
        </button>

        <div className={styles.container}>
          <ul
            className={styles.carsList}
            style={{
              translate: -40.5 * step + "rem",
              transition: "translate 0.3s ease-in-out",
            }}
          >
            <Car />
            <Car />
            <Car />
            <Car />
            <Car />
            <Car />
          </ul>
        </div>

        <button className={styles.slideBtn} onClick={handleStepRight}>
          <IcChevronRight />
        </button>
      </div>
    </section>
  );
}

export default Cars;
