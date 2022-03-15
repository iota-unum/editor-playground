import React from 'react';
import AppBar from '../components/AppBar';
import Editor from '../components/Editor';
function compose() {
  return (
    <div className='compose'>
      <AppBar />

      <Editor />
      <style jsx>
        {`
          .compose {
            background-color: steelblue;
            height: 100%;
            width: var(--containerWidth);
            margin: 0 auto;
          }
        `}
      </style>
    </div>
  );
}

export default compose;
