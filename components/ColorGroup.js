import React from 'react'
import Selector from './Selector'
function ColorGroup({colors}) {
  return (
    <div className='color-group'>

{colors.map(c => <Selector key={c} color={c} target='background'/>)}



        <style jsx>
            {`
            .color-group {
                display: flex;
                justify-content: space-between;
                align-items: center;
            }
            `}
        </style>
    </div>
  )
}

export default ColorGroup