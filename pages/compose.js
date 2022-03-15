import React from 'react'
import AppBar from '../components/AppBar'
import Editor from '../components/Editor'
function compose() {
  return (
    <div className='.compose'>
<AppBar/>
<Editor/>
<style jsx>
  {`
  
  .compose {
    background-color: blue;
    height: 100vh;
  }
  
  `}
</style>
    </div>
  )
}

export default compose