import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import styles from "./Carousel.module.css";

// import required modules
import { Navigation } from "swiper";

const carouselContent = [
    {
        imageUrl: "/images/campaign-recent-01.jpg",
        text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Quibusdam nemo veritatis, ab vel voluptate quasi voluptates
                quae ullam iusto minima ex architecto saepe, dolores 
                molestiae nobis nam. Pariatur, voluptatum vitae.`
    },
    {
        imageUrl: "/images/campaign-recent-02.jpg",
        text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Quibusdam nemo veritatis, ab vel voluptate quasi voluptates
                quae ullam iusto minima ex architecto saepe, dolores 
                molestiae nobis nam. Pariatur, voluptatum vitae.`
    },
    {
        imageUrl: "/images/campaign-recent-03.jpg",
        text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Quibusdam nemo veritatis, ab vel voluptate quasi voluptates
                quae ullam iusto minima ex architecto saepe, dolores 
                molestiae nobis nam. Pariatur, voluptatum vitae.`
    }
]


const Carousel = () => {
    return (
        <Swiper
            navigation={true}
            modules={[Navigation]}
            className="mySwiper"
            loop={true}
            loopFillGroupWithBlank={true}
        >
            {carouselContent.map((element, index) => {
                return (
                    <SwiperSlide key={index+1}>
                        <div className={styles.container}>
                            <img src={element.imageUrl} alt="" />

                            <p className={styles.description}>{element.text}</p>
                        </div>
                    </SwiperSlide>
            )
            }
            )}
        </Swiper>
    );
}

export default Carousel