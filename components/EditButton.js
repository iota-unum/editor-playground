import React from 'react'
import useStore from '../store';
function EditButton({cmd, arg, name}) {

const commandState = useStore(state => state.commandState)
const colorBtn = commandState[cmd] === 'true' ? 'white' : 'red'

return (
  <div
  className='edit-button'
  onClick={()=>{}}
  onMouseDown={evt => {
    evt.preventDefault(); // Avoids loosing focus from the editable area
    document.execCommand(cmd, false, arg); // Send the command to the browser
    console.log('commando', commandState[cmd]);
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