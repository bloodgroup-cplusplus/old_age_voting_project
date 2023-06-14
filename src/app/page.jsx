import Image from 'next/image'
import Link from 'next/link'
import old from "../../public/oldest_voter.webp"

export default function Home() {
  return (
    <section className="bg-white dark:bg-gray-900">
    <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">Online Voting System for Elderly Voters</h1>
            <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">Vote cast for all <strong className="font-semibold">Citizens of Sikkim state strictly above 75 years</strong> casting their vote in  2024 vote  can be done via this portal.Click the PROCEED button to continue </p>
            <Link href="/signup" className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-green-500 hover:bg-primary-800 focus:ring-4 focus:ring-green-400 dark:focus:ring-primary-900">
                Proceed
                <svg class="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </Link>
            
        </div>
        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
            <Image src={old} width={400} height={400} alt="mockup"/>
        </div>                
    </div>
</section>
   
  )
}
