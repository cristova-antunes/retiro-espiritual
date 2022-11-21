import PageSlide from "../../components/PageSlide"
import ReadMore from "../../components/ReadMore"
import img_media from "../../assets/prints/media.png"
import React, { useState } from "react"
import FsLightbox from "fslightbox-react"

export default function Features_Media({
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
          src={img_media}
          alt="Imagem de media queries"
          width={500}
          onClick={() => setToggler(!toggler)}
        />
      </div>

      <FsLightbox toggler={toggler} sources={[img_media]} />

      <ReadMore>
        <a
          href="https://css-tricks.com/the-new-css-media-query-range-syntax/
          "
          target="_blank"
        >
          The New CSS Media Query Range Syntax
        </a>
      </ReadMore>
    </PageSlide>
  )
}
