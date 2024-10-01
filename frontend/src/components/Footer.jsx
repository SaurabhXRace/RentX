import React from 'react'
import { assest } from '../Assest/assest'

const Footer = () => {
  return (
    <div>
     <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
        <div>
            <img src={assest.rentx} className='mb-5 w-32' alt="" />
            <p className='w-full md:w-2/3 text-gray-600'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. </p>
            </div>
            <div>
                <p className='text-xl font-medium mb-5'>COMPANY</p>
                <ul className='flex flex-col gap-1 text-gray-600' >
                    <li>Home</li>
                    <li>AboutUs</li>
                    <li>PickUp</li>
                    <li>Privcay Policy</li>
                </ul>
            </div>
            <div>
                <p className='text-xl font-medium mb-5'> GET IN TOUCH</p>
                <ul className='flex flex-col gap-1 text-gray-600'>
                    <li>+91-6262-054-594</li>
                    <li>Owner@RentX.com</li>
                </ul>
            </div>
            </div>

          <div >
            <hr />
            <p className='py-5 text-sm text-center'> Copyright 2024@ RentX.com - All Right Reserved.</p>
            </div>   
    </div>
  )
}

export default Footer
