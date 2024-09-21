import React, { useEffect, useState } from 'react'
import './Navbar.css'
import { SlArrowDown, SlMenu } from 'react-icons/sl'
import { IoClose } from 'react-icons/io5'
import clsx from 'clsx'
import Mode from '../components/Mode'
import { Link } from 'react-scroll'
const Navbar = () => {
  const [open,setOpen]=useState(false)
  // const [sticky, setSticky] = useState(false)
  // useEffect(() => {
  //   window.addEventListener('scroll', () => {
  //     window.scrollY > 300 ? setSticky(true) : setSticky(false);
  //   })
  // }, []);
 
  return (
    <header className='container  ' >  
    <div className="row  justify-between mt-4  align-items-center"> 
    {/* logo */}
        <div className='col-12 col-md-2 flex align-items-center justify-between '><img src="logo13.png" width={100} alt="logo" /><Mode /> 
        <SlMenu  className='lg:hidden ' onClick={()=>{setOpen(true)}} />    </div>
        {/* navbar  */}
         
        <nav className= 'col-12 col-md-5 a_navbar_nav_home flex gap-5 align-items-center '>
            <ul className=' flex gap-[30px]' >
                <li ><a href="#" className='text-[#36a2e0]' smooth={true} offset={0} duration={500}>Home</a></li>
                <li><Link to='about' smooth={true} offset={-50} duration={500}> About</Link></li>
                <li ><a href="#" className='flex gap-2 align-items-center'>Location <SlArrowDown size={12} /></a></li>
                <li><a href="#" className='flex gap-2 align-items-center'>Categories <SlArrowDown size={12} /></a></li>
            </ul>
            {/* sign in  */}
            <div><button className='bg-[#EEFFEE] rounded-[50px] text-[#36a2e0] text-[15px] py-1 font-semibold px-4' >Sign in</button></div>
        </nav>
        {/* mobile menu */}
        <div className={clsx('fixed h-full w-screen  bg-black/50  backdrop-blur-sm top-0 right-0 -translate-x-full',
        open && "translate-x-0"
      )}>
        <div className= ' a_navbar_nav flex gap-5   lg:hidden  bg-[#212EA0] flex--cc  absolute left-0 top-0 h-screen  ps-16 pt-32  z-50  w-100 '>
        <IoClose onClick={() => { setOpen(false) }} className='absolute top-[20px] right-[10px]  text-[30px] text-[#fff] ' />
            <ul className='a_navbar flex gap-[30px] '>
                <li ><a href="#" className='text-[#36a2e0]'>Home</a></li>
                <li><a className='text-white' href="#">About </a></li>
                <li ><a href="#" className='flex gap-2 align-items-center text-white'>Location <SlArrowDown size={12} /></a></li>
                <li><a href="#" className='flex gap-2 align-items-center text-white'>Categories <SlArrowDown size={12} /></a></li>
            </ul>
            {/* sign in  */}
            <div><button className='bg-[#EEFFEE] rounded-[50px] text-[#36a2e0] text-[15px] py-1 font-semibold px-4'>Sign in</button></div>
        </div>
        </div> 
        </div>
       
    </header>
  )
}

export default Navbar