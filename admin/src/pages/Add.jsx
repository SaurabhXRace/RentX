import React, { useState } from 'react'
import { assets } from '../assets/assets'
import axios from 'axios'
import { backendUrl } from '../App'
import { toast } from 'react-toastify'



const Add = ({ token }) => {

    const [image1, setImage1] = useState(false)
    const [image2, setImage2] = useState(false)
    const [image3, setImage3] = useState(false)
    const [image4, setImage4] = useState(false)

    const [name, setName] = useState("")
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [weightSit,setWeightSit]=useState('');
    const [choice,setChoice]=useState("weight")
    const [category, setCategory] = useState("Small Vehicle");
    const [subCategory, setSubCategory] = useState("Auto");

    const onSubmitHandler = async (e) => {
        e.preventDefault();

        try {

            const formData = new FormData()
            formData.append("name", name)
            formData.append("description", description)
            formData.append("price", price)
            formData.append("weightSit",weightSit)
            formData.append("choice",choice)
            formData.append("category", category)
            formData.append("subCategory", subCategory)


            image1 && formData.append("image1", image1)
            image2 && formData.append("image2", image2)
            image3 && formData.append("image3", image3)
            image4 && formData.append("image4", image4)

            const response = await axios.post(backendUrl + "/api/product/add", formData, { headers: { token } })

          if(response.data.success){
            toast.success(response.data.message)
            setName('')
            setDescription('')
            setImage1(false)
            setImage2(false)
            setImage3(false)
            setImage4(false)
            setPrice('')
           
          }else{
            toast.error(response.data.message)
          }

        } catch (error) {

            console.log(error);
            toast.error(error.message);
        }

    }





    return (
        <form onSubmit={onSubmitHandler} className='flex flex-col w-full items-start gap-3'>
            <div>
                <p className='mb-2'>Upload Images</p>
                <div className='flex gap-2'>
                    <label htmlFor="image1">
                        <img className='w-20' src={!image1 ? assets.upload_area : URL.createObjectURL(image1)} alt="" />
                        <input onChange={(e) => setImage1(e.target.files[0])} type="file" id='image1' hidden />
                    </label>
                    <label htmlFor="image2">
                        <img className='w-20' src={!image2 ? assets.upload_area : URL.createObjectURL(image2)} alt="" />
                        <input onChange={(e) => setImage2(e.target.files[0])} type="file" id='image2' hidden />
                    </label>
                    <label htmlFor="image3">
                        <img className='w-20' src={!image3 ? assets.upload_area : URL.createObjectURL(image3)} alt="" />
                        <input onChange={(e) => setImage3(e.target.files[0])} type="file" id='image3' hidden />
                    </label>
                    <label htmlFor="image4">
                        <img className='w-20' src={!image4 ? assets.upload_area : URL.createObjectURL(image4)} alt="" />
                        <input onChange={(e) => setImage4(e.target.files[0])} type="file" id='image4' hidden />
                    </label>


                </div>
            </div>
            <div className='w-full'>
                <p className='mb-2 '>Product Name</p>
                <input onChange={(e) => setName(e.target.value)} value={name} className='w-full max-w-[500px] px-3 py-2' type="text" placeholder='Type here' required />
            </div>
            <div className='w-full'>
                <p className='mb-2 '>Owner Name</p>
                <input onChange={(e) => setDescription(e.target.value)} value={description} className='w-full max-w-[500px] px-3 py-2' type="text" placeholder='write content hear' required />
            </div>

            <div className='flex flex-col sm:flex-row gap-2 w-full sm:gap-8'>
                <div>
                    <p className='mb-2'>Product Category</p>
                    <select onChange={(e) => setCategory(e.target.value)} className='w-full px-3 py-2' >
                        <option value="Small Vehicle">Small Vehicle</option>
                        <option value="Large Vehicle">Large Vehicle</option>
                        <option value="3 Vehicler">3 Vehicler</option>
                    </select>
                </div>
                <div>
                    <p className='mb-2'>Sub Category</p>
                    <select onChange={(e) => setSubCategory(e.target.value)} className='w-full px-3 py-2' >
                        <option value="Auto">Auto</option>
                        <option value="Bike">Bikes</option>
                        <option value="Cars">Cars</option>
                        <option value="pickupandtravel">pickupandtravel</option>
                        <option value="Suv">Suv</option>
                        <option value="truckandbuses">truckandbuses</option>
                    </select>
                </div>
                <div>
                    <p className='mb-2'> Price/perkm</p>
                    <input onChange={(e) => setPrice(e.target.value)} value={price} className='w-full px-3 py-2 sm:w-[120px]' type="number" placeholder='25' />
                    <p className='mb-2'> Weight/Sitting</p>
                    <input onChange={(e) => setWeightSit(e.target.value)} value={weightSit} className='w-full px-3 py-2 sm:w-[120px]' type="number" placeholder='25' />
                    <div>
                    <select onChange={(e)=>setChoice(e.target.value)} className='w-full px-3 py-2' >
                        <option value="weight">Weight</option>
                        <option value="sitting">Sitting</option>
                    </select>
                </div>
                </div>
               
            </div>

            <button className='w-28 py-3 mt-3 bg-black text-white' type='submit'>ADD</button>

        </form>
    )
}

export default Add
