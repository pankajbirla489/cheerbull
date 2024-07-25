import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import icon_1 from '../assets/Icons/Featured-icon-1.png';
import icon_2 from '../assets/Icons/Featured-icon-2.png';
import icon_3 from '../assets/Icons/Featured-icon-3.png';
import icon_4 from '../assets/Icons/Featured-icon-4.svg';
import icon_5 from '../assets/Icons/Featured-icon-5.svg';
import icon_6 from '../assets/Icons/Featured-icon-6.svg';

const responsive = {
  superLargeDesktop: {
    // screens larger than 1600px
    breakpoint: { max: 4000, min: 1600 },
    items: 4
  },
  desktop: {
    // screens between 1024px and 1600px
    breakpoint: { max: 1600, min: 1024 },
    items: 4
  },
  tablet: {
    // screens between 464px and 1024px
    breakpoint: { max: 1024, min: 464 },
    items: 3
  },
  mobile: {
    // screens up to 464px
    breakpoint: { max: 464, min: 0 },
    items: 2
  }
};

function FeaturedOn() {
  return (
    <section className='bg-[#F5F5F5]'>
      <div className="container py-10">
        <h1 className="nunito xl:text-4xl lg:text-3xl text-2xl font-bold text-[#3C3C3C] text-center">Featured On</h1>
        <p className="xl:text-base text-xs md:text-sm plus-jakarta-sans font-normal text-[#6A6A6A] text-center py-1">
          Discover an extensive array of investment options, from stocks and bonds to mutual funds and more
        </p>
        <div className="py-10 xl:pt-20 xl:pb-36">
          <Carousel
            responsive={responsive}
            autoPlay
            infinite
            showDots={false}
            arrows={false}
            autoPlaySpeed={3000}
          >
            <div>
              <img src={icon_1} alt="Featured Icon 1" />
            </div>
            <div>
              <img src={icon_2} alt="Featured Icon 2" />
            </div>
            <div>
              <img src={icon_3} alt="Featured Icon 3" />
            </div>
            <div>
              <img src={icon_4} alt="Featured Icon 4" />
            </div>
            <div>
              <img src={icon_5} alt="Featured Icon 5" />
            </div>
            <div>
              <img src={icon_6} alt="Featured Icon 6" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
}

export default FeaturedOn;
