import React from 'react'
import cap from "../../../public/cap_logo.webp"
import skm from "../../../public/skm_logo.png"
import sdf from "../../../public/sdf_logo.webp"
import nota from "../../../public/nota_logo.webp"
import Image from 'next/image'

const page = () => {
  return (
    <div>
        <section class="bg-white dark:bg-gray-900">
  <div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6">
      <div class="mx-auto mb-8 max-w-screen-sm lg:mb-16">
          <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Vote Here</h2>
          <p class="font-light text-gray-500 sm:text-xl dark:text-gray-400">Cast your Vote according to your choice of political party by clicking on the logo</p>
      </div> 
      <div class="grid gap-8 lg:gap-16 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <div class="text-center text-gray-500 dark:text-gray-400">
              <Image class="mx-auto mb-4 w-36 h-36 rounded-full" src={skm} alt="Skm Logo"/>
              <h3 class="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  <a href="#">SKM (Sikkim Krantikari Morcha)</a>
              </h3>
              <p>President: Shri Prem Singh Tamang Golay</p>
              <ul class="flex justify-center mt-4 space-x-4">
                  
              </ul>
          </div>
          <div class="text-center text-gray-500 dark:text-gray-400">
              <Image class="mx-auto mb-4 w-36 h-36 rounded-full" src={cap} alt="Cap logo"/>
              <h3 class="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  <a href="#">CAP(Citizen Action Party Sikkim)</a>
              </h3>
              <p>President: Shri Ganesh Rai</p>
              <ul class="flex justify-center mt-4 space-x-4">
                   
              </ul>
          </div>
          <div class="text-center text-gray-500 dark:text-gray-400">
              <Image class="mx-auto mb-4 w-36 h-36 rounded-full" src={sdf} alt="Sdf logo"/>
              <h3 class="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  <a href="#">SDF (Sikkim Democratic Front)</a>
              </h3>
              <p>President: Shri Pawan Kumar Chamling</p>
              <ul class="flex justify-center mt-4 space-x-4">
                   
              </ul>
          </div>
          <div class="text-center text-gray-500 dark:text-gray-400">
              <Image width={36} height={36} class="mx-auto mb-4 w-36 h-36 rounded-full" src={nota} alt="Logo of sikkim "/>
              <h3 class="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  <a href="#">NOTA</a>
              </h3>
              <p>I actually like this </p>
              <ul class="flex justify-center mt-4 space-x-4">
               
              </ul>
          </div>
                </div>  
  </div>
</section> 
    </div>
  )
}

export default page



