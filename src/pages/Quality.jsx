import React from 'react';

function Quality() {
    return (
        <div className="min-h-screen w-full bg-black/50 p-8">
            <div className=" max-w-7xl mx-auto">
                <h1 className="text-4xl font-bold text-center text-black/95 mb-12">Calidad</h1>
                <section className="bg-white shadow-lg rounded-lg p-6 mb-12">
                    <h2 className="text-3xl font-semibold text-black/90 mb-4">Nuestros Materiales</h2>
                    <div className="flex flex-col md:flex-row items-center md:items-start">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/f/f7/Lemon_-_whole_and_split.jpg" alt="Materiales" className="w-full md:w-1/2 rounded-lg mb-6 md:mb-0 md:mr-6" />
                        <p className="text-black/80 leading-relaxed">
                    Todos nuestros materiales son comprados en los mejores lugares, asegurando la máxima calidad desde el origen. Trabajamos con proveedores certificados y de confianza que comparten nuestros valores de calidad y sostenibilidad.
                        </p>
                    </div>
                </section>
                
                <section className="bg-white shadow-lg rounded-lg p-6 mb-12">
                    <h2 className="text-3xl font-semibold text-black/90 mb-4">Estandares de Sanidad</h2>
                    <div className="flex flex-col md:flex-row items-center md:items-start">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/f/f7/Lemon_-_whole_and_split.jpg" alt="Sanidad" className="w-full md:w-1/2 rounded-lg mb-6 md:mb-0 md:mr-6" />
                        <p className="text-black/80 leading-relaxed">
                    Durante la elaboración de nuestros productos, mantenemos estrictamente todos los estándares de sanidad para garantizar la seguridad y calidad de nuestros alimentos. Nuestros procesos de producción son regularmente auditados y mejorados para asegurar el cumplimiento de las normativas de higiene y seguridad alimentaria.
                        </p>
                    </div>
                </section>

                <section className="bg-white shadow-lg rounded-lg p-6 mb-12">
                        <h2 className="text-3xl font-semibold text-black/90 mb-4">Calidad de las Bandejas</h2>
                        <div className="flex flex-col md:flex-row items-center md:items-start">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/f/f7/Lemon_-_whole_and_split.jpg" alt="Bandejas" className="w-full md:w-1/2 rounded-lg mb-6 md:mb-0 md:mr-6" />
                            <p className="text-black/80 leading-relaxed">
                            Nuestras bandejas están diseñadas para optimizar el espacio durante la congelación y son aptas para ser usadas en microondas. Fabricadas con materiales de alta calidad, garantizan la conservación y seguridad de los alimentos, facilitando su almacenamiento y consumo.
                            </p>
                        </div>
                </section>
                
                <section className="bg-white shadow-lg rounded-lg p-6 mb-12">
                    <h2 className="text-3xl font-semibold text-black/90 mb-4">Aprobación del Ministerio de Salud</h2>
                    <div className="flex flex-col md:flex-row items-center md:items-start">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/f/f7/Lemon_-_whole_and_split.jpg" alt="Aprobación" className="w-full md:w-1/2 rounded-lg mb-6 md:mb-0 md:mr-6" />
                        <p className="text-black/80 leading-relaxed">
                    Contamos con la aprobación del Ministerio de Salud de PaisFalso322, asegurando que nuestros productos cumplen con todas las normativas y regulaciones vigentes. Esta certificación respalda nuestro compromiso con la calidad y la seguridad de los alimentos que ofrecemos.
                        </p>
                    </div>
                </section>

                <section className="bg-white shadow-lg rounded-lg p-6 mb-12">
                    <h2 className="text-3xl font-semibold text-black/90 mb-4">Sistema de Sellos</h2>
                    <div className="flex flex-col items-center text-center">
                        <div className='flex gap-3 w-full flex-wrap items-center justify-center'>
                            <img src="https://upload.wikimedia.org/wikipedia/commons/f/f7/Lemon_-_whole_and_split.jpg" alt="Sellos" className=" rounded-lg mb-6 md:mb-0 md:mr-6 h-[70px] object-contain" />
                            <img src="https://upload.wikimedia.org/wikipedia/commons/f/f7/Lemon_-_whole_and_split.jpg" alt="Sellos" className=" rounded-lg mb-6 md:mb-0 md:mr-6 h-[70px] object-contain" />
                            <img src="https://upload.wikimedia.org/wikipedia/commons/f/f7/Lemon_-_whole_and_split.jpg" alt="Sellos" className=" rounded-lg mb-6 md:mb-0 md:mr-6 h-[70px] object-contain" />
                        </div>
                        <p className="text-black/80 leading-relaxed  w-10/12 ">
                    Nuestra empresa incluye un sistema de sellos que indica si el alimento es apto para veganos, celiacos y personas intolerantes a la lactosa. Estos sellos son visibles en nuestros envases y en la información del producto, permitiendo a nuestros clientes tomar decisiones informadas y seguras.
                        </p>
                    </div>
                </section>
                
            </div>
        </div>
    );
}

export default  Quality;
