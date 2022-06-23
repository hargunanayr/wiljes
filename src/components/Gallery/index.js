import React, { useState } from 'react'
import { SliderData } from './Data'

import { GalleryContainer, ImgGallery, LeftArrow, RightArrow, GalleryWrap, GalleryH1 } from './GalleryElements'

const Gallery = ({ slides }) => {
    const [current, setCurrent] = useState(0)
    const length = slides.length

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1)
    }

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1)
    }

    if( !Array.isArray(slides) || slides.length <= 0 ){
        return null;
    }

  return (
    <>
        <GalleryH1>Our Gallery</GalleryH1>
        <GalleryContainer>
            <LeftArrow onClick={prevSlide} />
            <RightArrow onClick={nextSlide} />
                {SliderData.map((slide, index) => {
                    return (
                        <GalleryWrap className={index === current ? 'active' : ''} key={index}>
                            {index === current && (
                                <ImgGallery src={slide.image} alt="gallery" className='imageSlider'/>
                            )}
                        </GalleryWrap>
                    )
                })}
        </GalleryContainer>
    </>
  )
}

export default Gallery