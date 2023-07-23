// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import { Navigation } from 'swiper/modules';
import { Typewriter } from 'react-simple-typewriter';

const Banner = () => {
    return (
        <>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper h-[750px] w-full ">
                <SwiperSlide className='h-full w-full bg-[url("https://news.utexas.edu/wp-content/uploads/2022/05/College-Graduate-1200x800-c-default.jpg")] bg-no-repeat bg-center bg-cover'>
                    <div className='w-[10/12] h-full flex justify-center items-center'>
                        <div className='h-[300px] w-[1200px] grid grid-cols-2 text-white'>
                            <div className=''>
                                <div className='flex gap-3 text-xl font-bold'>
                                    <div className='h-7 w-7 bg-blue-500'></div>
                                    <Typewriter words={['Welcome to our website...', 'We create huge opportunity for you...', 'Choose your next level...', 'Continue with us to grave opportunity...']} loop={false} />
                                    {/* <p> Welcome to our website...</p> */}
                                </div>
                                <h3 className='text-5xl font-bold py-10 leading-[60px]'>We are the Largest Online University Admission service providers.</h3>
                                <p>Join us today to learn more about our services and Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi dolorum itaque molestiae nihil cumque nesciunt tempora, vel pariatur.</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='h-full w-full bg-[url("https://news.nd.edu/assets/514578/1200x675/college_grads_graphic_1200.jpg")] bg-no-repeat bg-center bg-cover'></SwiperSlide>

            </Swiper>
        </>
    );
};

export default Banner;