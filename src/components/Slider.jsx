import React, { useEffect, useRef, useState } from 'react'
import GlobalAPI from '../Services/GlobalAPI';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi2';
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";
const screenWidth = window.innerWidth;

const Slider = () => {
    const [movieList, setMovieList] = useState([]);
    const elementRef = useRef();

    const getTrendingMovies=()=>{
        GlobalAPI.getTrendingVideos().then(resp=>{
            console.log(resp.data.results);
            setMovieList(resp.data.results)
        })
    }

    useEffect(() => {    
        getTrendingMovies();
    }, [])

    const sliderRight=(element)=>{
        element.scrollLeft+=screenWidth-110
    }
    const sliderLeft=(element)=>{
        element.scrollLeft-=screenWidth-110
    }

  return (
    <div>
        <HiChevronLeft className='hidden md:block text-white text-[30px] absolute mx-8 mt-[200px] cursor-pointer' onClick={()=>sliderLeft(elementRef.current)}/>
        <HiChevronRight className='hidden md:block text-white text-[30px] absolute mx-8 mt-[200px] cursor-pointer right-0' onClick={()=>sliderRight(elementRef.current)}/>
    <div className='flex overflow-x-auto w-full px-8 md:px-16 py-4 scrollbar-hide scroll-smooth' ref={elementRef}>
       {movieList.map((item) => (
    <img
        key={item.id}
        src={IMAGE_BASE_URL + item.backdrop_path}
        className='min-w-full md:h-[400px] object-cover object-left-top mr-5 shadow-2xl rounded-md hover:border-[3px] border-gray-200 transition-all duration-100 ease-in'
    />
))}
    </div>
    </div>
  )
}

export default Slider