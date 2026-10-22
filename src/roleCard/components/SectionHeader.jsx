function SectionHeader({ no, title, desc }) {
  return (
    <>
      <div className="mb-1">
        <span className="fs-7 me-2-5 text-primary">{no}</span>
        <span className="fs-4 fw-bold">{title}</span>
      </div>
      <p className="text-muted border-bottom mb-4 pb-3">{desc}</p>
    </>
  );
}

export default SectionHeader;
