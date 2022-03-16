import React from 'react';
import useStore from '../store';
function AppBar() {

  const {  setPreview } = useStore();
  return (
    <div>
      AppBar
      <button onClick={setPreview}>full height</button>
    </div>
  );
}

export default AppBar;
