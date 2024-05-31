import React from 'react'
import Card from '../components/Card'

function Products() {
  const cards = new Array(29).fill(1);
  return (
    <div className='bg-black/60'>
      <div className=' text-4xl font-bold text-white/90 py-5 pl-5'>Comidas</div>
      <div className=' h-fit min-h-screen w-full  flex flex-wrap gap-5 justify-center py-5'>
        {cards.map((_,index)=>(
          <Card/>
        ))}
      </div>
      
    
    </div>
  )
}

export default Products