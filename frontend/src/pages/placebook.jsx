import React, { useContext, useState } from 'react'
import Title from '../components/Title'
import Carttotal from '../components/Carttotal'
import { assest } from '../Assest/assest'
import { ShopContext } from '../context/ShopContext'
import axios from 'axios'
import { toast } from 'react-toastify'


const placebook = () => {
  const [method, setMethod] = useState('cod')
  const { navigate, backendUrl, token, cartItem, setCartItem, getCartAmount, delivery_fee, products } = useContext(ShopContext);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    street: '',
    city: '',
    state: '',
    zipcode: '',
    country: '',
    phone: ''
  })

  const onChangeHandler = (event) => {
    const name = event.target.name
    const value = event.target.value
    setFormData(data => ({ ...data, [name]: value }))

  }
  const initpay = (order) => {
    const option = {
      key: import.meta.env.VITE_RAZORPAY_KEY_ID,
      amount: order.amount,
      currency: order.currency,
      name: 'Order Payment',
      description: 'Order Payment',
      order_id: order.id,
      receipt: order.receipt,
      handler: async (response) => {
        console.log(response)
        try {
          const { data } = await axios.post(backendUrl + '/api/order/verifyRazorpay', response, { headers: { token } })
          if (data.success) {
            navigate('/bookvrs')
            setCartItem({})
          }
        } catch (error) {
          console.log(error)
          toast.error(error)
        }

      }
    }
    const rzp = new window.Razorpay(option)
    rzp.open()
  }
  const onSubmitHandler = async (event) => {
    event.preventDefault()
    try {
      let orderItem = []


      for (const item in cartItem) {
        if (cartItem[item] > 0) {
          const itemInfo = structuredClone(products.find(product => product._id === item))
          if (itemInfo) {
            itemInfo.quantity = cartItem[item]
            orderItem.push(itemInfo)
          }
        }
      }

      let orderData = {
        address: formData,
        items: orderItem,
        amount: getCartAmount() + delivery_fee
      }
      switch (method) {

        case 'cod':
          const response = await axios.post(backendUrl + '/api/order/place', orderData, { headers: { token } })
          if (response.data.success) {
            setCartItem({})
            navigate('/bookvrs')
          } else {
            toast.error(response.data.message)
          }
          break;

        case 'stripe':
          const responseStripe = await axios.post(backendUrl + '/api/order/stripe', orderData, { headers: { token } })
          if (responseStripe.data.success) {
            const { session_url } = responseStripe.data.window.location.replace(session_url)
          } else {
            console.log(responseStripe.data.message)
          }
          break;

        case 'razorpay':
          const responseRazorpay = await axios.post(backendUrl + '/api/order/razorpay', orderData, { headers: { token } })
          if (responseRazorpay.data.success) {
            initpay(responseRazorpay.data.order)
          }
          break;

        default:
          break;

      }
    } catch (error) {
      console.log(error)
      toast.error(error.message)
    }


  }




  return (

    <form onSubmit={onSubmitHandler} className='flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t'>
      {/**left side */}
      <div className='flex flex-col gap-4 w-full sm:max-w-[480px]'>
        <div className='text-xl sm:text-2xl my-3'>
          <Title text1={"RIDING "} text2={"INFORMATION"} />
        </div>
        <div className='flex gap-3'>
          <input required onChange={onChangeHandler} value={formData.firstName} name='firstName' className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='First Name' />
          <input required onChange={onChangeHandler} value={formData.lastName} name='lastName' className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='Last Name' />
        </div>
        <input required onChange={onChangeHandler} value={formData.email} name='email' className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="email" placeholder='Email Address' />
        <input required onChange={onChangeHandler} value={formData.street} name='street' className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='Street' />
        <div className='flex gap-3'>
          <input required onChange={onChangeHandler} value={formData.city} name='city' className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='City' />
          <input required onChange={onChangeHandler} value={formData.state} name='state' className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='State' />
        </div>
        <div className='flex gap-3'>
          <input required onChange={onChangeHandler} value={formData.zipcode} name='zipcode' className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="number" placeholder='PinCode' />
          <input required onChange={onChangeHandler} value={formData.country} name='country' className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='Country' />
        </div>
        <input required onChange={onChangeHandler} value={formData.phone} name='phone' className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="number" placeholder='Phone Number' />
        <p className='text-2xl uppercase'>Enter Your location</p>
        <div className='flex gap-3'>
          <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="number" placeholder='Pickup' />
          <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='Drop' />
        </div>
      </div>

      {/**right side */}
      <div className='mt-8'>
        <div className='mt-8 min-w-80'>
          <Carttotal />
        </div>

        <div className='mt-12'>
          <Title text1={"PAYMENT"} text2={"METHOD"} />
          {/**Payment method selection */}
          <div className='flex gap-3 flex-col lg:flex-row'>
            <div onClick={() => setMethod('stripe')} className='flex items-center gap-3 border p-2 px-3 cursor-pointer'>
              <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'stripe' ? 'bg-green-400' : ''}`}></p>
              <img className='h-5 mx-4' src={assest.stripe_logo} alt="" />
            </div>
            <div onClick={() => setMethod('razorpay')} className='flex items-center gap-3 border p-2 px-3 cursor-pointer'>
              <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'razorpay' ? 'bg-green-400' : ''}`}></p>
              <img className='h-5 mx-4' src={assest.razorpay_logo} alt="" />
            </div>
            <div onClick={() => setMethod('cod')} className='flex items-center gap-3 border p-2 px-3 cursor-pointer'>
              <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'cod' ? 'bg-green-400' : ''}`}></p>
              <p className='text-black-500  text-sm font-medium mx-4'>CASH PAYMENT</p>
            </div>
          </div>
          <div className='w-full  text-end mt-8'>
            <button type='submit' className='bg-black text-white px-16 py-3 text-sm'>CONFIM RIDE</button>
          </div>

        </div>

      </div>
    </form>
  )
}

export default placebook
