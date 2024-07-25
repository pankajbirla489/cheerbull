import React from 'react'
import icon_1 from '../assets/Icons/Perferred-icon-1.svg'
import icon_2 from '../assets/Icons/Perferred-icon-2.svg'
import icon_3 from '../assets/Icons/Perferred-icon-3.svg'
function Preferred() {
  return (
    <section>
        <div className="container py-6 md:py-12">
            <h1 className='nunito text-center text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold pb-6 md:pb-12'>Pick Your Preferred Investment</h1>
            <div className='grid md:grid-cols-3 grid-cols-2 gap-3 sm:gap-4'>
                <div className='flex gap-4 sm:gap-8 px-2 md:px-2 lg:px-8 xl:px-12 py-2 md:py-3 lg:py-3 border-2 border-custom rounded-lg h-20 '>
                    <img src={icon_1} className='h-8 w-8 my-4 md:mt-2 lg:mt-0 md:ml-3 lg:ml-0 md:my-0 lg:w-fit lg:h-fit'/>
                    <p className='xl:text-xl text-sm md:text-base font-bold nunito'>Mutual FundsSIP / Lumpsum</p>
                </div>
                <div className='flex gap-4 sm:gap-8 px-2 lg:px-8 xl:px-12 py-2 md:py-3 border-2 border-custom rounded-lg h-20 '>
                    <img src={icon_2} className='h-8 w-8 my-4 md:my-0 md:mt-2 lg:mt-0 md:ml-3 lg:ml-0 lg:w-fit lg:h-fit'/>
                    <p className='xl:text-xl text-sm md:text-base font-bold nunito py-3'>Equity / Demat</p>
                </div>
                <div className='flex gap-4 sm:gap-8 px-2 lg:px-8 xl:px-12 py-2 md:py-3 border-2 border-custom rounded-lg h-20 '>
                    <img src={icon_1} className='h-8 w-8 my-4 md:my-0 md:mt-2 lg:mt-0 md:ml-3 lg:ml-0 lg:w-fit lg:h-fit'/>
                    <p className='xl:text-xl text-sm md:text-base font-bold nunito py-3'>Fixed Deposits</p>
                </div>
                <div className='flex gap-4 sm:gap-7 px-2 lg:px-8 xl:px-12 py-2 md:py-1 xl:py-2  border-2 border-custom rounded-lg h-20 '>
                    <img src={icon_2} className='h-8 w-8 my-4 md:my-0 md:mt-4 lg:mt-0 md:ml-3 lg:ml-0 lg:w-fit lg:h-fit'/>
                    <p className='xl:text-xl text-sm md:text-base font-bold nunito'>Portfolio Management Services</p>
                </div>
                <div className='flex gap-4 sm:gap-8 px-2 lg:px-8 xl:px-12 py-2 md:py-3 border-2 border-custom rounded-lg h-20 '>
                    <img src={icon_1} className='h-8 w-8 my-4 md:my-0 md:mt-2 lg:mt-0 md:ml-3 lg:ml-0 lg:w-fit lg:h-fit'/>
                    <p className='xl:text-xl text-sm md:text-base font-bold nunito py-5 sm:py-3'>P2P</p>
                </div>
                <div className='flex gap-4 sm:gap-8 px-2 lg:px-8 xl:px-12 py-2 md:py-1 border-2 border-custom rounded-lg h-20 '>
                    <img src={icon_3} className='h-8 w-8 my-4 md:my-0 md:mt-4 lg:mt-0 md:ml-3 lg:ml-0 lg:w-fit lg:h-fit'/>
                    <p className='xl:text-xl text-sm md:text-base font-bold nunito sm:py-3'>Loan Against MF / Shares</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Preferred