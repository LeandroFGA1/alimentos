import React from 'react'
import { Link } from "react-router-dom";
function Login() {
    return (
        <div class=" flex min-h-full flex-col justify-center px-6 py-12 lg:px-8 bg-gray-100">
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
                        <button type="submit" class="flex w-full justify-center rounded-md bg-black px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2">Ingresar</button>
                    </div>
                </form>
                <p class="mt-10 text-center text-sm text-gray-500">
                    No estas registrado?
                    <Link class="font-semibold leading-6 text-black hover:text-black/80" to={"/register"}> Registrate ahora.</Link>
                </p>
            </div>
        </div>
    )
}

export default Login