import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from '../components/Title';
import { assest } from '../Assest/assest';
import Carttotal from '../components/Carttotal';

const Cart = () => {
  const { products, currency, cartItem, updateQuantity, navigate } = useContext(ShopContext);

  const [cartData, setCartData] = useState([]);


  useEffect(() => {

    if (products.length > 0) {
      const tempData = [];
      for (const items in cartItem) {
        if (cartItem[items] > 0) {
          tempData.push({
            _id: items,
            quantity: cartItem[items]

          })

        }
      }

      setCartData(tempData)

    }

  }, [cartItem, products])

  return (
    <div className='border-t pt-14'>
      <div className='text-2xl mb-3'>
        <Title text1={'YOUR'} text2={'BOOKING VEHICLE'} />
      </div>
      <div className=''>
        {
          cartData.map((items, index) => {
            const productData = products.find((product) => product._id === items._id);
            return (
              <div key={index} className='py-4 border-b text-gray-700 grid grid-cols[4fr_0.5fr_0.5fr_0.5fr] sm:grid-cols-[4fr_2fr_0.5fr_0.5fr] items-center gap-4'>
                <div className='flex items-start gap-6'>
                  <img className='w-16 sm:w-20' src={productData.image[0]} alt="" />
                  <div>
                    <p className='text-xs uppercase sm:text-lg font-medium'>{productData.name}</p>
                    <div className='flex items-center gap-5 mt-2'>
                      <p>{currency}{productData.price}</p>
                    </div>
                  </div>
                </div>
                <div className='flex-items-center'>       
                 <input onChange={(e) => e.target.value === '' || e.target.value === '0' ? null : updateQuantity(items._id, Number(e.target.value))} className='border max-w-10 sm:max-w-20 px-1 sm:px-2 py-1' type="number"  defaultValue={items.quantity} /> <span className="text-2xs text-gray-700 ml-1">KM</span> 
                </div>
          
                <img onClick={() => updateQuantity(items._id, 0)} className='w-4 mr-4 sm:w-5 cursor-pointer' src={assest.bin_icon} alt="" />
              </div>
            )
          })
        }
      </div>
      <div className='flex justify-end my-20'>
        <div className='w-full sm:w-[450px]'>
          <Carttotal />
          <div className='w-full text-end'>
            <button onClick={() => navigate('/placebook')} className='bg-black text-white text-sm my-8 px-8 py-3'>PROCEED TO CHECKOUT</button>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Cart
