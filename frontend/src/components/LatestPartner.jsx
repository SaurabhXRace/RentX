import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title';
import ProductItem from './ProductItem';

const LatestPartner = () => {

    const{products} =useContext(ShopContext);
    const [latestPartner,setLatestPartner]=useState([]);

    const suffleArray=(array)=>{
      return array
      .map(value=>({value,sort:Math.random()}))
      .sort((a,b)=> a.sort-b.sort)
      .map(({value})=>value);
    };

    useEffect(()=>{           
            setLatestPartner(suffleArray(products.slice(0,5)));
    },[products])

    
  return (
    <div className='my-10'>
        <div className='text-center py-8 text-3xl'>
            <Title text1={'LATEST'} text2={'PARTNER'}/>
            <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti impedit deleniti laboriosam ipsam assumenda optio ex, fugiat ut natus temporibus quasi voluptas veniam. Non porro dolorem odit quia, veritatis voluptas.
           </p>
        </div>
      {/** rendering product */}
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6 '>
            {
                latestPartner.map((item,index)=>(
                        <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price}/>
                ))
            }
      </div>
    </div>
  )
}

export default LatestPartner
