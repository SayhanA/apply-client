import './UserComments.css'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import { EffectCoverflow, Autoplay, FreeMode, Pagination } from "swiper/modules";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

const UsersComment = () => {

  
  return (
    <div className=" mx-auto mb-20">
      <hr className='w-[50px] border-2 rounded-full mt-20 mx-auto'/>
      <h3 className="text-3xl font-bold text-center text-white pt-3">
        Happy Clients
      </h3>
      <p className="text-center font-bold text-white-500 pt-4 pb-10">
        Have a Look Below and See What Our Clients Says About Us!
      </p>

      <div className='mx-auto h-[100px] my-10'>
      <Swiper
       autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        // pagination={true}
        modules={[Autoplay,EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <p className='text-center flex gap-5'> <FaQuoteLeft className="text-7xl text-white-500" /> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis quos doloremque quasi repellat ab commodi dolor. Maxime possimus dignissimos eligendi, doloribus beatae soluta iusto, quo voluptates unde iure sapiente atque? <FaQuoteRight className="text-6xl text-white-500" /> </p>
        </SwiperSlide>
        
        <SwiperSlide>
          <p className='text-center flex gap-5'> <FaQuoteLeft className="text-7xl text-white-500" /> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis quos doloremque quasi repellat ab commodi dolor. Maxime possimus dignissimos eligendi, doloribus beatae soluta iusto, quo voluptates unde iure sapiente atque? <FaQuoteRight className="text-6xl text-white-500" /> </p>
        </SwiperSlide>
        
        <SwiperSlide>
          <p className='text-center flex gap-5'> <FaQuoteLeft className="text-7xl text-white-500" /> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis quos doloremque quasi repellat ab commodi dolor. Maxime possimus dignissimos eligendi, doloribus beatae soluta iusto, quo voluptates unde iure sapiente atque? <FaQuoteRight className="text-6xl text-white-500" /> </p>
        </SwiperSlide>
        
        <SwiperSlide>
          <p className='text-center flex gap-5'> <FaQuoteLeft className="text-7xl text-white-500" /> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis quos doloremque quasi repellat ab commodi dolor. Maxime possimus dignissimos eligendi, doloribus beatae soluta iusto, quo voluptates unde iure sapiente atque? <FaQuoteRight className="text-6xl text-white-500" /> </p>
        </SwiperSlide>
        
        <SwiperSlide>
          <p className='text-center flex gap-5'> <FaQuoteLeft className="text-7xl text-white-500" /> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis quos doloremque quasi repellat ab commodi dolor. Maxime possimus dignissimos eligendi, doloribus beatae soluta iusto, quo voluptates unde iure sapiente atque? <FaQuoteRight className="text-6xl text-white-500" /> </p>
        </SwiperSlide>
        
        <SwiperSlide>
          <p className='text-center flex gap-5'> <FaQuoteLeft className="text-7xl text-white-500" /> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis quos doloremque quasi repellat ab commodi dolor. Maxime possimus dignissimos eligendi, doloribus beatae soluta iusto, quo voluptates unde iure sapiente atque? <FaQuoteRight className="text-6xl text-white-500" /> </p>
        </SwiperSlide>
        
        <SwiperSlide>
          <p className='text-center flex gap-5'> <FaQuoteLeft className="text-7xl text-white-500" /> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis quos doloremque quasi repellat ab commodi dolor. Maxime possimus dignissimos eligendi, doloribus beatae soluta iusto, quo voluptates unde iure sapiente atque? <FaQuoteRight className="text-6xl text-white-500" /> </p>
        </SwiperSlide>
        
        <SwiperSlide>
          <p className='text-center flex gap-5'> <FaQuoteLeft className="text-7xl text-white-500" /> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis quos doloremque quasi repellat ab commodi dolor. Maxime possimus dignissimos eligendi, doloribus beatae soluta iusto, quo voluptates unde iure sapiente atque? <FaQuoteRight className="text-6xl text-white-500" /> </p>
        </SwiperSlide>
        
        
      </Swiper>
    </div>
      

      <Swiper
         autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        // pagination={{
        //   clickable: true,
        // }}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        navigation={true}
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        modules={[EffectCoverflow, Autoplay, FreeMode, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide className="opacity-50">
          <div className="flex flex-col justify-center items-center w-full h-full py-5">
            <img
              src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=580&q=80"
              className="rounded-full w-32 h-32"
              alt=""
            />
            <div className="pt-5">
              <h5 className="text-xl font-bold ">Khalid Mahmud</h5>
              <p className="text-center font-bold text-gray-400">
                Selling aggenting
              </p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="opacity-50">
          <div className="flex flex-col justify-center items-center w-full h-full py-5">
            <img
              src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
              className="rounded-full w-32 h-32"
              alt=""
            />
            <div className="pt-5">
              <h5 className="text-xl font-bold ">Khalid Mahmud</h5>
              <p className="text-center font-bold text-gray-400">
                Selling aggenting
              </p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="opacity-50">
          <div className="flex flex-col justify-center items-center w-full h-full py-5">
            <img
              src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
              className="rounded-full w-32 h-32"
              alt=""
            />
            <div className="pt-5">
              <h5 className="text-xl font-bold ">Khalid Mahmud</h5>
              <p className="text-center font-bold text-gray-400">
                Selling aggenting
              </p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="opacity-50">
          <div className="flex flex-col justify-center items-center w-full h-full py-5">
            <img
              src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
              className="rounded-full w-32 h-32"
              alt=""
            />
            <div className="pt-5">
              <h5 className="text-xl font-bold ">Khalid Mahmud</h5>
              <p className="text-center font-bold text-gray-400">
                Selling aggenting
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="opacity-50">
          <div className="flex flex-col justify-center items-center w-full h-full py-5">
            <img
              src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=580&q=80"
              className="rounded-full w-32 h-32"
              alt=""
            />
            <div className="pt-5">
              <h5 className="text-xl font-bold ">Khalid Mahmud</h5>
              <p className="text-center font-bold text-gray-400">
                Selling aggenting
              </p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="opacity-50">
          <div className="flex flex-col justify-center items-center w-full h-full py-5">
            <img
              src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
              className="rounded-full w-32 h-32"
              alt=""
            />
            <div className="pt-5">
              <h5 className="text-xl font-bold ">Khalid Mahmud</h5>
              <p className="text-center font-bold text-gray-400">
                Selling aggenting
              </p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="opacity-50">
          <div className="flex flex-col justify-center items-center w-full h-full py-5">
            <img
              src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
              className="rounded-full w-32 h-32"
              alt=""
            />
            <div className="pt-5">
              <h5 className="text-xl font-bold ">Khalid Mahmud</h5>
              <p className="text-center font-bold text-gray-400">
                Selling aggenting
              </p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="opacity-50">
          <div className="flex flex-col justify-center items-center w-full h-full py-5">
            <img
              src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
              className="rounded-full w-32 h-32"
              alt=""
            />
            <div className="pt-5">
              <h5 className="text-xl font-bold ">Khalid Mahmud</h5>
              <p className="text-center font-bold text-gray-400">
                Selling aggenting
              </p>
            </div>
          </div>
        </SwiperSlide>

        

        
        
        
      </Swiper>

      
    </div>
  );
};

export default UsersComment;
