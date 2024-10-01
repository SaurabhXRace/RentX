import React from 'react'
import { Routes , Route} from 'react-router-dom'
import Home from './pages/Home'
import Collection from './pages/Collection'
import About from './pages/About'
import Contact from './pages/Contact'
import Product from './pages/product'
import Login from './pages/login'
import Bookvrs from './pages/bookvrs'
import Placebook from './pages/placebook'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Searchbar from './components/Searchbar'
import Cart from './pages/Cart'
import Verify from './pages/Verify'


const App = () => {
  return (
    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
    <Navbar />
    <Searchbar/>
     <Routes>
<Route path='/' element={<Home/>}/>
<Route path='/collection' element={<Collection/>}/>
<Route path='/about' element={<About/>}/>
<Route path='/contact' element={<Contact/>}/>
<Route path='/product/:productId' element={<Product/>}/>
<Route path='/cart' element={<Cart />} />
<Route path='/login' element={<Login/>}/>
<Route path='/placebook' element={<Placebook/>}/>
<Route path='/bookvrs' element={<Bookvrs />}/>
<Route path='/verify' element={<Verify/>}/>

      </Routes>
      <Footer/> 
      
    </div>
  )
}

export default App
