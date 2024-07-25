import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // Import Swiper styles
import 'swiper/css/autoplay'; // Import Autoplay module styles

import { Autoplay } from 'swiper/modules'; // Import Autoplay module from the correct path

import icon_1 from '../assets/Icons/Our-partner-1.svg';
import icon_2 from '../assets/Icons/Our-partner-2.svg';
import icon_3 from '../assets/Icons/Our-partner-3.svg';
import icon_4 from '../assets/Icons/Our-partner-4.svg';
import icon_5 from '../assets/Icons/Our-partner-5.svg';
import icon_6 from '../assets/Icons/Our-partner-6.svg';
import icon_7 from '../assets/Icons/Our-partner-7.svg';


function OurPartner() {
  const images = [icon_1, icon_2, icon_3, icon_4, icon_5, icon_6,icon_7];

  return (
    <section className=''>
      <div className='container py-10'>
        <h1 className='nunito xl:text-4xl lg:text-3xl text-2xl font-bold text-center text-[#3C3C3C]'>Our Partners</h1>
        <p className='xl:text-base text-xs md:text-sm plus-jakarta-sans font-normal text-[#6A6A6A] text-center pb-10'>
          Discover extensive array of investment options, from stocks and bonds to mutual funds and more
        </p>
      {/* Our AMC partners */}
      <div className='md:flex md:gap-6'>
          <div className='flex justify-center items-center rounded-xl md:pl-4 xl:pl-6 h-16 md:h-28 md:w-96 xl:h-28 xl:w-72  bg-[#014579] text-white text-base xl:text-2xl font-bold asap'>
          Our AMC partners
          </div>
          <Swiper
            spaceBetween={30}
            loop={true}
            autoplay={{ delay: 2000, disableOnInteraction: false }}
            modules={[Autoplay]}
            breakpoints={{
              320: {
                slidesPerView: 3,
                spaceBetween: 10,
              },
              480: {
                slidesPerView: 3,
                spaceBetween: 15,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 6,
                spaceBetween: 10,
              },
            }}
            className='flex gap-7 mt-4 xl:mt-0'
          >
            {images.map((image, index) => (
              <SwiperSlide key={index}>
                <img src={image} className='xl:h-32 xl:w-36 md:h-24 md:w-28' />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        {/* Our Insurance Partners */}
        <div className='md:flex md:gap-6 xl:gap-6 mt-4'>
          <div className='flex justify-center items-center md:pl-4 xl:pl-8  rounded-xl h-16 md:h-28 md:w-96 xl:h-28 xl:w-72  bg-[#DF5759] text-white text-base xl:text-2xl font-bold asap'>
          Our Insurance Partners
          </div>
          <Swiper
            spaceBetween={30}
            loop={true}
            autoplay={{ delay: 2000, disableOnInteraction: false }}
            modules={[Autoplay]}
            breakpoints={{
              320: {
                slidesPerView: 3,
                spaceBetween: 10,
              },
              480: {
                slidesPerView: 3,
                spaceBetween: 15,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 6,
                spaceBetween: 10,
              },
            }}
            className='flex gap-7 mt-4 xl:mt-0'
          >
            {images.map((image, index) => (
              <SwiperSlide key={index}>
                <img src={image} className='xl:h-32 xl:w-36 md:h-24 md:w-28' />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        {/* Our FD Partners */}
        <div className='md:flex md:gap-6 mt-4'>
          <div className='flex justify-center items-center rounded-xl md:pl-4 xl:pl-0 h-16 md:h-28 md:w-96 xl:h-28 xl:w-72  bg-[#014579] text-white text-base xl:text-2xl font-bold asap'>
          Our FD Partners
          </div>
          <Swiper
            spaceBetween={30}
            loop={true}
            autoplay={{ delay: 2000, disableOnInteraction: false }}
            modules={[Autoplay]}
            breakpoints={{
              320: {
                slidesPerView: 3,
                spaceBetween: 10,
              },
              480: {
                slidesPerView: 3,
                spaceBetween: 15,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 6,
                spaceBetween: 10,
              },
            }}
            className='flex gap-7 mt-4 xl:mt-0'
          >
            {images.map((image, index) => (
              <SwiperSlide key={index}>
                <img src={image} className='xl:h-32 xl:w-36 md:h-24 md:w-28' />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        {/* Other Partners */}
        <div className='md:flex md:gap-6 mt-4'>
          <div className='flex justify-center items-center rounded-xl md:pl-4 xl:pl-0 h-16 md:h-28 md:w-96 xl:h-28 xl:w-72  bg-[#DF5759] text-white text-base xl:text-2xl font-bold asap'>
          Other Partners
          </div>
          <Swiper
            spaceBetween={30}
            loop={true}
            autoplay={{ delay: 2000, disableOnInteraction: false }}
            modules={[Autoplay]}
            breakpoints={{
              320: {
                slidesPerView: 3,
                spaceBetween: 10,
              },
              480: {
                slidesPerView: 3,
                spaceBetween: 15,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 6,
                spaceBetween: 10,
              },
            }}
            className='flex gap-7 mt-4 xl:mt-0'
          >
            {images.map((image, index) => (
              <SwiperSlide key={index}>
                <img src={image} className='xl:h-32 xl:w-36 md:h-24 md:w-28' />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}

export default OurPartner;
