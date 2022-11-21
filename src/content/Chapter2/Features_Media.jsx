import PageSlide from "../../components/PageSlide"

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
      <div className="read-more">
        <h4>Read more...</h4>
        <a
          href="https://css-tricks.com/the-new-css-media-query-range-syntax/
          "
          target="_blank"
        >
          The New CSS Media Query Range Syntax
        </a>
      </div>
    </PageSlide>
  )
}
