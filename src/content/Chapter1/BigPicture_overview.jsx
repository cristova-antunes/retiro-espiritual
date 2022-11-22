import PageSlide from "../../components/PageSlide"
import chart from "../../assets/chart.jpeg"

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
    >
      <div className="section-chart">
        <img src={chart} alt="chart" height={600} />{" "}
      </div>
    </PageSlide>
  )
}
