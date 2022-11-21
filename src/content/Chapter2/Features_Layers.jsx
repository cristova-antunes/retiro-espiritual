import PageSlide from "../../components/PageSlide"
import ReadMore from "../../components/ReadMore"
import img_layer1 from "../../assets/prints/layers-001.png"
import img_layer2 from "../../assets/prints/layers-002.png"
import img_layer3 from "../../assets/prints/layers-003.png"
import img_layer4 from "../../assets/prints/layers-003.png"
import { useState, useEffect } from "react"
import LightboxWrapper from "../../components/LightboxWrapper"

export default function Features_Layers({
  title,
  subtitle,
  chapter,
  sectionId,
}) {
  const [toggler, setToggler] = useState(false)

  const images = [
    {
      src: img_layer1,
      loading: "lazy",
      alt: "Media queries",
    },
    {
      src: img_layer2,
      loading: "lazy",
      alt: "Media queries",
    },
    {
      src: img_layer3,
      loading: "lazy",
      alt: "Media queries",
    },
    {
      src: img_layer4,
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
      <p className="margin-bottom-s">
        Por vezes temos problemas de especificidade a escrever o nosso CSS, ou
        resultando em regras gigantes e complexas.
      </p>
      <p className="margin-bottom-m">
        Já vos deve ter acontecido ter o mesmo tipo de elementos, como um botão,
        em diferentes sítios da página que estão a construir, com aspetos
        diferentes.
        <br /> Estamos perante um problema de especificidade, em que o controlo
        das regras que vão afetar o vosso botão, depende das regras que tenham
        escrito.
      </p>
      <div className="section-images">
        <img
          src={img_layer1}
          alt="Imagem de media queries"
          width={500}
          onClick={() => setToggler(true)}
        />
        <img
          src={img_layer2}
          alt="Imagem de media queries"
          width={500}
          onClick={() => setToggler(true)}
        />
        <img
          src={img_layer3}
          alt="Imagem de media queries"
          width={500}
          onClick={() => setToggler(true)}
        />
        <img
          src={img_layer4}
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
              href="https://www.smashingmagazine.com/2022/01/introduction-css-cascade-layers/"
              target="_blank"
            >
              Getting Started With CSS Cascade Layers
            </a>
          </li>
        </ul>
      </ReadMore>
    </PageSlide>
  )
}
