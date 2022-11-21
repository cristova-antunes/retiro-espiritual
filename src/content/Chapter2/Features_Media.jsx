import PageSlide from "../../components/PageSlide"
import ReadMore from "../../components/ReadMore"

export default function Features_Media({
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
      <ReadMore>
        <a
          href="https://css-tricks.com/the-new-css-media-query-range-syntax/
          "
          target="_blank"
        >
          The New CSS Media Query Range Syntax
        </a>
      </ReadMore>
    </PageSlide>
  )
}
