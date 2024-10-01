import React from 'react'

const NewsletterBox = () => {
    const onSubmitHandler = (event) =>{
        event.preventDefault();

}
  return (
    <div className='text-center'>
     <p className='text-3xl font-medium text-gray-800'>Subscribe now  for 90% free on your first Ride!!!!!!!!!!</p> 
     <p className='text-gray-400 mt-3'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt exercitationem dolores hic at ipsa, soluta fuga omnis quisquam 

     </p>
     <form onSubmit={onSubmitHandler}className='w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3'>
        <input className='w-full sm:flex-1 outline-none' type="email" placeholder='Enter your Email' required />
        <button type='submit' className='bg-black text-white text-xl px-10 py-4'>Subscribe</button>

     </form>
    </div>

  )
}

export default NewsletterBox
