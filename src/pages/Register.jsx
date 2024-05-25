import React from 'react'

function Register() {
    return (
        <div class=" flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
            <div className='logo-login h-full flex items-center justify-center'>
                <h1 className='text-3xl md:text-4xl text-black/60 uppercase flex flex-col font-bold text-center'>
                    alimentos
                    <span className=' text-black'>
                        santiago
                    </span>
                </h1>
            </div>
            <div class=" mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form class="space-y-6" action="#" method="POST">
                <div>
                        <label for="name" class="block text-sm font-medium leading-6 text-gray-900">Nombre Completo</label>
                        <div class="mt-2">
                        <input id="name" name="name" type="name" autocomplete="name" required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6"/>
                        </div>
                    </div>
                    <div>
                        <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Correo electronico</label>
                        <div class="mt-2">
                        <input id="email" name="email" type="email" autocomplete="email" required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6"/>
                        </div>
                    </div>
                    <div>
                        <div class="flex items-center justify-between">
                        <label for="password" class="block text-sm font-medium leading-6 text-gray-900">Contraseña</label>
                        <div class="text-sm">
                            <a href="#" class="font-semibold text-black hover:text-black/80">¿Olvidaste tu contraseña?</a>
                        </div>
                        </div>
                        <div class="mt-2">
                        <input id="password" name="password" type="password" autocomplete="current-password" required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"/>
                        </div>
                    </div>
                    <div>
                        <label htmlFor="role" className="block text-sm font-medium leading-6 text-black">Seleccionar Rol</label>
                        <div className="mt-2">
                            <select id="role" name="role" required className="block w-full rounded-md border-0 py-1.5 text-black shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-black/80 sm:text-sm sm:leading-6">
                                <option value="">Seleccione una opción</option>
                                <option value="admin">Empresa</option>
                                <option value="user">Persona</option>
                            </select>
                        </div>
                    </div>
                    <div className="flex items-center">
                        <input id="terms" name="terms" type="checkbox" required className="h-4 w-4 rounded border-gray-300 text-black focus:ring-black" />
                        <label htmlFor="terms" className="ml-2 block text-sm leading-6 text-gray-900">He leído y acepto los <a href="#" className="font-semibold text-black hover:text-black/80">términos y condiciones</a></label>
                    </div>
                    <div>
                        <button type="submit" class="flex w-full justify-center rounded-md bg-black px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2">Registrarme</button>
                    </div>
                </form>
            </div>
        </div>

    )
}

export default Register