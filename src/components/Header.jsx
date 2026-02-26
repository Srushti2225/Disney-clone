import React, { useState } from "react";
import logo from "./../assets/logo.png";
import {
  HiHome,
  HiMagnifyingGlass,
  HiStar,
  HiPlayCircle,
  HiTv,
  HiBars3, HiXMark
} from "react-icons/hi2";
import { HiPlus, HiDotsVertical } from "react-icons/hi";
import HeaderItems from "./HeaderItems";

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const menu = [
    { name: 'HOME', icon: HiHome },
    { name: 'SEARCH', icon: HiMagnifyingGlass },
    { name: 'WATCH LIST', icon: HiPlus },
    { name: 'ORIGINALS', icon: HiStar },
    { name: 'MOVIES', icon: HiPlayCircle },
    { name: 'SERIES', icon: HiTv },
  ]

  return (
    <div className='flex justify-between items-center p-5 px-5 md:px-16'>
      
        {/* Left Side: Logo and Desktop Menu */}
        <div className='flex items-center gap-10'>
            <img src={logo} className='w-[80px] md:w-[115px] object-cover' />
            <div className='hidden md:flex gap-8'>
                {menu.map((item, index) => (
                    <HeaderItems key={index} name={item.name} Icon={item.icon} />
                ))}
            </div>
        </div>

        {/* Right Side: Hamburger and Profile Icon */}
        <div className='flex items-center gap-5'>
            {/* Mobile Hamburger - Hidden on Desktop */}
            <div className='md:hidden' onClick={() => setToggle(!toggle)}>
                {toggle ? 
                    <HiXMark className='text-white text-[32px] cursor-pointer' /> : 
                    <HiBars3 className='text-white text-[32px] cursor-pointer' />}
                
                {toggle && (
                    <div className='absolute mt-3 right-5 bg-[#121212] border border-gray-700 p-4 z-50 shadow-2xl rounded-lg min-w-[150px]'>
                        {menu.map((item, index) => (
                            <div key={index} onClick={() => setToggle(false)} className="mb-2 last:mb-0">
                              key={item.id}
                                <HeaderItems name={item.name} Icon={item.icon} />
                            </div>
                        ))}
                    </div>
                )}
            </div>

            {/* Profile Icon */}
            <img 
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhMHSJ38KkFKc0NUiMjB52zle58YBCOb4Fqg&s" 
                className='w-[40px] h-[40px] md:w-[50px] md:h-[50px] rounded-full border-2 border-transparent hover:border-white transition-all' 
                alt="profile"
            />
        </div>
    </div>
  )
}

export default Header