import styles from "./Cars.module.css";

import SectionTitle from "./SectionTitle";
import Car from "./Car";
import Spinner from "./Spinner";
import SlidDots from "./SlidDots";

import { IcChevronRight, IcChevronLeft } from "../components/icons/Icons";
import { useEffect, useRef, useState } from "react";
import { useCartContext } from "../context/CartContext";
import convertPxToRem from "../utility/convertPxToRem";

const CAR_TRANSLATE = -40.5;
const TOW_ROWS_WIDTH = 810;
const ONE_ROW_WIDTH = 405;

function Cars() {
  const container = useRef(null);
  const carsUl = useRef(null);
  const [step, setStep] = useState(0);
  const [maxSteps, setMaxSteps] = useState(1);
  const { carsList } = useCartContext();

  useEffect(() => {
    if (!container.current) return;
    const width = container.current.offsetWidth;

    setMaxSteps(
      width > TOW_ROWS_WIDTH
        ? carsList.length - 3
        : width > ONE_ROW_WIDTH
        ? carsList.length - 2
        : carsList.length - 1
    );
  }, [carsList.length]);

  function handleStepRight() {
    setStep((s) => (s === maxSteps ? s : s + 1));
  }

  function handleStepLeft() {
    setStep((s) => (s === 0 ? s : s - 1));
  }

  function handleStepByDot(dotIndex) {
    setStep(dotIndex);
  }

  function handleTouchMove(e) {
    // carsUl.current.style.translate =
    //   CAR_TRANSLATE * step + convertPxToRem(e.touches[0].clientX) * 3 + "rem";
    // console.log("move");
  }

  function handleTouchStart(e) {
    carsUl.current.startEvent = e.touches[0].clientX;
  }
  function handleTouchEnd(e) {
    const start = carsUl.current.startEvent;
    const end = e.changedTouches[0].clientX;
    const track = 80;

    console.log("start " + start, "end " + end);

    if (start < end && end - start >= track) {
      handleStepLeft();
    } else if (start > end && start - end >= track) {
      handleStepRight();
    }
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
        <>
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
                ref={carsUl}
                className={styles.carsList}
                style={{
                  translate: CAR_TRANSLATE * step + "rem",
                  transition: "translate 0.3s ease-in-out",
                }}
                onTouchMove={handleTouchMove}
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}
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

          <SlidDots
            color="#E5E5E5"
            selectedColor="var(--main-color)"
            slides={maxSteps + 1}
            currentSlide={step}
            stepByDot={handleStepByDot}
          />
        </>
      ) : (
        <Spinner />
      )}
    </section>
  );
}

export default Cars;
