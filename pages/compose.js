import React, { useState, useEffect} from 'react';
import AppBar from '../components/AppBar';
import ProgressBar from '../components/ProgressBar';
import Editor from '../components/Editor';
import useDimensions from '../hooks/useDimensions';
import useStore from '../store';
import EditBar from '../components/EditBar';
import Head from 'next/head'

function Compose() {
  const [content, setContent] = useState('');
  const { overflow, progress } = useDimensions(content);
  const preview = useStore((state) => state.preview);
  function handleChange(e) {
    const newContent = e.currentTarget.innerHTML;
    console.log(content);
    setContent(newContent);
  }
  

useEffect(()=>{
  navigator?.virtualKeyboard?.overlaysContent = true;
})

  return (
    <div className='compose'>
      <Head>

      <meta content="width=device-width, initial-scale=1, shrink-to-fit=no" name="viewport"/>

      </Head>
      <AppBar />

      <Editor
        handleChange={handleChange}
        overflow={overflow}
        progress={progress}
        preview={preview}
        content={content}
      />
      {!preview && <ProgressBar overflow={overflow} progress={progress} />}

      {!preview && <EditBar />}

      {preview && <button>Done</button>}
      <style jsx>
        {`
          .compose {
            background-color: steelblue;
            height: 100%;
            min-height: 100vh;
            width: var(--containerWidth);
            margin: 0 auto;
          }
          button {
            display: block;
            background-color: gold;
            border: 3px solid gold;
            border-radius: 1.5rem;
            margin: 1rem auto;
            color: steelblue;
            width: 9rem;
            padding: 0.5rem 0.7rem;
            font-weight: bolder;
          }
        `}
      </style>
    </div>
  );
}

export default Compose;
