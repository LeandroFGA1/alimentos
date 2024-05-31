import React from 'react';

function Contact() {
    return (
        <div className="min-h-screen w-full bg-gray-100 p-8">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">Contacto</h1>
                
                <section className="bg-white shadow-lg rounded-lg p-6 mb-12">
                    <h2 className="text-3xl font-semibold text-gray-700 mb-4">Información de Contacto</h2>
                    <div className="text-gray-600 leading-relaxed">
                        <p className="mb-4">
                        En Alimentos Santiago, valoramos la comunicación directa con nuestros clientes, proveedores y socios comerciales. Por favor, no dudes en ponerte en contacto con nosotros para cualquier consulta, solicitud o comentario que puedas tener. Aquí tienes la información de contacto:
                        </p>
                        <div className="mb-4">
                        <p className="mb-2">
                            <strong>Clientes:</strong>
                        </p>
                        <p>
                            Si eres un cliente y tienes preguntas sobre nuestros productos, pedidos o cualquier otra consulta relacionada, estaremos encantados de ayudarte. Puedes contactarnos en <a href="mailto:clientes@alimentossantiago.com" className="text-blue-500 hover:underline">clientes@alimentossantiago.com</a> o llamarnos al <strong>1234567890</strong>. Nuestro equipo de atención al cliente está disponible para brindarte la mejor asistencia.
                        </p>
                        </div>
                        <div className="mb-4">
                        <p className="mb-2">
                            <strong>Proveedores:</strong>
                        </p>
                        <p>
                            Si eres un proveedor interesado en colaborar con nosotros o tienes preguntas sobre nuestras políticas de compra y suministro, no dudes en ponerte en contacto con nuestro equipo de compras en <a href="mailto:proveedores@alimentossantiago.com" className="text-blue-500 hover:underline">proveedores@alimentossantiago.com</a>. Estamos siempre buscando establecer relaciones sólidas y duraderas con nuestros proveedores, basadas en la transparencia y la confianza mutua.
                        </p>
                        </div>
                        <div className="mb-4">
                        <p className="mb-2">
                            <strong>Asuntos Comerciales:</strong>
                        </p>
                        <p>
                            Para consultas comerciales, propuestas de colaboración, oportunidades de negocios o cualquier otro asunto relacionado con el crecimiento y desarrollo de nuestra empresa, por favor contáctanos en <a href="mailto:comercial@alimentossantiago.com" className="text-blue-500 hover:underline">comercial@alimentossantiago.com</a>. Valoramos las oportunidades de colaboración y estamos abiertos a explorar nuevas alianzas estratégicas que impulsen nuestro éxito mutuo.
                        </p>
                        </div>
                        <div>
                        <p className="mb-2">
                            <strong>Dirección:</strong>
                        </p>
                        <p>
                            Nos encontramos en Calle Falsa 123, Santiago. Si deseas visitarnos en persona o enviarnos correspondencia, estaremos encantados de recibirte en nuestras instalaciones. ¡Esperamos verte pronto!
                        </p>
                        </div>
                    </div>
                </section>

            </div>
        </div>
    );
}

export default Contact;
