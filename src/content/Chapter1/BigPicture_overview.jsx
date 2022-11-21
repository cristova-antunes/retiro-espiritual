import PageSlide from "../../components/PageSlide"

export default function BigPicture_Overview({
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
    ></PageSlide>
  )
}
