import { useState, useEffect } from "react"
import Lightbox from "react-spring-lightbox"

export default function LightboxWrapper({ isOpen, images }) {
  const [currentImageIndex, setCurrentIndex] = useState(0)

  const gotoPrevious = () =>
    currentImageIndex > 0 && setCurrentIndex(currentImageIndex - 1)

  const gotoNext = () =>
    currentImageIndex + 1 < images.length &&
    setCurrentIndex(currentImageIndex + 1)

  return (
    <Lightbox
      isOpen={isOpen}
      onPrev={gotoPrevious}
      onNext={gotoNext}
      images={images}
      currentIndex={currentImageIndex}
    />
  )
}
