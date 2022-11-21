import { useState, useEffect } from "react"
import Lightbox from "react-spring-lightbox"

export default function LightboxWrapper({ isOpen, images }) {
  const [currentImageIndex, setCurrentIndex] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible((prev) => !prev)
  }, [isOpen])

  useEffect(() => {
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        setIsVisible(false)
      }
    })
  }, [])

  const gotoPrevious = () =>
    currentImageIndex > 0 && setCurrentIndex(currentImageIndex - 1)

  const gotoNext = () =>
    currentImageIndex + 1 < images.length &&
    setCurrentIndex(currentImageIndex + 1)

  return (
    <Lightbox
      isOpen={isVisible}
      onPrev={gotoPrevious}
      onNext={gotoNext}
      images={images}
      currentIndex={currentImageIndex}
    />
  )
}
