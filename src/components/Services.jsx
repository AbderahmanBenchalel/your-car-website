import SectionTitle from "./SectionTitle";
import Service from "./Service";

import styles from "./Services.module.css";
import salesIcon from "../assets/icons/sales.svg";
import sellingIcon from "../assets/icons/selling.svg";
const { services, container } = styles;

function Services() {
  return (
    <section className={services}>
      <SectionTitle
        text="services"
        color="var(--grey-color)"
        bgColor="#ffffff"
        textAlign="center"
      />

      <div className={container}>
        <Service icon={salesIcon}>
          <h3>Car sales</h3>
          <p>
            At YourCar, we offer a wide selection of luxury vehicles for sale.
            Whether you're in the market for a sleek sports car or a spacious
            SUV, we have the perfect vehicle to fit your needs.
          </p>
        </Service>
        <Service icon={salesIcon}>
          <h3>Car rentel</h3>
          <p>
            If you're in need of a luxury car rental, look no further than
            YourCar. Our fleet of high-end vehicles is regularly maintained and
            serviced to ensure that you have a safe and comfortable driving
            experience.
          </p>
        </Service>
        <Service icon={sellingIcon}>
          <h3>Car selling</h3>
          <p>
            At YourCar, we make it easy to sell your car. Simply bring your
            vehicle in for an appraisal, and we'll handle the rest. We offer
            fair prices and a hassle-free selling process, so you can get your
            vehicle with minimal effort.
          </p>
        </Service>
      </div>
    </section>
  );
}

export default Services;
