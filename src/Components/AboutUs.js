import React from 'react'
import img_left from '../assets/Images/About-us-img.svg'
import img_right from '../assets/Images/About-Us-second-img.svg'

function AboutUs() {
  return (
   <section>
    <div className='container py-8'>

        <div className='md:flex md:justify-between '>
            <div className=''>
                <img src={img_left} className='py-8 lg:py-8 md:py-24 lg:-ml-2 '/>
            </div>
            <div className='md:w-1/2 flex flex-col  lg:py-24 '>
                <h1 className='xl:text-4xl lg:text-3xl md:text-2xl text-xl text-[#3C3C3C] nunito font-extrabold py-2 md:py-2'>About Us</h1>
                <p className='inter text-base font-normal text-[#6A6A6A] lg:py-4'>
                    Established in 2020 by a team of seasoned Chartered Accountants, OIA Wealth is a comprehensive Wealth Management firm committed to delivering exceptional financial advisory, investment, and wealth planning services. Our foundation is built on knowledge and integrity, ensuring that our interests are always aligned with those of our clients.
                </p>
                <p className='inter text-base font-normal text-[#6A6A6A]'>
                Introducing "CheerBull," our cutting-edge DIY (Do-It-Yourself) digital platform. Leveraging the latest technology, CheerBull offers a seamless and fully digital investing and wealth creation experience, making investing easy and accessible for everyone, with or without an Advisor.
                </p>
            </div>
        </div>

        <div className='py-10 md:flex lg:gap-4'>
            <div className='flex flex-col xl:mt-12 md:w-2/3'>
                <h2 className='nunito font-extrabold lg:text-3xl xl:text-[40px] text-xl md:text-2xl text-[#3C3C3C] '>Streamlined Wealth Management:</h2>
                <h3 className='nunito font-extrabold lg:text-2xl xl:text-3xl text-xl text-[#3C3C3C] lg:py-4'>Your Path to Financial Security</h3>
                <p className='inter text-base font-normal text-[#6A6A6A] lg:pr-12 py-4'>
                Our wealth management process is designed to provide personalized financial solutions tailored to your unique needs. We begin with an in-depth assessment of your financial situation, goals, and risk tolerance. Based on this analysis, we create a comprehensive financial plan that includes investment strategies, tax planning, insurance and estate planning. We then implement the plan, carefully selecting and managing a diversified portfolio of assets. Regular monitoring and review ensure that your plan adapts to changes in the market and your personal circumstances. Our goal is to help you grow and protect your wealth, providing peace of mind and financial security.
                </p>
                <button className='sign_btn text-lg font-bold roboto bg-custom px-8 py-2 mt-4 rounded-lg text-white w-fit '>
                    <span>Get Start</span>
                </button>          
            </div>
            <div className='md:w-1/2'>
                <img src={img_right} className='xl:-mt-16 mt-8'/>
            </div>
       </div>

    </div>
   </section>
  )
}

export default AboutUs