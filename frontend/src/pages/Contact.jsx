import React from 'react'
import Title from '../components/Title'
import { assest } from '../Assest/assest'
import NewsletterBox from '../components/NewsletterBox'

const Contact = () => {
  return (
    <div>
      <div className='text-center text-2xl pt-10 border-t'>
        <Title text1={'CONTACT'} text2={'US'}/>
      </div>

      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28'>
        <img className='w-full md:max-w-[480px]' src={assest.contact} alt="" />
        <div className='flex flex-col justify-center items-start gap-6'>
          <p className='font-semibold text-xl text-gray-600'>OUR PARTNER</p>
          <p className='text-gray-500'>Street:  99 Halsey Road <br />City:  Mccracken State/province/ <br />area:   South Australia <br />Zip code:  5211 <br />Country calling code:  +61</p>
          <p className='text-gray-500'>Phone number: (08) 8221 4438 <br />Email:Owner@RentX.com</p>
          <p className='font-semibold text-xl text-gray-600'> Career at RentX</p>
          <p className='text-gray-500'>Learn more about our team and job opening</p>
          <button className='border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500'>Explor Jobs</button>
        </div>
      </div>

      <NewsletterBox/>
    </div>
  )
}

export default Contact
