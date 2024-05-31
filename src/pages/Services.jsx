import React from 'react';

function Services() {
    return (
        <div className="min-h-screen w-full bg-black/50 p-8">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-4xl font-bold text-center text-black/90 mb-12">Nuestros Servicios</h1>
            
                <section className="bg-white/85 shadow-lg rounded-lg p-6 mb-12">
                    <h2 className="text-3xl font-semibold text-black/90 mb-4">Servicio de Entrega</h2>
                    <div className="flex flex-col md:flex-row items-center md:items-start">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/f/f7/Lemon_-_whole_and_split.jpg" alt="Servicio de Entrega" className="w-full md:w-1/2 rounded-lg mb-6 md:mb-0 md:mr-6" />
                        <p className="text-black/80 leading-relaxed">
                        Ofrecemos un servicio de entrega con horarios convenientes para adaptarnos a sus necesidades. Nuestras entregas se realizan de 08:00 a 14:00 y de 18:00 a 20:00, asegurando que sus pedidos lleguen frescos y a tiempo.
                        </p>
                    </div>
                </section>
            
                <section className="bg-white/85 shadow-lg rounded-lg p-6 mb-12">
                    <h2 className="text-3xl font-semibold text-black/90 mb-4">Entregas Programadas</h2>
                    <div className="flex flex-col md:flex-row items-center md:items-start">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/f/f7/Lemon_-_whole_and_split.jpg" alt="Entregas Programadas" className="w-full md:w-1/2 rounded-lg mb-6 md:mb-0 md:mr-6" />
                        <p className="text-black/80 leading-relaxed">
                        Contamos con un servicio de entregas programadas para su conveniencia. Puede programar sus entregas con anticipación para asegurarse de recibir sus alimentos en el momento que más le convenga.
                        </p>
                    </div>
                </section>
            
                <section className="bg-white/85 shadow-lg rounded-lg p-6 mb-12">
                    <h2 className="text-3xl font-semibold text-black/90 mb-4">Retiro en Local</h2>
                    <div className="flex flex-col md:flex-row items-center md:items-start">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/f/f7/Lemon_-_whole_and_split.jpg" alt="Retiro en Local" className="w-full md:w-1/2 rounded-lg mb-6 md:mb-0 md:mr-6" />
                        <p className="text-black/80 leading-relaxed">
                        También ofrecemos la opción de retiro en local para aquellos que prefieren recoger sus pedidos personalmente. Visítenos en nuestro local y nuestro personal estará encantado de atenderlo y entregarle su pedido rápidamente.
                        </p>
                    </div>
                </section>

                <section className="bg-white/85 shadow-lg rounded-lg p-6 mb-12">
                    <h2 className="text-3xl font-semibold text-black/90 mb-4">Buffet Propio</h2>
                    <div className="flex flex-col md:flex-row items-center md:items-start">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/f/f7/Lemon_-_whole_and_split.jpg" alt="Buffet Propio" className="w-full md:w-1/2 rounded-lg mb-6 md:mb-0 md:mr-6" />
                        <p className="text-black/80 leading-relaxed">
                        Contamos con un buffet propio donde ofrecemos una amplia variedad de platos frescos y deliciosos todos los días. Nuestro buffet está diseñado para satisfacer todos los gustos y necesidades dietéticas, brindando opciones saludables y equilibradas.
                        </p>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default Services;
