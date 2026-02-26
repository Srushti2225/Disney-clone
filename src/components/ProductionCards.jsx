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
    
  // ProductionCards.jsx
return (
  <div className='grid grid-cols-3 md:grid-cols-5 gap-2 md:gap-5 p-2 px-5 md:px-16 md:py-12'>
     {ProductionCardList.map((item) => (
       <div key={item.id} className='border-[2px] border-gray-600 rounded-lg hover:scale-110 transition-all duration-300 ease-in-out cursor-pointer relative shadow-xl shadow-black'>
          <video src={item.video} autoPlay loop playsInline muted className='absolute z-0 top-0 rounded-md opacity-0 hover:opacity-50 object-cover h-full w-full' />
          <img src={item.image} className='w-full z-[1] opacity-100' />
       </div>
     ))}
  </div>
)
}

export default ProductionCards