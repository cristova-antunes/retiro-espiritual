import img_where from "../../assets/prints/where.png"
import img_has from "../../assets/prints/has.png"
import img_not from "../../assets/prints/not.png"
import React, { useState } from "react"
import FsLightbox from "fslightbox-react"
import PageSlide from "../../components/PageSlide"
import ReadMore from "../../components/ReadMore"

export default function Features_Pseudo({
  title,
  subtitle,
  chapter,
  sectionId,
}) {
  const [toggler, setToggler] = useState(false)

  return (
    <PageSlide
      title={title}
      subtitle={subtitle}
      chapter={chapter}
      sectionId={sectionId}
    >
      <div className="section-images">
        <img
          src={img_where}
          alt="Imagem da pseudo class Where"
          width={500}
          onClick={() => setToggler(!toggler)}
        />

        <img
          src={img_not}
          alt="Imagem da pseudo class Where"
          width={500}
          onClick={() => setToggler(!toggler)}
        />

        <img
          src={img_has}
          alt="Imagem da pseudo class Where"
          width={500}
          onClick={() => setToggler(!toggler)}
        />
      </div>

      <FsLightbox toggler={toggler} sources={[img_where, img_not, img_has]} />

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
