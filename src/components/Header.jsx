import React, { useState } from 'react'
import logo from './../assets/logo.png'
import { HiHome, 
      HiMagnifyingGlass,
      HiStar,
      HiPlayCircle,
      HiTv} from 'react-icons/hi2'  
import {HiPlus, HiDotsVertical} from 'react-icons/hi'
import HeaderItems from './HeaderItems'

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const menu =[
    {
      name : 'HOME',
      icon : HiHome
    },
    {
      name : 'SEARCH',
      icon : HiMagnifyingGlass
    },
    {
      name : 'WATCH LIST',
      icon : HiPlus
    },
    {
      name : 'ORIGINALS',
      icon : HiStar
    },
    {
      name : 'MOVIES',
      icon : HiPlayCircle
    },
    {
      name : 'SERIES',
      icon : HiTv
    },

  ]
  return (
    <div className='flex justify-between items-center p-5'>
    <div className='flex items-center gap-10'>
        <img src={logo} className='w-[80px] md:w-[115px] object-cover'/>
        <div className='hidden md:flex gap-8'>
          {menu.map((item)=>(
          <HeaderItems name={item.name} Icon={item.icon}/>
        ))}
        </div>
        <div className='flex md:hidden gap-8'>
          {menu.map((item, index)=>index < 3 &&(
          <HeaderItems name={''} Icon={item.icon}/>
        ))}
        </div>
        <div className='md:hidden' onClick={()=>setToggle(!toggle)}>
          <HeaderItems name={''} Icon={HiDotsVertical}/>
          {toggle?<div className='absolute mt-3 bg-[#121212] border border-gray-700 p-3 px-5 py-4'>
            {menu.map((item, index)=>index >= 3 &&(
          <HeaderItems name={item.name} Icon={item.icon}/>
        ))}
          </div> : null}
        </div>             
    </div>
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhMHSJ38KkFKc0NUiMjB52zle58YBCOb4Fqg&s" alt="profile" className='w-[50px] h-[50px] rounded-full'/>
    </div>
  )
}

export default Header

