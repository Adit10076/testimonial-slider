import React from 'react'
import Card from './Card.js'
const Cards = ({ handleLeftClick, handleRightClick, data, currIndex, randGen }) => {
    return (
        <div>
            <div className='flex justify-center items-center py-10 bg-gradient-to-r from-green-100 via-red-100 to-pink-100
            border rounded-2xl'>
                <Card

                    data={data[currIndex]}
                    handleRightClick={handleRightClick}
                    handleLeftClick={handleLeftClick}
                    randGen={randGen}
                />
            </div>

        </div>
    )
}

export default Cards
