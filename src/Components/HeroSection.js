import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

function HeroSection() {
  return (
    <section className='herosection_bg'>
      <div className='container md:w-1/2 py-12 md:py-24'>
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={50}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          className="mySwiper"
        >
          <SwiperSlide>
            <h1 className='lg:text-5xl text-2xl md:text-3xl  py-4 text-white font-bold nunito'>Invest in your Tomorrow</h1>
            <p className='lg:text-lg text-xs md:text-base py-4 text-white inter font-normal'>Amet nunc diam orci duis ut sit diam arcu, nec. Eleifend proin massa tincidunt viverra lectus pulvinar. Nunc ipsum est pellentesque turpis ultricies.</p>
            <button className=' px-6 py-1.5 rounded-lg text-lg font-bold roboto  bg-custom text-white'>Get Started</button>
          </SwiperSlide>
          <SwiperSlide>
            <h1 className='lg:text-5xl text-2xl md:text-3xl  py-4 text-white font-bold nunito'>Invest in your Today</h1>
            <p className='lg:text-lg text-xs md:text-base py-4 text-white inter font-normal'>Amet nunc diam orci duis ut sit diam arcu, nec. Eleifend proin massa tincidunt viverra lectus pulvinar. Nunc ipsum est pellentesque turpis ultricies.</p>
            <button className='px-6 py-1.5 rounded-lg text-lg font-bold roboto  bg-custom text-white'>Get Started</button>
          </SwiperSlide>
          <SwiperSlide>
            <h1 className='lg:text-5xl text-2xl md:text-3xl  py-4 text-white font-bold nunito'>Invest in your Yesterday</h1>
            <p className='lg:text-lg text-xs md:text-base py-4 text-white inter font-normal'>Amet nunc diam orci duis ut sit diam arcu, nec. Eleifend proin massa tincidunt viverra lectus pulvinar. Nunc ipsum est pellentesque turpis ultricies.</p>
            <button className='px-6 py-1.5 rounded-lg text-lg font-bold roboto  bg-custom text-white'>Get Started</button>
          </SwiperSlide>
         
          {/* Add more SwiperSlide components as needed */}
        </Swiper>
      </div>
    </section>
  );
}

export default HeroSection;
