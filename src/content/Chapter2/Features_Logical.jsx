import PageSlide from "../../components/PageSlide"
import ReadMore from "../../components/ReadMore"
import img_logical from "../../assets/prints/logical.png"
import { useState, useEffect } from "react"
import LightboxWrapper from "../../components/LightboxWrapper"

export default function Features_Logical({
  title,
  subtitle,
  chapter,
  sectionId,
}) {
  const [toggler, setToggler] = useState(false)

  const images = [
    {
      src: img_logical,
      loading: "lazy",
      alt: "Media queries",
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
          src={img_logical}
          alt="Imagem de media queries"
          width={500}
          onClick={() => setToggler(true)}
        />
      </div>

      <LightboxWrapper isOpen={toggler} images={images} />

      <ReadMore>
        <a
          href="https://css-tricks.com/css-logical-properties-and-values/
          "
          target="_blank"
        >
          CSS Logical Properties and Values
        </a>
      </ReadMore>
    </PageSlide>
  )
}
