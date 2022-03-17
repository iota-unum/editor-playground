import React from 'react';
import EditButton from './EditButton';
import useStore from '../store';

function EditBar() {
  const commandState = useStore((state) => state.commandState);

  return (
    <div className='editbar'>
      <EditButton cmd='bold' name='bold' />
      <EditButton cmd='italic' name='italic' />

      {commandState.heading ? (
        <EditButton cmd='formatBlock' arg='div' name='text' />
      ) : (
        <EditButton cmd='formatBlock' arg='h1' name='heading' />
      )}

      {commandState.center ? (
        <EditButton cmd='justifyLeft' name='left' />
      ) : (
        <EditButton cmd='justifyCenter' name='center' />
      )}
 <EditButton cmd='undo' name='undo' />

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
