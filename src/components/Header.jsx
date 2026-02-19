import React from 'react'
import logo from './../assets/logo.png'
import { HiHome, 
      HiMagnifyingGlass,
      HiStar,
      HiPlayCircle,
      HiTv} from 'react-icons/hi2'  
import {HiPlus, HiDotsVertical} from 'react-icons/hi'
import HeaderItems from './HeaderItems'

const Header = () => {
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
    <div className='flex items-center gap-8'>
        <img src={logo} className='w-[80px] md:w-[115px] object-cover'/>
        {menu.map((item)=>(
          <HeaderItems name={item.name} Icon={item.icon}/>
        ))}
        
    </div>
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhMHSJ38KkFKc0NUiMjB52zle58YBCOb4Fqg&s" alt="profile" className='w-[60px] h-[60px] rounded-full'/>
    </div>
  )
}

export default Header

