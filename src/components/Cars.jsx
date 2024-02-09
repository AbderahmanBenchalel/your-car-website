import styles from "./Cars.module.css";

import SectionTitle from "./SectionTitle";
import Car from "./Car";
import Spinner from "./Spinner";

import { IcChevronRight, IcChevronLeft } from "../components/icons/Icons";
import { useRef, useState } from "react";
import { useCartContext } from "../context/CartContext";

const CAR_TRANSLATE = -40.5;
const TOW_ROWS_WIDTH = 810;
const ONE_ROW_WIDTH = 405;

function Cars() {
  const { carsList } = useCartContext();
  const [step, setStep] = useState(0);

  const container = useRef(null);
  let maxSteps = 1; /* this for making sure that initial value of maxSteps is bigger than step */
  if (container.current) {
    const width = container.current.offsetWidth;
    maxSteps =
      width > TOW_ROWS_WIDTH
        ? carsList.length - 3
        : width > ONE_ROW_WIDTH
        ? carsList.length - 2
        : carsList.length - 1;
  }

  function handleStepRight() {
    setStep((s) => (s === maxSteps ? s : s + 1));
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

      {carsList.length !== 0 ? (
        <div className={styles.slider}>
          <button
            className={styles.slideBtn}
            onClick={handleStepLeft}
            disabled={!step}
          >
            <IcChevronLeft />
          </button>

          <div className={styles.container} ref={container}>
            <ul
              className={styles.carsList}
              style={{
                translate: CAR_TRANSLATE * step + "rem",
                transition: "translate 0.3s ease-in-out",
              }}
            >
              {carsList.map((car, i) => (
                <Car car={car} key={i} />
              ))}
            </ul>
          </div>

          <button
            className={styles.slideBtn}
            onClick={handleStepRight}
            disabled={step === maxSteps}
          >
            <IcChevronRight />
          </button>
        </div>
      ) : (
        <Spinner />
      )}
    </section>
  );
}

export default Cars;
