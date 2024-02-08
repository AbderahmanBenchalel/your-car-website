import {
  IcX,
  IcFacebook,
  IcInstagram,
  IcLocation,
  IcPhone,
  IcEmail,
} from "./icons/Icons";

import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer} id="contact">
      <div className={styles.container}>
        <div className={styles.about}>
          <h3>
            <span>Your</span>Car
          </h3>
          <p>
            We are known for luxurious and premium chaffeur services worldwide.
            We are simply the best you can find.
          </p>
          <br />
          <p>
            we are dedicated to providing our customers with a first-class car
            buying, selling, and renting experience.
          </p>
        </div>

        <div className={styles.newsLetter}>
          <h3>News Letter</h3>
          <p>
            Subscribe to our news letter for updates, news and exclusive offers
          </p>

          <form className={styles.form}>
            <input type="email" placeholder="Email" />
            <button>Subscribe</button>
          </form>

          <nav>
            <a href="">
              <IcFacebook />
            </a>
            <a href="">
              <IcX />
            </a>
            <a href="">
              <IcInstagram />
            </a>
          </nav>
        </div>

        <div className={styles.contact}>
          <h3>Contact</h3>
          <address className={styles.contact}>
            <p>
              <IcLocation />
              <span>
                2038 2nd Avenue,
                <br /> Las Vegas, United States
              </span>
            </p>

            <p>
              <IcPhone />
              <span>
                <a href="tel:01444773421423">01444773421423</a>
                <br />
                <a href="tel:01477678449405">01477678449405</a>
              </span>
            </p>

            <p>
              <IcEmail />
              <a href="mailto:info@YourCar.com">info@YourCar.com</a>
            </p>
          </address>
        </div>
      </div>
      <p className={styles.copyright}>
        &copy; Copyright {new Date().getFullYear().toString()} ·{" "}
        <strong>YourCar</strong> All rights reserved
      </p>
    </footer>
  );
}

export default Footer;
