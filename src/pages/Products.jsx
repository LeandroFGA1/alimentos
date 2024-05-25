import React from 'react'

function Products() {
  return (
    <div className=' h-fit min-h-screen w-full bg-red-500 flex gap-6 flex-col'>
      {/* primer modelo de card */}
      <div class="card-1 flex-col md:flex-row justify-between flex gap-4 items-start mx-4 py-12">
        <div class="flex bg-white rounded-lg shadow dark:bg-gray-800 flex-col md:flex-row">
          <div class="relative w-full md:w-48 flex justify-center items-center">
            <img src="https://upload.wikimedia.org/wikipedia/commons/f/f7/Lemon_-_whole_and_split.jpg" alt="shopping image"
                  class="object-cover w-full h-48 md:h-full rounded-t-lg md:rounded-l-lg md:rounded-t-none"/>
          </div>
          <form class="flex-auto p-6">
              <div class="flex flex-wrap">
                  <h1 class="flex-auto text-xl font-semibold dark:text-gray-50">Product name</h1>
                  <div class="text-xl font-semibold text-gray-500 dark:text-gray-300">$110.00</div>
                  <div class="flex-none w-full mt-2 text-sm font-medium text-gray-500 dark:text-gray-300">In stock</div>
              </div>
              <div class="flex items-baseline mt-4 mb-6 text-gray-700 dark:text-gray-300">
                <div class="flex space-x-2">
                  <label class="text-center">
                    <input type="radio"
                              class="flex items-center justify-center w-6 h-6 accent-violet-600 bg-gray-100 rounded-lg dark:bg-gray-600"
                              name="size" value="xs"/>1
                    </label>
                    <label class="text-center">
                        <input type="radio" class="flex items-center justify-center w-6 h-6 accent-violet-600" name="size"
                              value="s"/>2
                    </label>
                    <label class="text-center">
                        <input type="radio" class="flex items-center justify-center w-6 h-6 accent-violet-600" name="size"
                              value="m"/>3
                    </label>
                    <label class="text-center">
                      <input type="radio" class="flex items-center justify-center w-6 h-6 accent-violet-600" name="size"
                              value="l"/>4
                    </label>
                    <label class="text-center">
                      <input type="radio" class="flex items-center justify-center w-6 h-6 accent-violet-600" name="size"
                              value="xl"/>5
                    </label>
                  </div>
                  <a href="#"
                      class="hidden ml-auto text-sm text-gray-500 underline md:block dark:text-gray-300">otros
                  </a>
              </div>
            <div class="flex mb-4 text-sm font-medium">
                <button type="button"
                    class="py-2 px-4 bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg ">Buy
                    now</button>
            </div>
            <p class="text-sm text-gray-500 dark:text-gray-300">texto textero.</p>
        </form>
        </div>
      </div>
      <div className='card-2'>
      <div class="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
        <a href="#">
            <img src="https://upload.wikimedia.org/wikipedia/commons/f/f7/Lemon_-_whole_and_split.jpg"
                    alt="Product" class="h-80 w-72 object-cover rounded-t-xl" />
            <div class="px-4 py-3 w-72">
                <span class="text-gray-400 mr-3 uppercase text-xs">limon</span>
                <p class="text-lg font-bold text-black truncate block capitalize">limonancio</p>
                <div class="flex items-center">
                    <p class="text-lg font-semibold text-black cursor-auto my-3">$149</p>
                    <del>
                        <p class="text-sm text-gray-600 cursor-auto ml-2">$199</p>
                    </del>
                    <div class="ml-auto"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                            fill="currentColor" class="bi bi-bag-plus" viewBox="0 0 16 16">
                            <path fill-rule="evenodd"
                                d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z" />
                            <path
                                d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                        </svg></div>
                </div>
            </div>
        </a>
    </div>
      </div>
      <div className='card-3'>
        <article class="max-w-sm w-full bg-white rounded-lg shadow-lg overflow-hidden dark:bg-gray-700">
          <div>
            <img class="object-cover h-64 w-full" src="https://upload.wikimedia.org/wikipedia/commons/f/f7/Lemon_-_whole_and_split.jpg" alt="Converse sneakers" />
          </div>
          <div class="flex flex-col gap-1 mt-4 px-4">
            <h2 class="text-lg font-semibold text-gray-800 dark:text-gray-50">la wea limonera</h2>
            <span class="font-normal text-gray-600 dark:text-gray-300">limon amarillo</span>
            <span class="font-semibold text-gray-800 dark:text-gray-50">$60</span>
          </div>
          <div class="flex gap-4 mt-4 px-4">
            <span class="sr-only">Colores</span>

            <button aria-label="Yellow" class="p-1 border border-gray-200 dark:border-gray-500 rounded-full cursor-pointer bg-yellow-500 dark:bg-yellow-400"></button>

            <button aria-label="Red" class="p-1 border border-gray-200 dark:border-gray-500 rounded-full cursor-pointer bg-red-500 dark:bg-red-400"></button>

            <button aria-label="Blue" class="p-1 border border-gray-200 dark:border-gray-500 rounded-full cursor-pointer bg-blue-500 dark:bg-blue-400"></button>

            <button aria-label="Black" class="p-1 border border-gray-200 dark:border-gray-500 rounded-full cursor-pointer bg-gray-800 dark:bg-gray-600"></button>
          </div>
          <div class="mt-4 p-4 border-t border-gray-200 dark:border-gray-500">
            <button class="w-full flex justify-between items-center font-bold cursor-pointer hover:underline text-gray-800 dark:text-gray-50">
              <span class="text-base">Añadir al carrito</span>
              <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
            </button>
          </div>
    </article>
      </div>
    </div>
  )
}

export default Products