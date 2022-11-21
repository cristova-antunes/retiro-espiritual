import img from "../../assets/prints/where.png"
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
      <div>
        <img
          src={img}
          alt="Imagem da pseudo class Where"
          width={500}
          onClick={() => setToggler(!toggler)}
        />

        <img
          src={img}
          alt="Imagem da pseudo class Where"
          width={500}
          onClick={() => setToggler(!toggler)}
        />
      </div>
      <FsLightbox toggler={toggler} sources={[img, img, img]} />

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
        </ul>
      </ReadMore>
    </PageSlide>
  )
}
