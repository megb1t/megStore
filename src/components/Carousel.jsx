import React, { useEffect } from 'react';
import { useState } from 'react';
import { ChevronLeft, ChevronRight, ChevronsLeft } from "react-feather"
export default function Carousel ({ children: slides, autoSlide=false, autoSlideInterval=3000}){
    const [curr, setCurr] = useState(0);
    const prev = () => setCurr(curr=>curr===0 ? slides.length-1 : curr-1);
    const next = () => setCurr(curr=>curr===slides.length-1 ? 0 : curr+1);
    useEffect(()=>{
        if(!autoSlide) return 
        const SlideInterval = setInterval(next, autoSlideInterval)
        return () => clearInterval(SlideInterval) 
    }, [])
    return (
        <>
        <div className='overflow-hidden relative'>
            <div className='flex transition-transform duration-500 ease-out' style={{transform: `translateX(-${curr*100}%)`}}>
                {slides}
            </div>
            <div className='absolute inset-0 flex items-center justify-between p-4'>
                <button  onClick={prev} className='p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white'>
                    <ChevronLeft size={40}/>
                </button>
                <button  onClick={next} className='p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white'>
                    <ChevronRight size={40}/>
                </button>
            </div>
            <div className='absolute bottom-4 left-0 right-0'>
                <div className='flex items-center justify-center gap-2'>
                    {slides.map((_, i)=>(
                        <div key={i} className={`
                            transition-all w-3 h-3 bg-white rounded-full ${curr ===i ? "p-2" : "bg-opacity-50"}
                            `}/>
                    ))}
                </div>

            </div>
        </div>
        </>
    )
}   