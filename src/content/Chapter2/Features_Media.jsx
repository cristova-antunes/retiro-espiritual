import PageSlide from "../../components/PageSlide"
import ReadMore from "../../components/ReadMore"
import img_media from "../../assets/prints/media.png"
import { useState, useEffect } from "react"
import LightboxWrapper from "../../components/LightboxWrapper"

export default function Features_Media({
  title,
  subtitle,
  chapter,
  sectionId,
}) {
  const [toggler, setToggler] = useState(false)

  const images = [
    {
      src: img_media,
      loading: "lazy",
      alt: "Media queries",
    },
  ]

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
          onClick={() => setToggler((prev) => !prev)}
        />
      </div>

      <LightboxWrapper isOpen={toggler} images={images} />

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
