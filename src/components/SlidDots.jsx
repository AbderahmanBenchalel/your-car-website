function SlidDots({ color, selectedColor, slides }) {
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
            backgroundColor: i === 3 ? selectedColor : color,
          }}
          key={i}
        ></div>
      ))}
    </div>
  );
}

export default SlidDots;
