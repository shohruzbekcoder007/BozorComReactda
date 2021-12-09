import React from 'react'
import {
    PoularWrapper,
    PoularText,
    PopularItemWrapper,
    PopularItemImage,
    ItemImage,
    PopularItemText,
    ItemTextParagriph,
    ItemTextInformation,
    AllServices
} from './styles'

import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
// import "slick-carousel/slick/slick-theme.css";
import itemimage1 from './../../assets/img/itemimage1.png'
import itemimage2 from './../../assets/img/itemimage2.png'
import itemimage3 from './../../assets/img/itemimage3.png'



const Popular = () => {
    return (
        <PoularWrapper>
            <PoularText>Popular services in your area</PoularText>
            <PopularSlider/>
            <AllServices>See All Services</AllServices>
        </PoularWrapper>
    )
}

const PopularSlider = () => {

    const settings = {
        // dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true,
        responsive: [
            {
              breakpoint: 1110,
              settings: {
                slidesToShow: 2
              }
            },
            {
              breakpoint: 750,
              settings: {
                slidesToShow: 1
              }
            }
          ]
    }

    return (
        <div className="popular-slider">
            <Slider {...settings}>
                <PopularItem 
                    image={itemimage1}
                    paragriph="Bathroom Remodeling"
                    information="we will make the old bathroom even better with 
                    this service, and we are the greatest among them"
                />
                <PopularItem 
                    image={itemimage2}
                    paragriph="Bathroom Remodeling"
                    information="we will make the old bathroom even better with 
                    this service, and we are the greatest among them"
                />
                <PopularItem 
                    image={itemimage3}
                    paragriph="Bathroom Remodeling"
                    information="we will make the old bathroom even better with 
                    this service, and we are the greatest among them"
                />
                <PopularItem 
                    image={itemimage1}
                    paragriph="Bathroom Remodeling"
                    information="we will make the old bathroom even better with 
                    this service, and we are the greatest among them"
                />
                <PopularItem 
                    image={itemimage2}
                    paragriph="Bathroom Remodeling"
                    information="we will make the old bathroom even better with 
                    this service, and we are the greatest among them"
                />
                <PopularItem 
                    image={itemimage3}
                    paragriph="Bathroom Remodeling"
                    information="we will make the old bathroom even better with 
                    this service, and we are the greatest among them"
                />
            </Slider>
        </div>
    )
}

const PopularItem = ({image, paragriph,information}) => {
    return(
        <PopularItemWrapper>
            <PopularItemImage>
                <ItemImage src={image} alt="popular image item"/>
            </PopularItemImage>
            <PopularItemText>
                <ItemTextParagriph>{paragriph}</ItemTextParagriph>
                <ItemTextInformation>
                    {information}
                </ItemTextInformation>
            </PopularItemText>
        </PopularItemWrapper>
    )
}

export default Popular;