import React from 'react'

export const HeadlineCards = () => {
  return (
    <div className='max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6'>
        {/* Card */}
        <div className='rounded-xl relative'>
            {/* Overlay */}
            <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
                <p className='font-bold text-2xl px-2 pt-4'>Sun's Out BoGo's Out</p>
                <p className='px-2'>Through 8/26</p>
                <button className='bg-white text-black  mx-2 absolute bottom-4 border-white hover:bg-orange-400 hover:text-white'>Order Now</button>
            </div>
            <img className='mx-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl ' src="https://images.pexels.com/photos/2271101/pexels-photo-2271101.jpeg?auto=compress&cs=tinysrgb&w=600" alt="/" />
        </div>
        <div className='rounded-xl relative'>
            {/* Overlay */}
            <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
                <p className='font-bold text-2xl px-2 pt-4'>New Restraunts</p>
                <p className='px-2'>Added Daily</p>
                <button className='bg-white text-black  mx-2 absolute bottom-4 border-white hover:bg-orange-400 hover:text-white'>Order Now</button>
            </div>
            <img className='mx-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl ' src="https://images.pexels.com/photos/4552047/pexels-photo-4552047.jpeg?auto=compress&cs=tinysrgb&w=600" alt="/" />
        </div>
        <div className='rounded-xl relative'>
            {/* Overlay */}
            <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
                <p className='font-bold text-2xl px-2 pt-4'>We deliver Deserts too</p>
                <p className='px-2'>Tasty Treats</p>
                <button className='bg-white text-black  mx-2 absolute bottom-4 border-white hover:bg-orange-400 hover:text-white'>Order Now</button>
            </div>
            <img className='mx-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl ' src="https://images.pexels.com/photos/1105325/bbq-meet-eating-diner-1105325.jpeg?auto=compress&cs=tinysrgb&w=600" alt="/" />
        </div>
    </div>
  )
}

export default HeadlineCards
