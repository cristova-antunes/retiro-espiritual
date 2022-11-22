import PageSlide from "../../components/PageSlide"
import vite_logo from "../../assets/logos/vite.svg"
import qwik_logo from "../../assets/logos/qwik.svg"
import astro_logo from "../../assets/logos/astro.svg"
import stacks_logo from "../../assets/stack.png"
import typescript_logo from "../../assets/logos/ts.svg"

export default function BigPicture_Tech1({
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
      <h4 className="margin-bottom-m">
        Client Side Rendering vs Server Side Rendering vs Static Site Generation
      </h4>
      <div className="margin-bottom-xxl">
        <img src={stacks_logo} alt="logo vite" height={250} />
      </div>

      <h4 className="margin-bottom-m">
        Novas frameworks & tools (Vite; Astro; Qwik; ...)
      </h4>
      <div className="section-stacks">
        <img src={vite_logo} alt="logo vite" height={150} />
        <img src={qwik_logo} alt="logo qwik" height={150} />
        <img src={astro_logo} alt="logo astro" height={150} />
      </div>
    </PageSlide>
  )
}
