import React from 'react';
import useStore from '../store';
function AppBar() {

  const { preview, setPreview } = useStore();
  return (
    <div>
      AppBar
      <button onClick={setPreview}>{preview ? 'edit' : 'preview'}</button>
    </div>
  );
}

export default AppBar;
