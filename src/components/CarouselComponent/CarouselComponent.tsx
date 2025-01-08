import { useRef } from 'react'


import { Swiper, SwiperSlide } from 'swiper/react';

import placeholderBg from "../../../public/Images/placeholder.jpg"
import { Pagination, Navigation } from 'swiper/modules';

import 'swiper/swiper-bundle.css';

import "./CarouselComponent.css"

const CarouselComponent = () => {

    const prevRef = useRef(null);
    const nextRef = useRef(null);

    return (
        <div className="mt-5">

            <Swiper
                slidesPerView={'auto'}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                navigation={{
                    prevEl: prevRef.current,
                    nextEl: nextRef.current,
                }}

                modules={[Pagination, Navigation]}
                className="mySwiper"

            >
                {[1, 2, 3].map(() => (
                    <SwiperSlide>
                        <img
                            className="d-block w-100"
                            src={placeholderBg}
                            alt="Second slide"
                            style={{ height: "420px", objectFit: "cover" }}
                        />
                    </SwiperSlide>
                ))}

                <div className="custom-prev" ref={prevRef} ><i className="bi bi-arrow-left-short" style={{ color: "black" }}></i></div> {/* Replace with your custom icon */}
                <div className="custom-next" ref={nextRef}><i className="bi bi-arrow-right-short" style={{ color: "black" }}></i></div>
            </Swiper>
        </div>
    )
}

export default CarouselComponent
