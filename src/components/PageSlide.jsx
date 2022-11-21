export default function PageSlide({
  title,
  subtitle,
  chapter,
  sectionId,
  content,
}) {
  return (
    <section data-chapter={chapter} id={sectionId}>
      <h1>{title}</h1>
      <h2>{subtitle}</h2>
      <div>{content}</div>
    </section>
  )
}
