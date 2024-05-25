import React, {useState} from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

function CarritoBtn() {
  const [showCart, setShowCart] = useState(false);
  const [displayCart, setDisplayCart] = useState(false);
  const toggleCart =()=>{
    if (displayCart){
      setShowCart(!showCart);
      setTimeout(()=>{
        setDisplayCart(!displayCart)
      },301);
    }else{
      setDisplayCart(!displayCart);
      setTimeout(()=>{
        setShowCart(!showCart);
      },1)
    }
  }
  return (
    <div>
        <div onClick={toggleCart} className=' cursor-pointer'>
            <ShoppingCartIcon color='white' sx={{fontSize:30}}/>
        </div>
        <div className={`${displayCart? "block":"hidden"} ${showCart? " right-0":" right-[-500px]"} transition-all duration-300 h-[calc(100vh-80px)] w-full sm:w-4/6 sm:max-w-[500px] bg-red-500 absolute top-[80px] md:top-[96px] `}></div>
    </div>
  )
}

export default CarritoBtn