import React from 'react'
import useStore from '../store';
function EditButton({cmd, arg, name}) {

const {commandState, setCommandState} = useStore()
const statusClass = commandState[name]  ? 'active' : 'disabled'

return (
  <button
  className={`edit-button ${statusClass}`}
  onMouseDown={evt => {
    evt.preventDefault(); // Avoids loosing focus from the editable area

    if(name === '')
    setCommandState(prev => ({...prev.commandState, [name]: !prev.commandState.name}))
    // setCommandState({...commandState, heading: !commandState.text, left: !commandState.center})
    document.execCommand(cmd, false, arg); // Send the command to the browser
    console.log('commando', commandState[name]);
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