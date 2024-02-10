function convertPxToRem(px) {
  const HTML = document.querySelector("html");
  const styles = window.getComputedStyle(HTML);

  return (px / +styles.getPropertyValue("font-size").slice(0, -2)).toFixed(2);
}

export default convertPxToRem;
