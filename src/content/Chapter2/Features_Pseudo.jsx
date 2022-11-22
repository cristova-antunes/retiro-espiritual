import img_where from "../../assets/prints/where.png"
import img_has from "../../assets/prints/has.png"
import img_not from "../../assets/prints/not.png"
import PageSlide from "../../components/PageSlide"
import ReadMore from "../../components/ReadMore"
import { useState, useEffect } from "react"
import LightboxWrapper from "../../components/LightboxWrapper"

export default function Features_Pseudo({
  title,
  subtitle,
  chapter,
  sectionId,
}) {
  const [toggler, setToggler] = useState(false)

  const images = [
    {
      src: img_where,
      loading: "lazy",
      alt: "IS/Where",
    },

    {
      src: img_has,
      loading: "lazy",
      alt: "Has",
    },

    {
      src: img_not,
      loading: "lazy",
      alt: "Not",
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
        A pseudo-class :is() permite que que possamos escrever selector de uma
        forma simples e concisa.
      </p>
      <div className="section-images">
        <img
          src={img_where}
          alt="Imagem da pseudo class Where"
          width={500}
          onClick={() => setToggler(true)}
        />

        <img
          src={img_not}
          alt="Imagem da pseudo class Where"
          width={500}
          onClick={() => setToggler(true)}
        />

        <img
          src={img_has}
          alt="Imagem da pseudo class Where"
          width={500}
          onClick={() => setToggler(true)}
        />
      </div>

      <LightboxWrapper isOpen={toggler} images={images} />

      <ReadMore>
        <ul>
          <li>
            <a
              href="https://developer.mozilla.org/en-US/docs/Web/CSS/:is"
              target="_blank"
            >
              :is()
            </a>
          </li>

          <li>
            <a
              href="https://developer.mozilla.org/en-US/docs/Web/CSS/:where"
              target="_blank"
            >
              :where()
            </a>
          </li>

          <li>
            <a
              href="https://developer.mozilla.org/en-US/docs/Web/CSS/:has"
              target="_blank"
            >
              :has()
            </a>
          </li>

          <li>
            <a
              href="https://developer.mozilla.org/en-US/docs/Web/CSS/:not"
              target="_blank"
            >
              :not()
            </a>
          </li>
        </ul>
      </ReadMore>
    </PageSlide>
  )
}
