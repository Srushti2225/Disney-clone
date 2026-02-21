import React from 'react'

const HeaderItems = (props) => {
  return (
    <div className="relative group text-white flex items-center gap-3 font-semibold text-[15px] cursor-pointer mb-3">
      
      <props.Icon className="text-xl" />
      <h2>{props.name}</h2>
      <span className="absolute left-0 -bottom-2 h-[2px] w-0 bg-white transition-all duration-300 group-hover:w-full"></span>

    </div>
  )
}

export default HeaderItems
