import React,{useState} from 'react';
import NotificationsIcon from '@mui/icons-material/Notifications';


function NotifyBtn() {
  const [displayNoti,setDisplayNoti] = useState(false);
  const [showNoti,setShowNoti] = useState(false);
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
  return (
    <div>
        <div onClick={toggleNoti} className=' cursor-pointer'>
            <NotificationsIcon sx={{fontSize:30}} color='white' />
        </div>
        <div className={` ${displayNoti? "block":"hidden"} ${showNoti? " top-20 md:top-24 opacity-100":"opacity-0 top-60"} absolute transition-all duration-500  w-[250px] h-[250px] bg-green-400  right-[7%]`}></div>
    </div>
  );
}

export default NotifyBtn;
