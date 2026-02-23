import React from 'react'
import disney from './../assets/Images/disney.png'
import marvel from './../assets/Images/marvel.png'
import nationalG from './../assets/Images/nationalG.png'
import pixar from './../assets/Images/pixar.png'
import starwar from './../assets/Images/starwar.png'

import disneyV from './../assets/videos/disney.mp4'
import marvelV from './../assets/videos/marvel.mp4'
import nationalGV from './../assets/videos/national-geographic.mp4'
import pixarV from './../assets/videos/pixar.mp4'
import starwarV from './../assets/videos/star-wars.mp4'

const ProductionCards = () => {
    const ProductionCardList =[
        {
            id : 1,
            image : disney,
            video : disneyV
        },
        {
            id : 2,
            image : marvel,
            video : marvelV
        },
        {
            id : 3,
            image : nationalG,
            video : nationalGV
        },
        {
            id : 4,
            image : pixar,
            video : pixarV
        },
        {
            id : 5,
            image : starwar,
            video : starwarV
        }
    ]
    
  return (
    
    <div className='flex gap-2 md:gap-5 p-2 px-5 md:px-16 py-12'> {ProductionCardList.map((item)=>( 
    <div className='border-2 border-gray-600 rounded-lg hover:scale-110 transition-all duration-300 ease-in-out cursor-pointer relative shadow-2xl shadow-black '>
         <video src={item.video} autoPlay loop playsInline muted className='absolute z-0 top-0 rounded-md opacity-0 hover:opacity-50'/> 
         <img src={item.image} className='w-full z-1 opacity-100' /> </div> ))} </div>
  )
}

export default ProductionCards