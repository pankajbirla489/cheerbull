import React from 'react'
import img_1 from '../assets/Images/How-it-img-1.svg'
import img_2 from '../assets/Images/How-it-img-2.svg'
import img_3 from '../assets/Images/How-it-img-3.svg'
import img_4 from '../assets/Images/How-it-img-4.svg'
import img_5 from '../assets/Images/How-it-img-5.svg'
import img_6 from '../assets/Images/How-it-img-6.svg'
import img_7 from '../assets/Images/How-it-img-7.svg'
import img_8 from '../assets/Images/How-it-img-8.svg'
import img_9 from '../assets/Images/How-it-img-9.svg'
import img_10 from '../assets/Images/How-it-img-10.svg'

function HowWorks() {
  return (
    <section className='bg-black'>
        <div className='container py-10'>
            <h1 className='text-center nunito text-white font-bold text-2xl md:text-2xl lg:text-3xl xl:text-4xl pb-10'>How it works</h1>
            <div className='grid xl:grid-cols-5 lg:grid-cols-4 grid-cols-2 md:grid-cols-3 gap-4 lg:gap-12'>
                <div className='xl:h-80  bg-white rounded-xl py-4 px-3'>
                    <p className='text-custom text-3xl font-bold asap'>01</p>
                    <img src={img_1} className='h-40 w-40 xl:mx-5 lg:mb-2'/>
                    <p className='text-base pb-1 nunito font-bold text-center'>Download App</p>
                    <p className='pb-2 text-xs font-normal plus-jakarta-sans text-center text-[#6A6A6A]'>Login to the platform from a computer, or app on your phone or tablet.</p>
                </div>
                <div className='xl:h-80  bg-white rounded-xl py-4 px-3'>
                    <p className='text-custom text-3xl font-bold asap'>02</p>
                    <img src={img_2} className='h-40 w-40 xl:mx-5 lg:mb-2'/>
                    <p className='text-base pb-1 nunito font-bold text-center'>Sign Up</p>
                    <p className='pb-2 text-xs font-normal plus-jakarta-sans text-center text-[#6A6A6A]'>Login to the platform from a computer, or app on your phone or tablet.</p>
                </div>
                <div className='xl:h-80  bg-white rounded-xl py-4 px-3'>
                    <p className='text-custom text-3xl font-bold asap'>03</p>
                    <img src={img_3} className='h-40 w-40 xl:mx-5 lg:mb-2'/>
                    <p className='text-base pb-1 nunito font-bold text-center'>Add your existing portfolio</p>
                    <p className='pb-2 text-xs font-normal plus-jakarta-sans text-center text-[#6A6A6A]'>Login to the platform from a computer, or app on your phone or tablet.</p>
                </div>
                <div className='xl:h-80  bg-white rounded-xl py-4 px-3'>
                    <p className='text-custom text-3xl font-bold asap'>04</p>
                    <img src={img_4} className='h-40 w-40 xl:mx-5 lg:mb-2'/>
                    <p className='text-base pb-1 nunito font-bold text-center leading-5'>Review & Track Your Existing Portfolio For Free</p>
                    <p className='pb-2 text-xs font-normal plus-jakarta-sans text-center text-[#6A6A6A]'>Login to the platform from a computer, or app on your phone or tablet.</p>
                </div>
                <div className='xl:h-80  bg-white rounded-xl py-4 px-3'>
                    <p className='text-custom text-3xl font-bold asap'>05</p>
                    <img src={img_5} className='h-40 w-40 xl:mx-5 lg:mb-0'/>
                    <p className='text-base pb-1 nunito font-bold  text-center leading-5'>New to Mutual Funds! Check KYC status & Complete KYC paperless </p>
                    <p className='pb-2 text-xs font-normal plus-jakarta-sans text-center text-[#6A6A6A]'>Login to the platform from a computer, or app on your phone or tablet.</p>
                </div>
                <div className='xl:h-80  bg-white rounded-xl py-4 px-3'>
                    <p className='text-custom text-3xl font-bold asap'>06</p>
                    <img src={img_6} className='h-40 w-40 xl:mx-5 lg:mb-2'/>
                    <p className='text-base pb-1 nunito font-bold  text-center'>Set-up Bank Mandate</p>
                    <p className='pb-2 text-xs font-normal plus-jakarta-sans text-center text-[#6A6A6A]'>Login to the platform from a computer, or app on your phone or tablet.</p>
                </div>
                <div className='xl:h-80  bg-white rounded-xl py-4 px-3'>
                    <p className='text-custom text-3xl font-bold asap'>07</p>
                    <img src={img_7} className='h-40 w-40 xl:mx-5 lg:mb-2'/>
                    <p className='text-base pb-1 nunito font-bold text-center leading-5'>Buy/Sell in Your Existing Folio</p>
                    <p className='pb-2 text-xs font-normal plus-jakarta-sans text-center text-[#6A6A6A]'>Login to the platform from a computer, or app on your phone or tablet.</p>
                </div>
                <div className='xl:h-80  bg-white rounded-xl py-4 px-3'>
                    <p className='text-custom text-3xl font-bold asap'>08</p>
                    <img src={img_8} className='h-40 w-40 xl:mx-5 lg:mb-0'/>
                    <p className='text-base pb-1 nunito font-bold text-center leading-5'>Explore MF & Other Products Explore Goal Specific Baskets </p>
                    <p className='pb-2 text-xs font-normal plus-jakarta-sans text-center text-[#6A6A6A]'>Login to the platform from a computer, or app on your phone or tablet.</p>
                </div>
                <div className='xl:h-80  bg-white rounded-xl py-4 px-3'>
                    <p className='text-custom text-3xl font-bold asap'>09</p>
                    <img src={img_9} className='h-40 w-40 xl:mx-5 lg:mb-2'/>
                    <p className='text-base pb-1 nunito font-bold text-center leading-5'>Buy/Sell Mutual Fund and Other Products Online</p>
                    <p className='pb-2 text-xs font-normal plus-jakarta-sans text-center text-[#6A6A6A]'>Login to the platform from a computer, or app on your phone or tablet.</p>
                </div>
                <div className='xl:h-80  bg-white rounded-xl py-4 px-3'>
                    <p className='text-custom text-3xl font-bold asap'>10</p>
                    <img src={img_10} className='h-40 w-40 xl:mx-5 lg:mb-2'/>
                    <p className='text-base pb-1 nunito font-bold text-center '>Moniter/Rebal</p>
                    <p className='pb-2 text-xs font-normal plus-jakarta-sans text-center text-[#6A6A6A]'>Login to the platform from a computer, or app on your phone or tablet.</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default HowWorks