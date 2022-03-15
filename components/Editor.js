import React, { useRef, useEffect, useState } from 'react';
import useStore from '../store';
function Editor() {
  const [content, setContent] = useState('');
  const [overflow, setOverflow] = useState(false);
  const [scrollHeight, setScrollHeight] = useState(0);
  const [progress, setProgress] = useState(0);
  const [fullHeight, setFullheight] = useState(false)
  useEffect(() => {
    const editor = document.querySelector('.editor-area');
    const lastChild = editor.lastChild
    const editorWidth = editor.offsetWidth;
    const editorHeight = editor.offsetHeight;
    const editorTop = editor.offsetTop
    const lastChildTop = lastChild && lastChild.offsetTop + lastChild.offsetHeight
    const contentHeight = ( lastChildTop - editorTop) || 0
    const maxHeight = editorWidth * 1.333333;
    const scrollHeight = editor.scrollHeight;
    console.log('contentHEIGHT', content);
    setOverflow(scrollHeight > maxHeight);
    setProgress(contentHeight / maxHeight);
    setScrollHeight(scrollHeight)
  }, [content, progress, overflow, scrollHeight]);
  function handleChange(e) {
    const newContent = e.currentTarget.innerHTML;
   
    setContent(newContent );
  }
  return (
    <div className='editor'>
      <button
      onClick={()=>{setFullheight(!fullHeight)}}
      
      >full height</button>
      <div className='editor-area' contentEditable onInput={handleChange}>
        {content === ''? <div></div> : <div></div>}
      </div>
      <div className='progress-bar'>

        <div className="progress-status">
{}
{overflow ? 'spazio esaurito' : Math.trunc(progress*100) + '%  '}
        </div>
      </div>
      <style jsx global>
        {`
          .editor {
            width: var(--containerWidth);
            margin: 0 auto;
          }
          .editor-area {
            min-height: calc(var(--containerWidth) * 0.5625);
            max-height: ${fullHeight ? `calc(var(--containerWidth) * 1.333333)` : `calc(var(--containerWidth) * 0.5625)`};
            background-color: gold;
            border: ${overflow && '5px solid red'};
            overflow: auto;
          }
          .progress-bar {
            height: 30px;
            background-color: gold;
            width: 100%;
          }
          .progress-status {
            background-color: red;
            height: 100%;
            padding: .2rem;
            display: ${progress < 0 ? 'none' : 'block'};
            width: ${overflow ? '100%'  : progress*100 + '%' };
            color: white;
            font-size: 0.3;
          }
        `}
      </style>
    </div>
  );
}

export default Editor;