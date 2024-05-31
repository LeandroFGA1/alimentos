import React from 'react';

function AboutUs() {
    return (
        <div className="min-h-screen w-full bg-gray-100 p-8">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">Sobre Nosotros</h1>
                
                <section className="bg-white shadow-lg rounded-lg p-6 mb-12">
                    <h2 className="text-3xl font-semibold text-gray-700 mb-4">Nuestra Misión</h2>
                    <div className="flex flex-col md:flex-row items-center md:items-start">
                        <img src="/imagen-mision.png" alt="Nuestra Misión" className="w-full md:w-1/2 rounded-lg mb-6 md:mb-0 md:mr-6" />
                        <div className="text-gray-600 leading-relaxed">
                        <p className="mb-4">
                            En <strong>Alimentos Santiago</strong>, nuestra misión es proporcionar alimentos nutritivos y sabrosos que ayuden a las personas a ahorrar tiempo en su ajetreado día. Entendemos la importancia de una alimentación saludable y balanceada, y nos esforzamos por ofrecer productos que cumplan con estos estándares.
                        </p>
                        <p className="mb-4">
                            Para los particulares, nos dedicamos a proporcionar comidas que no solo son rápidas y convenientes, sino también deliciosas y nutritivas. Queremos facilitar la vida de nuestros clientes al ofrecerles soluciones alimenticias que se adapten a su ritmo de vida, sin comprometer la calidad ni el sabor.
                        </p>
                        <p className="mb-4">
                            Para las empresas, buscamos ser un proveedor confiable y eficiente en la alimentación de sus empleados. Sabemos que una buena alimentación puede influir positivamente en el bienestar y la productividad del personal. Por eso, nuestras comidas están diseñadas para hacer que los empleados se sientan valorados y satisfechos, como si estuvieran disfrutando de una buena comida en lugar de simples raciones.
                        </p>
                        <p className="mb-4">
                            Nos enorgullece ser una empresa comprometida con la calidad y la satisfacción del cliente. Cada día, trabajamos arduamente para mejorar nuestros productos y servicios, asegurándonos de que cada comida que ofrecemos sea una experiencia placentera y nutritiva.
                        </p>
                        </div>
                    </div>
                </section>

            </div>
        </div>
    );
}

export default AboutUs;
