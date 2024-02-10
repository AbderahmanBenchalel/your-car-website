function SlidDots({ color, selectedColor, slides, currentSlide, stepByDot }) {
  const dotStyle = {
    width: "12px",
    height: "12px",
    borderRadius: "100%",
    cursor: "pointer",
  };

  const container = {
    display: "flex",
    justifyContent: "center",
    gap: "1.6rem",
    margin: "0 auto",
  };

  return (
    <div style={container}>
      {Array.from({ length: slides }, (_, i) => (
        <div
          style={{
            ...dotStyle,
            backgroundColor: i === currentSlide ? selectedColor : color,
          }}
          key={i}
          onClick={() => stepByDot(i)}
        ></div>
      ))}
    </div>
  );
}

export default SlidDots;
