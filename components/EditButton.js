import React from 'react'
import useStore from '../store';
function EditButton({cmd, arg, name}) {

const {commandState, setCommandState} = useStore()
const statusClass = commandState[cmd]  ? 'active' : 'disabled'

return (
  <button
  className={`edit-button ${statusClass}`}
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
  display: block;
  width: 7rem;
  padding: 0.5rem;
  flex-grow:1;

}

.active {
  color: red;
}

.disabled {
  color: green;
}
      `}
    </style>
    
    </button>
  )
}

export default EditButton