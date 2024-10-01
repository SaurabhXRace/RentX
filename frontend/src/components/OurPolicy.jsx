import React from 'react'
import { assest } from '../Assest/assest'


const OurPolicy = () => {
  return (
    <div className='flex flex-col sm:flex-row justify-around gap-2 text-center py-20 text-xs sm:text-sm md:text-base text-gray-700'>
        <div>
            <img className='w-12 m-auto mb-5' src={assest.switch_icon} alt="" />
            <p className='font-semibold'>Easy Swap Policy</p>
            <p className='text-gray-400'>We offer our customer to exchange the rider or vehicle for any time!!!!! </p>
        </div>
        <div>
            <img className='w-12 m-auto mb-5' src={assest.map_icon} alt="" />
            <p className='font-semibold'>Choose your Location</p>
            <p className='text-gray-400'>You can hire us All over the world by enabling your location </p>
        </div>
        <div>
            <img className='w-12 m-auto mb-5' src={assest.sch_icon} alt="" />
            <p className='font-semibold'>Pick your Date</p>
            <p className='text-gray-400'>Why you waiting for right time!!!!!! Pick any date and rent you vehicle and ride!!!!!!!! </p>
        </div>
        <div>
            <img className='w-12 m-auto mb-5' src={assest.support_img} alt="" />
            <p className='font-semibold'>Best Customer support</p>
            <p className='text-gray-400'>We provide 24/7 customer support </p>
        </div>
    </div>
  )
}

export default OurPolicy
