import PageSlide from "../../components/PageSlide"
import img_transition from "../../assets/prints/shared.jpeg"
import { useState, useEffect } from "react"
import LightboxWrapper from "../../components/LightboxWrapper"
import ReadMore from "../../components/ReadMore"

export default function Features_Transitions({
  title,
  subtitle,
  chapter,
  sectionId,
}) {
  const [toggler, setToggler] = useState(false)

  const images = [
    {
      src: img_transition,
      loading: "lazy",
      alt: "CSS Functions",
    },
  ]

  useEffect(() => {
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        setToggler(false)
      }
    })
  }, [])

  return (
    <PageSlide
      title={title}
      subtitle={subtitle}
      chapter={chapter}
      sectionId={sectionId}
    >
      <ul className="margin-bottom-base">
        <li>Vanilla JavaScript and CSS</li>
        <li>
          Let the optimized browser API do all the heavy lifting In a nutshell
        </li>
      </ul>
      <p className="margin-bottom-m">
        Shared Element Transitions API allows us to skip a lot of prep work by
        ensuring that both outgoing and incoming states are visually present at
        the same time.
      </p>
      <div className="section-images">
        <iframe
          title="vimeo-player"
          src="https://player.vimeo.com/video/757159297?h=af3bef93ab"
          width="640"
          height="360"
          frameBorder="0"
          allowFullScreen
        ></iframe>

        <img
          src={img_transition}
          alt="Imagem de media queries"
          width={500}
          onClick={() => setToggler(true)}
        />
      </div>

      <LightboxWrapper isOpen={toggler} images={images} />

      <ReadMore>
        <ul>
          <li>
            <a
              href="https://www.youtube.com/watch?v=JCJUPJ_zDQ4&t=200s"
              target="_blank"
            >
              Bringing page transitions to the web
            </a>
          </li>
          <li>
            <a
              href="https://www.smashingmagazine.com/2022/10/ui-animations-shared-element-transitions-api-part1/"
              target="_blank"
            >
              Delightful UI Animations With Shared Element Transitions API (Part
              1)
            </a>
          </li>
        </ul>
      </ReadMore>
    </PageSlide>
  )
}
