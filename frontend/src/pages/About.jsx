import React from 'react'
import Title from '../components/Title'
import{assest} from '../Assest/assest'
import NewsletterBox from '../components/NewsletterBox'

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'}/>
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]'src={assest.about} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil itaque nostrum eaque ut suscipit! Quas, sapiente, animi earum cumque quis magnam provident, nam quia voluptatum iste deleniti minima doloribus rerum.
        Maxime mollitia tempora modi, odit fugiat ad, aspernatur nesciunt rem sapiente repellendus aliquid cupiditate maiores magnam sunt ea est sint possimus. Eos enim cupiditate ad dolores repellat perspiciatis quibusdam maxime?</p>
        <p> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae, magni saepe inventore iusto doloremque deserunt laborum, eligendi eum magnam quis, nostrum eveniet quae ratione tenetur amet placeat accusamus voluptatem corporis.
        Iure magnam consequatur sed quae soluta dolorem molestiae iusto sapiente assumenda veniam nesciunt pariatur amet alias, nihil explicabo error aliquid odit cupiditate repudiandae odio, commodi quisquam deserunt nostrum cumque! Ipsam?</p>
         <b className='text-gray-800 '>OUR MISSION</b>
         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, odit! Totam doloribus repudiandae quidem quae, voluptatum voluptate, saepe animi ipsam porro non sequi? Repellendus quo corporis ipsam! Minima, aliquam quisquam.
         aliquam quasi est hic, nesciunt cupiditate assumenda tenetur dolores in illum repellat earum harum accusamus vero!
         .</p>
        </div>
      </div>
      <div className='text-3xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US'}/>
      </div>
      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurence:</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas aliquid necessitatibus odio, officia ex mollitia voluptates sequi deleniti beatae ullam pariatur magnam odit consectetur architecto, fuga magni. Sunt, voluptatum nisi!
          Nulla, illum veritatis pariatur natus, numquam dolorum itaque doloremque debitis placeat corporis excepturi nobis autem at ipsa, earum iusto quos consequatur ut cupiditate deleniti quae animi officiis? Recusandae, nemo laborum?</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convenience:</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas aliquid necessitatibus odio, officia ex mollitia voluptates sequi deleniti beatae ullam pariatur magnam odit consectetur architecto, fuga magni. Sunt, voluptatum nisi!
          Nulla, illum veritatis pariatur natus, numquam dolorum itaque doloremque debitis placeat corporis excepturi nobis autem at ipsa, earum iusto quos consequatur ut cupiditate deleniti quae animi officiis? Recusandae, nemo laborum?</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Expectional Customer Service</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas aliquid necessitatibus odio, officia ex mollitia voluptates sequi deleniti beatae ullam pariatur magnam odit consectetur architecto, fuga magni. Sunt, voluptatum nisi!
          Nulla, illum veritatis pariatur natus, numquam dolorum itaque doloremque debitis placeat corporis excepturi nobis autem at ipsa, earum iusto quos consequatur ut cupiditate deleniti quae animi officiis? Recusandae, nemo laborum?</p>
        </div>
      </div>

      <NewsletterBox />

    </div>
  )
}

export default About
