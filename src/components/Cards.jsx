import React from 'react'
import Single from '../assets/single.png'
import Double from '../assets/double.png'
import Triple from '../assets/triple.png'
const Cards = () => {
  return (
    <div className='w-full py-[10rem] px-4 bg-white'>
        <div className='max-w-[1240px] mx-auto grid grid-cols-3 gap-8'>
            <div className='w-full border shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
                <img className='w-20 mx-auto mt-[-3rem] bg-white' src={Single} alt=""/>
                <h2 className='text-2xl font-bold text-center py-8'>Single User</h2>
                <p className='text-center text-4xl font-bold'>$149</p>
                <div className='text-center font-medium ' >
                    <p className='py-2 border-b mx-8 mt-8'>500 GB STORAGE</p>
                    <p className='py-2 border-b mx-8'>1 Granted User</p>
                    <p className='py-2 border-b mx-8'>Send up to 2 GB</p>
                </div>
                <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black'>Start Trial</button>
            </div>
            <div className='w-full border bg-gray-100 shadow-xl flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300'>
                <img className='w-20 mx-auto mt-[-3rem] bg-transparent' src={Double} alt=""/>
                <h2 className='text-2xl font-bold text-center py-8'>Single User</h2>
                <p className='text-center text-4xl font-bold'>$190</p>
                <div className='text-center font-medium ' >
                    <p className='py-2 border-b mx-8 mt-8'>1000 GB STORAGE</p>
                    <p className='py-2 border-b mx-8'>5 Granted User</p>
                    <p className='py-2 border-b mx-8'>Send up to 50 GB</p>
                </div>
                <button className='bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 '>Start Trial</button>
            </div>
            <div className='w-full border shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
                <img className='w-20 mx-auto mt-[-3rem] bg-white' src={Triple} alt=""/>
                <h2 className='text-2xl font-bold text-center py-8'>Single User</h2>
                <p className='text-center text-4xl font-bold'>$179</p>
                <div className='text-center font-medium ' >
                    <p className='py-2 border-b mx-8 mt-8'>750 GB STORAGE</p>
                    <p className='py-2 border-b mx-8'>3 Granted User</p>
                    <p className='py-2 border-b mx-8'>Send up to 10 GB</p>
                </div>
                <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black'>Start Trial</button>
            </div>
        </div>
    </div>
  )
}

export default Cards