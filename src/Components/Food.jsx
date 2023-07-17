import React, { useState } from 'react'
import { data } from '../data/data.js'

function Food() {

    const [food, setFoods] = useState(data)

    // Filter type Burger,pizza, salad
    const filterType=(category)=>{
        setFoods(
            data.filter((item)=>{
                return item.category===category
            })
        )
    }

    // Filter by price
    const filterPrice=(Price)=>{
        setFoods(
            data.filter((item)=>{
                return item.price===Price
            })
        )
    }

    return (
        <div className='max-w-[1640px] m-auto p-4 py-12'>
            <h1 className='text-orange-600 font-bold text-4xl text-center'>Top Rated Menu Items</h1>

            {/* Filter Row */}
            <div className='flex flex-col  '>  {/* justify-between , lg:flex-row*/}
                {/* Filter type */}
                <div >
                    <p className='font-bold text-gray-700'>Filter type</p>
                    <div className='flex  flex-wrap'>  {/* justify-between*/}
                        <button onClick={()=>setFoods(data)} className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>All</button>
                        <button onClick={()=>filterType('burger')} className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>Burger</button>
                        <button onClick={()=>filterType('pizza')} className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>Pizza</button>
                        <button onClick={()=>filterType('salad')} className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>Salads</button>
                        <button onClick={()=>filterType('chicken')} className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>Chicken</button>
                    </div>
                </div>

                {/* Filter price */}
                <div>
                    <p className='font-bold text-gray-700'>Filter price</p>
                    <div>
                        <button onClick={()=>filterPrice('$')} className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>$</button>
                        <button onClick={()=>filterPrice('$$')} className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>$$</button>
                        <button onClick={()=>filterPrice('$$$')} className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>$$$</button>
                        <button onClick={()=>filterPrice('$$$$')} className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>$$$$</button>
                    </div>
                </div>
            </div>

            {/* Display foods */}
            <div className='grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4'>
                {food.map((item, index) => {

                    return (<div key={index} className='border shadow-lg rounded-lg hover:scale-105 duration-300'>
                        <img className='w-full h-[200px] object-cover rounded-t-lg'  src={item.image} alt={item.name} />
                        <div className='flex justify-between py-4 px-2'>
                            <p className='font-bold'>{item.name}</p>
                            <p>
                                <span className='bg-orange-500 text-white p-1 rounded-full'>{item.price}</span>
                            </p>
                        </div>
                    </div>)
                })}
            </div>

        </div>
    )
}

export default Food
