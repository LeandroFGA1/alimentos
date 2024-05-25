import React, { useState } from 'react';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';


function LoginBtn() {
    const [isHovered, setIsHovered] = useState(false);
    const [isClicked, setIsClicked] = useState(false);



    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    const handleClick = () => {
        setIsClicked(!isClicked);
    };

    return (
        <div>
                <div
                    className='flex items-center justify-center gap-2 bg-black p-1 px-2 w-fit rounded-lg border-solid border-[2px] border-secondary sm:border-none sm:p-0 lg:border-[2px]'
                    onClick={handleClick}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    <a href="/login">
                        <AccountCircleIcon
                        color={isClicked ? 'primary' : isHovered ? 'primary' : 'white'}
                        className='mt-1'
                        sx={{fontSize:30}}
                        />
                        <span className=' sm:hidden text-white'>Ingresar</span>
                    </a>
                    
                </div>
        </div>
    );
}

export default LoginBtn;
