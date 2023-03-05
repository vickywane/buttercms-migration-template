import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";


function Reviews({reviews}) {
    return (
            <div  >
            <div className={"p-12"} >
                <h1 className={"text-center text-5xl mb-8"} > Customer Reviews </h1>
                <hr />

                <br />

                <div className={"max-w-7xl m-0 m-auto"} >
                    <Swiper
                        navigation={true}
                        modules={[Navigation]}
                        className="mySwiper"
                    >

                        {reviews?.map(({ fields }, idx) => (
                                <SwiperSlide key={idx} >
                                            <div className={"max-w-3xl m-0 m-auto"}>

                                                <div className={"flex justify-center"} >
                                                    <img
                                                        className={"h-72 rounded-3xl"}
                                                        alt={fields?.customer_name}
                                                        src={fields?.customer_image}
                                                    />
                                                </div>

                                                    <p className={"text-right text-xl font-semibold"} >
                                                        {new Date(fields?.date_created)
                                                        .toLocaleDateString("en-us", { weekday:"long", year:"numeric", month:"long", day:"numeric"})}
                                                    </p>

                                                    <br />

                                                    <p className={"max-w-3xl text-left text-lg leading-normal"} >
                                                        {fields?.review}
                                                    </p>

                                                    <br />

                                                    <p className={"text-2xl font-bold"} > {fields?.customer_name} </p>
                                            </div>
                                    </SwiperSlide>
                                ))
                        }
                    </Swiper>

                </div>

            </div>
        </div>
    )
}

export default Reviews