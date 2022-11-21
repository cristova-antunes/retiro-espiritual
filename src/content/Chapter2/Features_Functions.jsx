import PageSlide from "../../components/PageSlide"
import ReadMore from "../../components/ReadMore"
import img_function from "../../assets/prints/functions.png"
import { useState, useEffect } from "react"
import LightboxWrapper from "../../components/LightboxWrapper"

export default function Features_Functions({
  title,
  subtitle,
  chapter,
  sectionId,
}) {
  const [toggler, setToggler] = useState(false)

  const images = [
    {
      src: img_function,
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
      <div className="section-images">
        <img
          src={img_function}
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
              href="https://developer.mozilla.org/en-US/docs/Web/CSS/clamp"
              target="_blank"
            >
              clamp()
            </a>
          </li>
          <li>
            <a href="https://www.fluid-type-scale.com/" target="_blank">
              Fluid Type Scale Calculator
            </a>
          </li>
        </ul>
      </ReadMore>
    </PageSlide>
  )
}
