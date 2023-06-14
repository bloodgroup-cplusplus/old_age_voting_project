import React from 'react'
import Image from 'next/image'
import logo from "../../public/Seal_of_Sikkim.png"
import Link from 'next/link'
//import {useAuthContext} from "../(context)/AuthContext"
//import  SignOut  from "../(firebase)/auth/signout" 
//import { useRouter } from 'next/navigation'

const Navbar = () => {
  //const router = useRouter()
  const handleSignout=()=>{
    const{result,error} = SignOut() 
    if(error)
    {
      console.log('signout error')

    }
    router.push("/")

  
  }
  //const {user} = useAuthContext()
  //if(!user)
  //{

  return (
    <nav className="bg-green-500 border-gray-200 dark:bg-gray-900">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    <Link href = "#" className='flex items-center'>
        <Image src={logo} height={60} width={60} alt = "Government Of Sikkim Logo" />
        <span className="self-center text-sm text-semibold text-white font-light dark:text-white">E-vote</span>
    </Link>
         
  </div>
</nav>


  )
//    }

    }

export default Navbar