import React from 'react'
import useStore from '../store';
function EditButton({cmd, arg, name}) {

const {commandState, setCommandState} = useStore()
const colorBtn = commandState[cmd]  ? 'white' : 'red'

return (
  <div
  className='edit-button'
  onMouseDown={evt => {
    evt.preventDefault(); // Avoids loosing focus from the editable area
    document.execCommand(cmd, false, arg); // Send the command to the browser
    setCommandState({...commandState, [cmd]: !commandState[cmd]})
    console.log('commando', commandState[cmd]);
    console.log(commandState)
      }}
    
    >{name ?? cmd}
    
    <style jsx>


      {`
.edit-button{

      color: ${colorBtn};

}
      `}
    </style>
    
    </div>
  )
}

export default EditButton