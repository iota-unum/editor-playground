import React from 'react';
import useStore from '../store';
import Avatar from './Avatar';
function AppBar() {

  const { preview, setPreview } = useStore();
  return (
    <div className='appbar'>

      <Avatar/>
      <button onClick={setPreview}>{preview ? 'back' : 'preview'}</button>


      <style jsx>
        {`
        .appbar {
          height: 9vh;
          width: var(--containerWidth);
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1rem .5rem;
        }
        button {
          background-color: transparent;
          border: 3px solid gold;
          border-radius: 1.5rem;
          margin: 0 10px;
          color: gold;
          width: 5rem;
          padding: .5rem .7rem;
          font-weight: bolder;
        }
        `}
      </style>
    </div>
  );
}

export default AppBar;
