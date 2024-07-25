import React from 'react'
import google from '../assets/Icons/google-play-store-icon.svg'
import ios from '../assets/Icons/ios-app-icon.svg'
import mobile from '../assets/Images/Mobile-img.svg'
import logo from "../assets/Icons/cheerbull-logo.svg";
import linkdin from '../assets/Icons/Linkedin.svg'
import facebook from '../assets/Icons/Facebook.svg'
import Twitter from '../assets/Icons/Twitter.svg'
import Youtube from '../assets/Icons/Youtube.svg'


function Fotter() {
  return (
    <>
        <section className='bg-black hidden xl:block '>
            <div className='container py-24 flex justify-between relative '>
                    {/* left side */}
                <div className='flex justify-center items-center gap-5 xl:w-2/5'>
                    <h1 className='text-4xl font-extrabold nunito text-white'>Download One of India's Best Trading Apps</h1>
                    <div className='flex flex-col gap-4'>
                        <img src={google} className='w-96 object-cover'/>
                        <img src={ios} className='w-96 object-cover'/>
                    </div>
                </div>

                    {/* right side */}
                    <div className=''>
                        <img src={mobile} className='absolute right-24 -top-28'/>
                    </div>
            </div>
        </section>
        <section className='hidden xl:block'>
            <div className=' bg-white xl:w-[977px] xl:h-52 rounded-2xl flex justify-center items-center mx-72 -mt-16 absolute shadow-xl '>
                    <div className='grid grid-cols-3 gap-8 ml-10 px-16'>
                        <div className=''>
                            <h1 className=' text-3xl nunito font-bold text-black'>Sign up to receive our latest news</h1>
                        </div>
                        <div>
                            <input placeholder='Enter your email' className='mb-1.5 border-2 border-[#C4C4C4] rounded-lg py-3 px-10'/>
                            <p className='text-[10px] font-normal text-[#CBCBCB]'>Get an update every week - no spam.</p>
                        </div>
                        <div>
                            <button className='sign_btn bg-custom text-xl font-medium asap text-white rounded-lg py-3 px-10'>
                                <span>Subscribe</span>
                            </button>
                        </div>
                    </div>
            </div>
        </section>
                {/* Fotter */}
        <section className='bg-[#F5F5F5] hidden xl:block'>
            <div className='container pt-60 pb-12 flex justify-between '>
                  {/* Left part */}
                  <div className='w-2/5'>
                    <img src={logo}/>
                    <p className='text-base text-[#6a6a6a] inter font-normal py-4'>
                       Access the best and comprehensive Service Suite and products for your financial goals. Be up to date with your aggregate portfolio, and execute transactions seamlessly with no extra charges.  
                    </p>
                     {/* Social Media icon */}
                     <div className='flex gap-4'>
                        <img src={linkdin}/>
                        <img src={facebook}/>
                        <img src={Twitter}/>
                        <img src={Youtube}/>
                     </div>
                  </div>

                  {/* Right part */}
                  <div  className='flex gap-28'>
                    <div>
                        <h2 className='nunito text-lg font-bold'>Investment Services</h2>
                        <p className='inter font-normal text-sm text-[#6C6363] leading-7'>Mutual Funds</p>
                        <p className='inter font-normal text-sm text-[#6C6363] leading-7'>Portfolio Management Services (PMS)</p>
                        <p className='inter font-normal text-sm text-[#6C6363] leading-7'>Alternative Investment Funds (AIF)</p>
                        <p className='inter font-normal text-sm text-[#6C6363] leading-7'>Market-Linked Debentures</p>
                        <p className='inter font-normal text-sm text-[#6C6363] leading-7'>Unlisted Equities</p>
                        <p className='inter font-normal text-sm text-[#6C6363] leading-7'>Pre-IPO</p>
                        <p className='inter font-normal text-sm text-[#6C6363] leading-7'>ESOP</p>
                        <p className='inter font-normal text-sm text-[#6C6363] leading-7'>Fixed Income Instruments</p>
                        <p className='inter font-normal text-sm text-[#6C6363] leading-7'>Corporate FD</p>
                        <p className='inter font-normal text-sm text-[#6C6363] leading-7'>Corporate Bonds</p>
                        <p className='inter font-normal text-sm text-[#6C6363] leading-7'>Non-Convertible Debentures (NCDs)</p>
                        <p className='inter font-normal text-sm text-[#6C6363] leading-7'>Sovereign Gold Bonds (SGBs)</p>
                        <p className='inter font-normal text-sm text-[#6C6363] leading-7'>Tax Free Bonds</p>
                        <p className='inter font-normal text-sm text-[#6C6363] leading-7'>High Yield Bonds</p>
                        <p className='inter font-normal text-sm text-[#6C6363] leading-7'>Demat & Trading</p>
                        <p className='inter font-normal text-sm text-[#6C6363] leading-7'>Equity Intraday Trading</p>
                        <p className='inter font-normal text-sm text-[#6C6363] leading-7'>Futures and options</p>
                        <p className='inter font-normal text-sm text-[#6C6363] leading-7'>Equity Cash Market</p>
                        <p className='inter font-normal text-sm text-[#6C6363] leading-7'>Exchange Traded Funds (ETF)</p>
                    </div> 
                    <div> 
                        <h3 className='nunito text-lg font-bold'>Financial Services</h3>
                        <p className='inter font-normal text-sm text-[#6C6363] leading-7'>Education Loan</p>
                        <p className='inter font-normal text-sm text-[#6C6363] leading-7'>Personal Load</p>
                        <p className='inter font-normal text-sm text-[#6C6363] leading-7'>Business Load</p>
                    </div>
                    <div>
                        <h4 className='nunito text-lg font-bold'>Company</h4>
                        <p className='inter font-normal text-sm text-[#6C6363] leading-7'>About Us</p>
                        <p className='inter font-normal text-sm text-[#6C6363] leading-7'>Our Services</p>
                        <p className='inter font-normal text-sm text-[#6C6363] leading-7'>Contact Us</p>
                    </div>
                  </div>
            </div>
                  {/* Disclaimer: */}
                  <div className='container border-t border-[#C3C3C3] py-12'>
                    <p className='inter text-base font-normal text-[#6A6A6A]'><span className='font-bold pr-2'>Disclaimer:</span>
                    InCred Premier (Mvalu Technology Services Private Limited) is an AMFI registered Mutual Fund Distributor under ARN: 275918. Some services are offered through group companies. InCred Premier is also registered with APMI having registration no: APRN00175</p>
                    <p className='inter text-base font-normal text-[#6A6A6A]'>Mutual funds & Securities are subject to market risks, please read all your scheme/securities-related documents carefully before investing.</p>
                    <p className='inter text-base font-normal text-[#6A6A6A] py-3'>InCred Premier (Mvalu Technology Services Private Limited) of distributor for Products such as PMS, AIF, OFS, NCD etc</p>
                    <p className='inter text-base font-normal text-[#6A6A6A] pb-3'>Guided view is indicative in nature and is based on the information provided by the user voluntarily. Each user of this information should make such an investigation as it deems necessary to arrive at an independent evaluation of an investment in the securities of companies referred here (including the merits and risks involved) and should consult his own advisors to determine the merits and risks of such investment.</p>
                    <p className='inter text-base font-normal text-[#6A6A6A]'><span className='font-bold'>Registered Office and Corporate Office Address:</span> Plot No. C, The Capital, Unit No. 1203, 12th floor, B Wing, 70, G Block Rd, Bandra Kurla Complex, Mumbai, Maharashtra 400051</p>
                    <p className='inter text-base font-normal text-[#6A6A6A]'><span className='font-bold'>CIN :</span>U66220MH2018PTC313289</p>
                  </div>

        </section>
                {/* For Mobile Fotter  */}
                <section className='xl:hidden block bg-black'>
                    <div className='container pt-8 flex gap-6'>
                        <div className='w-1/2'>
                            <h1 className='text-white text-lg font-extrabold nunito leading-6'>Download One of India's Best Trading Apps</h1>
                            <div className='flex gap-2 mt-2'>
                                <img src={google} className=' h-5'/>
                                <img src={ios} className=' h-5'/>
                            </div>
                        </div>
                        <div className='w-1/2'>
                            <img src={mobile} className='object-cover h-fit'/>
                        </div>
                    </div>
                </section>
                <section className='xl:hidden block'>
                    <div className='container py-8'>
                        <h1 className='text-lg font-bold pb-3 nunito leading-5'>Sign up to receive <br/> our latest news</h1>
                        <div className='flex gap-2'>
                            <div>
                                <input placeholder='Enter your email' className='py-2 px-3 rounded-lg border border-[#C3C3C3]'/>
                            </div>
                            <button className=' bg-custom py-2 px-3 rounded-lg text-white text-start'>Subscribe</button>
                        </div>
                        <p className='inter font-normal text-[8px] pt-1 text-[#CBCBCB]'>Get an update every week - no spam.</p>
                    </div>
                </section>
                <section className='xl:hidden block bg-[#F5F5F5]'>
                    <div className='container py-5'>
                        <div className='flex gap-7'>
                            <img src={logo} className='-mt-16'/>
                            <div className='flex flex-col gap-4'>
                                <p className='text-xs font-normal text-[#6A6A6A] inter'>Access the best and comprehensive Service Suite and products for your financial goals. Be up to date with your aggregate portfolio, and execute transactions seamlessly with no extra charges.</p>
                                <div className='flex gap-2'>
                                    <img src={linkdin} className='h-6 w-8'/>
                                    <img src={facebook} className='h-6 w-8'/>
                                    <img src={Twitter} className='h-6 w-8'/>
                                    <img src={Youtube} className='h-6 w-8'/>
                                </div>
                            </div>
                        </div>
                               {/* Links */}
                            <div className='flex justify-between py-8'>
                                <ul className='w-7/12 flex flex-col gap-2'>
                                    <li className='nunito text-base font-bold text-[#343434]'>Investment Services</li>
                                    <li className='inter text-xs font-normal text-[#6C6363] '>Mutual Funds</li>
                                    <li className='inter text-xs font-normal text-[#6C6363] '>Portfolio Management Services (PMS)</li>
                                    <li className='inter text-xs font-normal text-[#6C6363] '>Alternative Investment Funds (AIF)</li>
                                    <li className='inter text-xs font-normal text-[#6C6363] '>Market-Linked Debentures</li>
                                    <li className='inter text-xs font-normal text-[#6C6363] '>Unlisted Equities</li>
                                    <li className='inter text-xs font-normal text-[#6C6363] '>Pre-IPO</li>
                                    <li className='inter text-xs font-normal text-[#6C6363] '>ESOP</li>
                                    <li className='inter text-xs font-normal text-[#6C6363] '>Fixed Income Instruments</li>
                                    <li className='inter text-xs font-normal text-[#6C6363] '>Corporate FD</li>
                                    <li className='inter text-xs font-normal text-[#6C6363] '>Corporate Bonds</li>
                                    <li className='inter text-xs font-normal text-[#6C6363] '>Non-Convertible Debentures (NCDs)</li>
                                    <li className='inter text-xs font-normal text-[#6C6363] '>Sovereign Gold Bonds (SGBs)</li>
                                    <li className='inter text-xs font-normal text-[#6C6363] '>Tax Free Bonds</li>
                                    <li className='inter text-xs font-normal text-[#6C6363] '>High Yield Bonds</li>
                                    <li className='inter text-xs font-normal text-[#6C6363] '>Demat & Trading</li>
                                    <li className='inter text-xs font-normal text-[#6C6363] '>Equity Intraday Trading</li>
                                    <li className='inter text-xs font-normal text-[#6C6363] '>Futures and options</li>
                                    <li className='inter text-xs font-normal text-[#6C6363] '>Equity Cash Market</li>
                                    <li className='inter text-xs font-normal text-[#6C6363] '>Exchange Traded Funds (ETF)</li>
                                </ul>
                                <div>
                                    <ul className='flex flex-col gap-2'>
                                        <li className='nunito text-base font-bold text-[#343434]'>Financial Services</li>
                                        <li className='inter text-xs font-normal text-[#6C6363]'>Education Loan</li>
                                        <li className='inter text-xs font-normal text-[#6C6363]'>Personal Load</li>
                                        <li className='inter text-xs font-normal text-[#6C6363]'>Business Load</li>
                                    </ul>
                                    <ul className='flex flex-col gap-2 pt-3'>
                                        <li className='nunito text-base font-bold text-[#343434]'>Company</li>
                                        <li className='inter text-xs font-normal text-[#6C6363]'>About Us</li>
                                        <li className='inter text-xs font-normal text-[#6C6363]'>Our Services</li>
                                        <li className='inter text-xs font-normal text-[#6C6363]'>Contact Us</li>
                                    </ul>
                                </div>
                           </div>
                           <div className='border-t border-[#C3C3C3]'>
                            <p className='inter text-xs font-normal text-[#6A6A6A] pt-5'><span className='font-bold pr-1'>Disclaimer:</span>
                            InCred Premier (Mvalu Technology Services Private Limited) is an AMFI registered Mutual Fund Distributor under ARN: 275918. Some services are offered through group companies. InCred Premier is also registered with APMI having registration no: APRN00175</p>
                            <p className='inter text-xs font-normal text-[#6A6A6A] py-2'>Mutual funds & Securities are subject to market risks, please read all your scheme/securities-related documents carefully before investing.</p>
                            <p className='inter text-xs font-normal text-[#6A6A6A]'>InCred Premier (Mvalu Technology Services Private Limited) of distributor for Products such as PMS, AIF, OFS, NCD etc</p>
                            <p className='inter text-xs font-normal text-[#6A6A6A] py-2'>Guided view is indicative in nature and is based on the information provided by the user voluntarily. Each user of this information should make such an investigation as it deems necessary to arrive at an independent evaluation of an investment in the securities of companies referred here (including the merits and risks involved) and should consult his own advisors to determine the merits and risks of such investment.</p>
                            <p className='inter text-xs font-normal text-[#6A6A6A]'><span className='font-bold'>Registered Office and Corporate Office Address :</span> Plot No. C, The Capital, Unit No. 1203, 12th floor, B Wing, 70, G Block Rd, Bandra Kurla Complex, Mumbai, Maharashtra 400051</p>
                            <p className='inter text-xs font-normal text-[#6A6A6A]'><span className='font-bold'>CIN :</span>U66220MH2018PTC313289</p>
                           </div>
                    </div>
                </section>
    </>
  )
}

export default Fotter