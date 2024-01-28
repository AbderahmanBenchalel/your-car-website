import styles from "./Service.module.css";
const { service } = styles;

function Service({ icon, children }) {
  return (
    <div className={service}>
      <img src={icon} />
      {children}
    </div>
  );
}

export default Service;
