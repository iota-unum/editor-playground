import React from 'react';
import ColorGroup from './ColorGroup';

function ColorBar({}) {
  const bgColors = [
    'rgb(29, 155, 240)',
    'rgb(255, 212, 0)',
    'rgb(249, 24, 128)',
    'rgb(120, 86, 255)',
    'rgb(255, 122, 0)',
    'rgb(0, 186, 124)',
  ];


  const fontColors = [ 'black', 'white']
  return (
    <div className='colorbar'>
     
      <ColorGroup colors={fontColors} />
      <ColorGroup colors={[]} />
      <ColorGroup colors={bgColors} />

      <style jsx>
        {`
          .colorbar {
            height: 2.5rem;
            width: 100%;
            background-color: rgb(38, 92, 137);
            display: flex;
            justify-content: space-between;
          }
        `}
      </style>
    </div>
  );
}

export default ColorBar;
