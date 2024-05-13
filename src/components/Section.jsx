function Section({ id, children, style, color }) {
  const sectionStyle = { ...style, backgroundColor: color };

  return (
    <section id={id} style={sectionStyle}>
      {children}
    </section>
  );
}

export default Section;
