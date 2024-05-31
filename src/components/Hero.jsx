import React from 'react'
import { Link } from 'react-router-dom'
function Hero() {
    return (
    <div className=' h-[calc(110vh-90px)] w-full overflow-hidden bg-bg1'>
        <div className="flex flex-wrap">
            <div className="w-full sm:w-8/12 mb-10">
                <div className="container mx-auto h-full sm:p-10">
                    <nav className="flex px-4 justify-between items-center">
                        <div className="text-4xl font-bold uppercase text-white">
                            Alimentos <span className=' text-black/90'>Santiago</span> <span className="text-white">.</span>
                        </div>
                    </nav>
                    <div className="container px-4 lg:flex mt-10 items-center h-full lg:mt-0">
                        <div className="w-full">
                            <h1 className="text-4xl lg:text-6xl font-bold">Soy un <span className="text-white">Slogan</span> Para la compañia.</h1>
                            <div className="w-20 h-2 bg-white/90 my-4"></div>
                            <p className="text-xl mb-10">Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae maiores neque eaque ea odit placeat, tenetur illum distinctio nulla voluptatum a corrupti beatae tempora aperiam quia id aliquam possimus aut.</p>
                            <button className="bg-black shadow-lg hover:bg-black/80 text-white text-2xl font-medium px-4 py-2 rounded"><Link to={"/register"}>Registrarme</Link></button>
                        </div>
                    </div>
                </div>
            </div>
            <img src="https://c0.wallpaperflare.com/preview/249/313/235/vegetales-alimentos-comida-verduras.jpg" alt="Leafs" className="w-full h-48 object-cover sm:h-screen sm:w-4/12"/>
        </div>
    </div>
    )
}

export default Hero