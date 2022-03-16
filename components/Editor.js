import React, { useRef, useEffect, useState } from 'react';
import useStore from '../store';
import useDimensions from '../hooks/useDimensions';
import ProgressBar from './ProgressBar';
function Editor() {
  const [content, setContent] = useState('');
  const { overflow, progress } = useDimensions(content);
  const preview = useStore((state) => state.preview);
  console.log(preview)
  function handleChange(e) {
    const newContent = e.currentTarget.innerHTML;

    setContent(newContent);
  }
  return (
    <div className='editor'>
      <div className='editor-area' contentEditable={true} onInput={handleChange} suppressContentEditableWarning={true}>
        {content === '' ? <div></div> : <div></div>}
      </div>
      <ProgressBar overflow={overflow} progress={progress} />
      <style jsx global>
        {`
          .editor-area {
            min-height: calc(var(--containerWidth) * 0.5625);
            max-height: ${preview
              ? `calc(var(--containerWidth) * 1.333333)`
              : `calc(var(--containerWidth) * 0.5625)`};
            background-color: gold;
            border: ${overflow && '5px solid red'};
            overflow: auto;
            padding: 0.5rem;
            font-size: calc(var(--containerWidth/20));
          }
        `}
      </style>
    </div>
  );
}

export default Editor;
