import PageSlide from "../../components/PageSlide"
import ReadMore from "../../components/ReadMore"

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
      <p>
        Transform elements with the <strong>translate</strong>,{" "}
        <strong>rotate</strong>, and <strong>scale</strong> properties
      </p>

      <ReadMore>
        <a
          href="https://web.dev/css-individual-transform-properties/
          "
          target="_blank"
        >
          Finer grained control over CSS transforms with individual transform
          properties
        </a>
      </ReadMore>
    </PageSlide>
  )
}
