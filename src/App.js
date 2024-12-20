import React, { useState } from "react";
import data from './data.js'
import Cards from './components/Cards.js'
import random from 'random'
import { MdKeyboardArrowLeft , MdKeyboardArrowRight } from "react-icons/md";
const App = () => {
  const [currIndex , setIndex] = useState(0);
  function handleLeftClick(){
    (currIndex===0)?setIndex(data.length-1):setIndex(currIndex-1);
  }
  function handleRightClick(){
    (currIndex===data.length-1)?setIndex(0):setIndex(currIndex+1);
  }
  function randGen(){
    const newIndex = random.int(0,data.length-1);
    setIndex(newIndex);
  }
  //id = currIndex+1
  return(
    <div className="flex justify-center items-center py-10 bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100">
  <div className="container w-full max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-xl flex flex-col gap-6 justify-center items-center">
    <h1 className="heading text-4xl font-bold text-blue-700">Our Testimonials</h1>
    <div className="line w-24 h-1 bg-gradient-to-r from-green-400 to-pink-400 rounded-lg"></div>
    <Cards 
      handleLeftClick={handleLeftClick} 
      handleRightClick={handleRightClick} 
      data={data} 
      currIndex={currIndex}
      randGen={randGen} 
    />
  </div>
</div>


  );
};

export default App;
