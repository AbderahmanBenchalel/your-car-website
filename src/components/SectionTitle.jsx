import styles from "./SectionTitle.module.css";
const { title, bgTitle } = styles;
function SectionTitle({ text, color, bgColor, textAlign }) {
  const bgStyle = {
    color: bgColor,
    textAlign,
  };
  const style = { color, textAlign };

  return (
    <>
      <p className={bgTitle} style={bgStyle}>
        {text === "about" ? "about us" : text}
      </p>
      <h2 className={title} style={style}>
        {text}
      </h2>
    </>
  );
}

export default SectionTitle;
