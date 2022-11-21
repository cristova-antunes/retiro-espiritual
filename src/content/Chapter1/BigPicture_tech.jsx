import PageSlide from "../../components/PageSlide"

export default function BigPicture_Tech({
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
      <ul>
        <li>Novas frameworks & tools (Vite; Astro; Qwik; ...) </li>
        <li>Client Side vs Server Side</li>
        <li>Typescript FTW</li>
        <li>Serverless (deploy, DB, …)</li>
      </ul>
    </PageSlide>
  )
}
