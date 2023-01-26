import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay } from "swiper";
function PhotosMedia({ mediaApi }) {
    return (
        <div>
            <div className="container m-auto  gap-8 grid grid-cols-4 overflow-hidden  ">

                <div className="lg:col-span-4 col-span-4 rounded-lg  h-60 sm:h-80 md:h-96 lg:h-full overflow-hidden select-none">
                    <Swiper
                        spaceBetween={30}
                        loop={true}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[Autoplay]}
                        className="mySwiper overflow-hidden "
                    >
                        {
                            mediaApi.map((e, i) => <> <SwiperSlide key={i}>
                                <img src={process.env.REACT_APP_ROOT_URL + '/' + e.thumbnail} className='-mt-64 px-16' alt={e.title} height={'60%'} />
                            </SwiperSlide></>)
                        }

                    </Swiper>
                </div>

            </div>
        </div>
    )
}


export default PhotosMedia