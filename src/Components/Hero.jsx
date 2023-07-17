import React from 'react'

function Hero() {
  return (
    <div className='max-w-[1640px] mx-auto p-4'>
        <div className='max-h-[500px] relative'>
            <div className='absolute w-full h-full text-gray-200 max-h-[500px] bg-black-40 flex flex-col justify-center'>
                <p className='px-4 text-4xl sm:text-4xl md:text-6xl lg:text-7xl font-bold'>The <span className='text-orange-500'>Best</span></p>
                <p className='px-4 text-4xl sm:text-4xl md:text-6xl lg:text-7xl font-bold'><span className='text-orange-500'>Food</span> Delivered</p>
            </div>
            <img className='w-full max-h-[500px] mac-cover object-cover' src="https://images.pexels.com/photos/1639562/pexels-photo-1639562.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Food" />
        </div>
    </div>
  )
}

export default Hero