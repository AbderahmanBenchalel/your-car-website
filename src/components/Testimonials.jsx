import styles from "./Testimonials.module.css";
const { testimonials } = styles;

import SectionTitle from "./SectionTitle";
import Testimonial from "./Testimonial";
import SlidDots from "./SlidDots";

function Testimonials() {
  return (
    <section className={testimonials}>
      <SectionTitle
        text="testimonials"
        color="#ffffff"
        bgColor="var(--title-bg-op)"
        textAlign="center"
      />

      <Testimonial />
      <SlidDots slides={4} selectedColor="#EBD8B8" color="#ffffff" />
    </section>
  );
}

export default Testimonials;
