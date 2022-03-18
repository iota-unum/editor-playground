import React from 'react'

function ColorBar({children}) {
  return (
    <div className='colorbar'>ColorBar
    
    
    {children}
    
    
    <style jsx>
        {`
        .colorbar {
            height: 2.5rem;
            width: 100%;
            background-color: orchid;
        }
        
        `}
    </style>
    
    
    </div>
  )
}

export default ColorBar