import React from 'react'
import img_1 from '../assets/Images/About-hero-section-1.webp'
function AboutHero() {
  return (
    <>
        <section className='about_hero mt-3'>
            <div className='container md:w-1/2 py-12 md:py-24'>
                <h1 className='lg:text-5xl text-2xl md:text-3xl  py-4 text-white font-bold nunito'>Invest in your Tomorrow</h1>
                <p className='lg:text-lg text-xs md:text-base py-4 text-white inter font-normal'>Amet nunc diam orci duis ut sit diam arcu, nec. Eleifend proin massa tincidunt viverra lectus pulvinar. Nunc ipsum est pellentesque turpis ultricies.</p>
                <button className='sign_btn px-6 py-1.5 rounded-lg text-lg font-bold roboto  bg-custom text-white'>
                    <span>Get Started</span>
                </button>
            </div>
        </section>
        <section className='container bg-white flex py-12'>
                    {/* Left section */}
                    <div className='flex flex-col justify-center'>
                        <h1 className='text-4xl font-bold nunito'>About Us</h1>
                        <p className='text-base font-normal text-[#6A6A6A] inter py-3'>Established in 2020 by a team of seasoned Chartered Accountants, OIA Wealth is a comprehensive Wealth Management firm committed to delivering exceptional financial advisory, investment, and wealth planning services. Our foundation is built on knowledge and integrity, ensuring that our interests are always aligned with those of our clients.</p>
                        <p className='text-base font-normal text-[#6A6A6A] inter'>Introducing "CheerBull," our cutting-edge DIY (Do-It-Yourself) digital platform. Leveraging the latest technology, CheerBull offers a seamless and fully digital investing and wealth creation experience, making investing easy and accessible for everyone, with or without an Advisor.</p>
                    </div>
                    {/* Right side */}
                    <div className=''>
                        <img src={img_1} className=''/>
                    </div>
        </section>

    </>
  )
}

export default AboutHero