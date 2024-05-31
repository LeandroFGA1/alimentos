import React,{useState} from 'react';
import NotificationsIcon from '@mui/icons-material/Notifications';
import NotificationsOffIcon from '@mui/icons-material/NotificationsOff';
function NotifyBtn() {
  const [displayNoti,setDisplayNoti] = useState(false);
  const [showNoti,setShowNoti] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const toggleNoti =()=>{
    if (displayNoti){
      setShowNoti(!showNoti);
      setTimeout(()=>{
        setDisplayNoti(!displayNoti)
      },301);
    }else{
      setDisplayNoti(!displayNoti);
      setTimeout(()=>{
        setShowNoti(!showNoti);
      },1)
    } 
  }

  const handleMouseEnter = () => {
      setIsHovered(true);
  };

  const handleMouseLeave = () => {
      setIsHovered(false);
  };
  return (
    <div>
        <div onClick={toggleNoti} className=' cursor-pointer' onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}>
            <NotificationsIcon sx={{fontSize:30}} color={isHovered ? 'bg' : 'white'} />
        </div>
        <div className={` ${displayNoti? "block":"hidden"} ${showNoti? " top-20 md:top-24 opacity-100":"opacity-0 top-60"} absolute transition-all duration-500  w-[250px] h-[250px] bg-black  right-[7%] rounded-b-xl`}>
          <div className='h-full bg-white/10 rounded-b-xl'>
            <div className='flex flex-col items-center text-center h-full justify-center' >
              <NotificationsOffIcon sx={{fontSize:30}} color='white'/>
              <span className='text-white/90 w-[180px]'>No tienes notificaciones por hora.</span>
            </div>
          </div>
          
        </div>
    </div>
  );
}

export default NotifyBtn;
