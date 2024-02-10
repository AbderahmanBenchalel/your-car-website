import styles from "./Testimonials.module.css";

import SectionTitle from "./SectionTitle";
import Testimonial from "./Testimonial";
import SlidDots from "./SlidDots";
import { useEffect, useState } from "react";

function Testimonials() {
  const [testimonials, setTestimonials] = useState([]);
  const [testimonialIndex, setTestimonialIndex] = useState(0);

  function handleaccessIndexByDot(dotIndex) {
    setTestimonialIndex(dotIndex);
  }

  useEffect(() => {
    async function fetchTestimonials() {
      const res = await fetch("../data/testimonials.json");
      const data = await res.json();
      setTestimonials(data.testimonials);
    }
    fetchTestimonials();
  }, []);

  return (
    <section className={styles.testimonials}>
      <SectionTitle
        text="testimonials"
        color="#ffffff"
        bgColor="var(--title-bg-op)"
        textAlign="center"
      />

      <Testimonial testimonial={testimonials.at(testimonialIndex)} />

      <SlidDots
        slides={testimonials.length}
        selectedColor="#EBD8B8"
        color="#ffffff"
        currentSlide={testimonialIndex}
        stepByDot={handleaccessIndexByDot}
      />
    </section>
  );
}

export default Testimonials;
