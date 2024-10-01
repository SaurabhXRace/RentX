import React, { useContext, useEffect, useState } from 'react'
import { useParams, useSearchParams } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext';
import RelatedProduct from '../components/RelatedProduct';

const product = () => {
  const{productId}=useParams();

  const{products,currency,addToCart }=useContext(ShopContext);
  const [productData,setProductData] = useState(false);
  const[image,setImage] = useState('')


  const fetchProductData= async() => {


        products.map((item)=>{
          if(item._id === productId){
            setProductData(item)
            setImage(item.image[0])
          return null;}
        })
  }

  useEffect(()=>{
fetchProductData()


  },[productId])


  return productData ?(
    <div className='border-t-2 pt-10 transition-opacity  ease-in duration-500 opacity-100'>
      {/**product data */}
      <div className='flex gap-12 sm:gap-12 flex-col sm:flex-row'>

          {/**product images */}
          <div className='flex-1  flex flex-col-reverse gap-3 sm:flex-row'>
            <div className='flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full'>

              {
                productData.image.map((item, index)=>(
                  <img onClick={()=>setImage(item)}src={item} key={index} className='w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer' alt="" />

                ))
              }
              </div>
              <div className='w-full sm:w-[80%]'>
                <img className='w-full h-auto ' src={image} alt="" />
                </div>
      </div>


      {/**product info */}
      <div className='flex-1'>
        <h1 className='font-medium text-2xl uppercase mt-2'>
        {productData.name}
        </h1>
       <p className='mt-5 text-3xl font-medium '>{currency}{productData.price}<span className=' text-xl'>/perkm</span></p>
       <p className='mt-5 text-gray-700 uppercase text-2xl md:w-4/5'>{productData.ownername}</p>
       <div className='flex flex-col gap-4 my-8'>
                <p className='text-2xl'> Vehicle Capacity </p>
                <div className='flex gap-4'>
                 <p >{productData.weightSit} {productData.choice}</p>
                </div>
                
       </div>
       <button onClick={()=> addToCart(productData._id)} className='bg-black text-white  px-8 py-3 text-sm active:bg-gray-700'> CONFIRM YOUR VEHICLE</button>
       <hr className='mt-8 sm:w-4/5' />
       <div className='text-sm text-gray-500 mt-5 flex flex-col gap-1'>
        <p>Good Condition of vehicle</p>
        <p>Pay after complete your ride</p>
        <p>Easy to Change your Ride any time you want</p>
       </div>
      </div>
</div>
{/**review section */}
<div className='mt-20'>
  <div className='flex'>
    <b className='border px-5 py-3 text-sm'>Description</b>
    <p className='border px-5 py-3 text-sm'>Reviews (150)</p>
  </div>
  <div className='flex flex-col gap-4  border px-6 py-6 text-sm text-gray-500'>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur nam labore quis cumque perspiciatis maxime dolore nobis aliquid, animi fugiat soluta repudiandae, est quidem numquam esse commodi velit voluptas tempora?
    Culpa, cum expedita. Itaque ipsa, cum aliquam similique assumenda eveniet ipsam, iure accusamus mollitia amet dolores cupiditate! </p>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique, perspiciatis officiis mollitia beatae saepe dolor labore consectetur, totam pariatur soluta commodi ad impedit assumenda repellat vero temporibus asperiores eius. Quae.
    Recusandae eaque, dolorem, accusamus doloribus omnis error minima animi unde doloremque ad id cum cupiditate sapiente beatae ullam aperiam voluptas! Beatae mollitia expedita deserunt obcaecati! Eligendi hic natus ex fugit?</p>
  </div>
</div>
{/**display related product */}

<RelatedProduct category={productData.category} subCategroy={productData.subCategroy}></RelatedProduct>
      
    </div>
  ) : <div className='opacity-0'></div>
}

export default product
