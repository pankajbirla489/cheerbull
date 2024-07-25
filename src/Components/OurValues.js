import React from 'react'
import img_1 from '../assets/Images/About-Us-our-valued-img.webp'
import icon from '../assets/Icons/About-Us-valued-icon.svg'
function OurValues() {
  return (
   <section className='bg-[#E4E4E4]'>
    <div className='container py-12'>
            <h1 className='text-center font-bold nunito text-4xl text-[#3C3C3C]'>Our Values/We Stands For</h1>
            <p className='inter text-base font-normal text-center pt-2 text-[#6A6A6A]'>Access the best and comprehensive Service Suite and products for your financial goals. Be up to date with your aggregate portfolio,</p>
            <div className='flex'>
                <div>
                    <img src={img_1} alt="" />
                </div>
                <div>
                    <div className='flex'>
                        <img src={icon}/>
                        <div>
                            <p className='text-2xl nunito font-bold text-[#3C3C3C]'>Customer Excellence</p>
                            <p className='inter text-base font-normal text-[#6A6A6A]'>The new-age technologies summed up with our commitment and dedication has made us a trusted partner to our clients </p>
                        </div>
                    </div>
                    <div className='flex'>
                        <img src={icon}/>
                        <div>
                            <p className='text-2xl nunito font-bold text-[#3C3C3C]'>Technology Driven</p>
                            <p className='inter text-base font-normal text-[#6A6A6A]'>We have introduced a new podium for tech-savvy millennials and Genz that are venturing into the financial marketplace. </p>
                        </div>
                    </div>
                    <div className='flex'>
                        <img src={icon}/>
                        <div>
                            <p className='text-2xl nunito font-bold text-[#3C3C3C]'>Transparency</p>
                            <p className='inter text-base font-normal text-[#6A6A6A]'>We believe in transparency at every step of your investment process.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <div className='w-1/2'>
                    <h2 className='text-[#3C3C3C] text-4xl font-bold nunito '>Why Start Investing?</h2>
                    <p className='inter text-base font-normal text-[#6A6A6A] py-3'>Access the best and comprehensive Service Suite and products for your financial goals. Be up to date with your aggregate portfolio, and execute transactions seamlessly with no extra charges. Access the best and comprehensive Service Suite and products for your financial goals. Be up to date with your aggregate portfolio, and execute transactions seamlessly with no extra charges</p>
                    <h3 className='text-2xl font-bold nunito text-[#3C3C3C] '>24x7 Reporting</h3>
                    <p className='inter text-xs font-normal text-[#6A6A6A]'>A comprehensive reporting of your portfolio</p>
                    <h3 className='text-2xl font-bold nunito text-[#3C3C3C]'>Your own Technology</h3>
                    <p className='inter text-xs font-normal text-[#6A6A6A]'>A self learning portal that guides you and knows what’s best for you</p>
                    <h3 className='text-2xl font-bold nunito text-[#3C3C3C] '>Partner Support</h3>
                    <p className='inter text-xs font-normal text-[#6A6A6A]'>A registered and trained partner available at your service 24×7</p>
                </div>
            </div>
    </div>
   </section>
  )
}

export default OurValues