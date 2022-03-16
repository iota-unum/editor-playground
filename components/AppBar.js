import React from 'react';
import useStore from '../store';
function AppBar() {

  const { preview, setPreview } = useStore();
  return (
    <div className='appbar'>
      AppBar
      <button onClick={setPreview}>{preview ? 'edit' : 'preview'}</button>


      <style jsx>
        {`
        .appbar {
          height: 7vh;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        button {
          background-color: green;
          border-radius: 1rem;
          height: 30px;
        }
        `}
      </style>
    </div>
  );
}

export default AppBar;
