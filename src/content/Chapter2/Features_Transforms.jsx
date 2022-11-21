import PageSlide from "../../components/PageSlide"
import ReadMore from "../../components/ReadMore"
import img_transform from "../../assets/prints/transform.png"
import { useState, useEffect } from "react"
import LightboxWrapper from "../../components/LightboxWrapper"

export default function Features_Transforms({
  title,
  subtitle,
  chapter,
  sectionId,
}) {
  const [toggler, setToggler] = useState(false)

  const images = [
    {
      src: img_transform,
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
      <p>
        Transform elements with the <strong>translate</strong>,{" "}
        <strong>rotate</strong>, and <strong>scale</strong> properties
      </p>

      <div className="section-images">
        <img
          src={img_transform}
          alt="Imagem"
          width={500}
          onClick={() => setToggler(true)}
        />
      </div>

      <LightboxWrapper isOpen={toggler} images={images} />

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
