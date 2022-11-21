import PageSlide from "../../components/PageSlide"

export default function Features_Transforms({
  title,
  subtitle,
  chapter,
  sectionId,
}) {
  return (
    <PageSlide
      title={title}
      subtitle={subtitle}
      chapter={chapter}
      sectionId={sectionId}
    >
      <div>
        <p>
          Transform elements with the <strong>translate</strong>,{" "}
          <strong>rotate</strong>, and <strong>scale</strong> properties
        </p>
      </div>

      <div className="read-more">
        <h4>Read more...</h4>
        <a
          href="https://web.dev/css-individual-transform-properties/
          "
          target="_blank"
        >
          Finer grained control over CSS transforms with individual transform
          properties
        </a>
      </div>
    </PageSlide>
  )
}
