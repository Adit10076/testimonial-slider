import React from 'react'
import { MdKeyboardArrowLeft , MdKeyboardArrowRight } from "react-icons/md";
import { BiSolidQuoteSingleLeft } from "react-icons/bi";
import { BiSolidQuoteSingleRight } from "react-icons/bi";
const Card = ({data , handleLeftClick,handleRightClick,randGen}) => {
  return (
    <div className='flex justify-center items-center flex-col w-[70%] relative bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 p-6 rounded-xl shadow-xl'>
  <img className='img rounded-full border-4 border-blue-400 shadow-lg shadow-pink-300' src={data.image} height={100} width={100} alt="Profile" />
  <div className='name text-2xl font-semibold text-blue-700 mt-4'>{data.name}</div>
  <div className='post text-purple-600'>{data.job}</div>
  <div className='icon flex mt-2'>
    <BiSolidQuoteSingleLeft className='text-3xl text-purple-500' />
    <BiSolidQuoteSingleLeft className='text-3xl text-purple-500' />
  </div>
  <div className='description text-center text-gray-800 mt-4'>{data.text}</div>
  <div className='icon flex mt-2'>
    <BiSolidQuoteSingleRight className='text-3xl text-purple-500' />
    <BiSolidQuoteSingleRight className='text-3xl text-purple-500' />
  </div>
  <div className='arrow flex justify-between mt-4 w-full'>
    <button onClick ={()=>handleLeftClick()} className='arrow-left bg-blue-300 p-3 rounded-full hover:bg-blue-400 transition duration-200'>
      <MdKeyboardArrowLeft className='text-xl text-white' />
    </button>
    <button onClick={()=>handleRightClick()} className='arrow-right bg-pink-300 p-3 rounded-full hover:bg-pink-400 transition duration-200'>
      <MdKeyboardArrowRight className='text-xl text-white' />
    </button>
  </div>
  <button onClick={()=>randGen()} className='rnd-card mt-6 bg-gradient-to-r from-purple-500 to-pink-500 text-white p-3 rounded-full w-full hover:from-purple-600 hover:to-pink-600 transition duration-200'>
    SURPRISE ME
  </button>
</div>

  )
}

export default Card
