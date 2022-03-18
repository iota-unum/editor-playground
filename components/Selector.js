import React from 'react'
import useStore from '../store'
function Selector({color}) {
const setSelectedColor = useStore(state => state.setSelectedColor)

    function handleClick(){

       setSelectedColor(color)
    }
  return (
    <div className='selector'
    
    onClick={handleClick}
    
    >
    
    
    
    
    <style jsx>
        {`
        .selector {
            width: 1rem;
            height: 1rem;
            background-color: ${color};
            margin: 0.5rem;
            border-radius: 100%;
            
        }
        
        `}
    </style>
    </div>
  )
}

export default Selector