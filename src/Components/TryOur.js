import React from 'react'

function TryOur() {
  return (
    <section className='tryour_bg'>
        <div className='container py-10 lg:py-16'>
                    <h1 className='text-white text-lg sm:text-2xl lg:text-3xl xl:text-5xl font-bold nunito text-center  pb-10'>
                    Try our Integrated Investment Platformfor all your 
                    Investment Needs.
                    </h1>
                <div className=' flex justify-center gap-6'>
                    <button className='sign_btn roboto px-8 py-2 '>
                      <span>Sign In</span>
                    </button>
                    <button className='sign_btn roboto px-8 py-2 '>
                      <span>Sign Up</span>
                    </button>
                </div>
           
        </div>
    </section>
  )
}

export default TryOur