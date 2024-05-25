import React,{useState} from 'react'
import LoginBtn from './LoginBtn';
import CarritoBtn from './CarritoBtn';
import NotifyBtn from './NotifyBtn';

function Header() {
    const [isChecked, setIsChecked] = useState(false);
    const toggleNavbar = () => {
        setIsChecked(!isChecked)
    };
    return (
        <div className=' h-20 md:h-24 w-full bg-black fixed'>
            <div className='h-full w-full flex justify-between text-2xl'>
                <div className='left-container ml-3 h-full'>
                    <a href="/">
                        <div className='logo-header h-full flex items-center'>
                            <h1 className='text-2xl text-white/80 uppercase flex flex-col font-bold'>
                            alimentos
                            <span className=' text-white'>
                            santiago
                            </span>
                        </h1>
                        </div>
                    </a>
                    
                </div>
                <div className='navbar-container center-container text-white h-full flex items-center'>
                    <div className='mr-2 sm:hidden'>
                        <CarritoBtn/>
                    </div>
                    <div className={`toggle-menu__btn h-12 w-14 mr-2 md:hidden border-secondary border-solid border-[3px] rounded-md flex flex-col gap-2 items-center justify-center overflow-hidden sm:hidden`}onClick={toggleNavbar}>
                        <div className={`bg-white h-1 w-10 transition-all duration-300${isChecked ?" rotate-45 translate-y-3":" "}`}></div>
                        <div className={`bg-white h-1 w-10 transition-all duration-300 ${isChecked ?" translate-x-12":" "}`}></div>
                        <div className={`bg-white h-1 w-10 transition-all duration-300 ${isChecked ?" -rotate-45 -translate-y-3":" "}`}></div>
                    </div>
                    <nav className={`${isChecked ? "block":" hidden"} h-[calc(100vh-80px)] top-[80px] w-full bg-red-500 absolute sm:block sm:relative sm:h-full sm:top-0 sm:bg-transparent`}>
                        <ul className='flex flex-col ml-8 gap-4  capitalize font-semibold text-secondary sm:flex-row sm:ml-4 text-lg sm:h-full sm:items-end lg:gap-6 md:text-xl lg:text-2xl'>
                            <li className=" hover:text-white transition-all"><a href="/products">ordenar</a></li>
                            <li className=" hover:text-white transition-all"><a href="#">calidad</a></li>
                            <li className=" hover:text-white transition-all"><a href="#">servicios</a></li>
                            <li className=" hover:text-white transition-all"><a href="#">nosotros</a></li>
                            <li className='sm:hidden md:block hover:text-white transition-all'><a href="#">contacto</a></li>
                        </ul>
                        <div className='sm:hidden'>
                            <LoginBtn/>
                        </div>
                    </nav>
                </div>
                <div className='right-container utilities-container h-full items-center mr-2 hidden overflow-hidden sm:flex  lg:mr-20 sm:gap-4 lg:gap-5'>
                    <NotifyBtn/>
                    <CarritoBtn/>
                    <LoginBtn/>
                </div>
            </div>
            
        </div>
    )
}

export default Header