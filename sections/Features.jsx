import { BsArrowRightShort, BsArrowLeftShort } from "react-icons/bs"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

export default function Features() {
    return (
        <section className="bg-primary-blue relative">
            <div className="container mx-auto py-44 px-4 sm:px-6 lg:px-8">
                <div className="grid sm:grid-cols-3 gap-x-10">
                    <div>
                        <h2 className="heading-2 text-white">Wellnest app features title</h2>
                        <p className="paragraph-medium-medium text-white pt-4">Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus</p>
                        <div className="mt-10">
                            <button className="bg-secondary-blue rounded-2xl p-2">
                                <BsArrowLeftShort className="text-primary-blue" size={44} />
                            </button>
                            <button className="bg-white rounded-2xl p-2 ml-4">
                                <BsArrowRightShort className="text-primary-blue" size={44} />
                            </button>
                        </div>
                    </div>
                    <div className="col-span-2">
                        <Swiper
                            spaceBetween={28}
                            slidesPerView={3}
                            onSlideChange={() => console.log('slide change')}
                            onSwiper={(swiper) => console.log(swiper)}
                        >
                            <SwiperSlide>
                                <div className="w-full h-96 bg-light-blue p-7 rounded-md shadow drop-shadow-xs">
                                    <h4 className="heading-4 text-white">Intergrate your health:</h4>
                                    <p className="paragraph-regular-medium text-white">Your personal next which brings together your vital statistics like heart rate or calories in one app. Oh yeah, not to mention your blood results too!</p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="w-full h-96 bg-light-blue p-14 rounded-md shadow drop-shadow-xs">

                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="w-full h-96 bg-light-blue p-14 rounded-md shadow drop-shadow-xs">

                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="w-full h-96 bg-light-blue p-14 rounded-md shadow drop-shadow-xs">

                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </div>
        </section>
    )
}