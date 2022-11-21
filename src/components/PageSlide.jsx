export default function PageSlide({
  children,
  title,
  subtitle,
  chapter,
  sectionId,
}) {
  return (
    <section data-chapter={chapter} id={sectionId} className="section">
      <h1>{title}</h1>
      <h2>{subtitle}</h2>
      <div className="section-content">{children}</div>
    </section>
  )
}
