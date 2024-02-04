import styles from "./Service.module.css";
const { service } = styles;

function Service({ children }) {
  return <div className={service}>{children}</div>;
}

export default Service;
