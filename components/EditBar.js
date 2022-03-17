import React from 'react';
import EditButton from './EditButton';
import useStore from '../store';

function EditBar() {
  
 
  return (
    <div className='editbar'>
      <EditButton cmd='bold' name='bold'/>
      <EditButton cmd='italic' name='italic'/>
      <EditButton cmd='formatBlock' arg='h1'name='heading'/>
      <EditButton cmd='formatBlock' arg='div' name='text'/>
      <EditButton cmd='justifyCenter'  name='center'/>
      <EditButton cmd='justifyLeft' name='left'/>

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
