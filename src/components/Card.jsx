import React,{useState} from 'react'
import AddBoxIcon from '@mui/icons-material/AddBox';
function Card() {
    const [displayIngredients,setDisplayIngredients] =useState(false);
    const [showIngredients,setShowIngredients] = useState(false);
    const [colorAdd,setColorAdd] = useState(false);
    const handleDisplay = ()=>{
        if(displayIngredients){
            setShowIngredients(!showIngredients);
            setTimeout(()=>{
                setDisplayIngredients(!displayIngredients);},500)
        }else{
            setDisplayIngredients(!displayIngredients);
            setTimeout(()=>{
                setShowIngredients(!showIngredients)},1)
        }
    }
    const hoverAdd = ()=>{
        setColorAdd(!colorAdd);
    }
    return (
        <div className='card w-72 h-[450px] bg-transparent group'>
            <div className=' bg-white/80 h-full w-full scale-95 hover:scale-100 transition-all duration-300 rounded-t-xl'>
                <div className='img-container relative'>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/f/f7/Lemon_-_whole_and_split.jpg" alt="producto" className=' card-img object-cover h-[300px] w-72 rounded-t-xl'/>
                    <div className={` absolute w-full h-full transition-all duration-500 ${displayIngredients && showIngredients? " bg-black/85":" bg-transparent"}`}></div>
                    <div className={`card-ingredients absolute w-full h-full flex flex-col justify-between transition-all duration-500 ${displayIngredients? "block":"hidden"} ${showIngredients? " opacity-100 translate-x-0":" bg-transparent opacity-0 translate-x-20"}`}>
                        <ul className='text-white'>
                            <li>Lorem ipsum</li>
                            <li>dolor sit.</li>
                            <li>consectetur adipisicing elit.</li>
                            <li>Repellat labore.</li>
                        </ul>
                        <div className='etiquetas'>
                            <div  className='stickers-product flex gap-5 items-center justify-center mb-5'>
                                <img src="https://upload.wikimedia.org/wikipedia/commons/f/f7/Lemon_-_whole_and_split.jpg"className=' h-5'/>
                                <img src="https://upload.wikimedia.org/wikipedia/commons/f/f7/Lemon_-_whole_and_split.jpg"className=' h-5'/>
                                <img src="https://upload.wikimedia.org/wikipedia/commons/f/f7/Lemon_-_whole_and_split.jpg"className=' h-5'/>
                            </div>
                        </div>
                        <div className='text-white w-full flex items-end justify-center'>
                            <span className=' transition-all duration-700 opacity-0 group-hover:opacity-100 cursor-pointer mb-5' onClick={handleDisplay}>Ocultar ingredientes</span>
                        </div>
                    </div>
                    <div className=' absolute top-[85%] right-[30%]'>
                        <span className={`text-white  opacity-0 transition-all delay-100 cursor-pointer duration-1000 group-hover:opacity-100 ${displayIngredients? "hidden":"block"}`}
                        onClick={handleDisplay}
                        >Ver Ingredientes</span>
                    </div>  
                </div>
                <div className='card-content flex flex-col h-[150px]  justify-between'>
                    <span className='category-product'> totam beatae distinctio fugiat!</span>
                    <span className='name-product'> earum est nam molestias quibusdam iusto odio enim.</span>
                    <div className='card-btns h-fit w-full mb-3 flex gap-2 justify-around'>
                        <div className='flex gap-2 font-semibold'>
                            <div className='w-[30px] h-8 bg-white/70 rounded flex items-center justify-center'>+1</div>
                            <div className='w-[30px] h-8 bg-white/70 rounded flex items-center justify-center'>+5</div>
                        </div>
                        <input type="number" name="units-product" id="units-product" min="0" max="200" className=' bg-white/60 w-[50px] placeholder:text-xs placeholder:text-center h-8 rounded' placeholder='cantidad' value={null}/>
                        <div className='h-fit w-fit' onMouseEnter={hoverAdd} onMouseLeave={hoverAdd}>
                            <AddBoxIcon sx={{fontSize:35}} color={ colorAdd? "success":""} className=''/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
    }

export default Card