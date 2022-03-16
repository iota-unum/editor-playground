import React from 'react';
import EditButton from './EditButton';
import useStore from '../store';

function EditBar() {
  
 
  return (
    <div className='editbar'>
      <EditButton cmd='bold' />
      <EditButton cmd='italic' />
      <EditButton cmd='formatBlock' arg='h1'name='heading'/>
      <EditButton cmd='formatBlock' arg='div' name='text'/>

      <style jsx>
        {`
          .editbar {
            display: flex;
            justify-content: space-around;
          }
        `}
      </style>
    </div>
  );
}

export default EditBar;
