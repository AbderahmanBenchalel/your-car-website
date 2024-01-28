import styles from "./CarsGallery.module.css";
const { carsGallery } = styles;

function CarsGallery() {
  return (
    <section className={carsGallery}>
      <h2>Tesla Model 3</h2>
      <p>Disruptive, avant-garde, futuristic, innovative.</p>
      <button>Contact</button>
    </section>
  );
}

export default CarsGallery;
