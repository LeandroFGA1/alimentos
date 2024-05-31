import React, {useState} from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';
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

  const [isHovered, setIsHovered] = useState(false);




  const handleMouseEnter = () => {
      setIsHovered(true);
  };

  const handleMouseLeave = () => {
      setIsHovered(false);
  };

  return (
    <div>
        <div onClick={toggleCart} className=' cursor-pointer' onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}>
            <ShoppingCartIcon color={isHovered ? 'bg' : 'white'} sx={{fontSize:30}}/>
        </div>
        <div className={`${displayCart? "block":"hidden"} ${showCart? " right-0":" right-[-500px]"} transition-all duration-300 h-[calc(100vh-100px)] w-full sm:w-4/6 sm:max-w-[500px] bg-black absolute top-[80px] md:top-[96px] rounded-l-xl `}>
          <div className=' bg-white/10 h-full w-full rounded-l-xl flex items-center flex-col justify-between'>
            <div className='h-1 w-11/12 bg-white/95 mt-4'></div>
            <div className='flex flex-col items-center'>
              <RemoveShoppingCartIcon color='white' sx={{fontSize:40}}/>
              <span className='text-white/90'>Aun no añadiste nada a tu carrito.</span>
            </div>
            
            <div className='h-1 w-11/12 bg-white/95 mb-4'></div>
          </div>
        </div>
    </div>
  )
}

export default CarritoBtn