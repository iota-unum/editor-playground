import React , {useState} from 'react';
import AppBar from '../components/AppBar';
import ProgressBar from '../components/ProgressBar';
import Editor from '../components/Editor';
import useDimensions from '../hooks/useDimensions';
import useStore from '../store';
function Compose() {
  const [content, setContent] = useState('');
  const { overflow, progress } = useDimensions(content);
  const preview = useStore((state) => state.preview);
  function handleChange(e) {
    const newContent = e.currentTarget.innerHTML;
    console.log(content);
    setContent(newContent);
  }

  return (
    <div className='compose'>
      <AppBar />

      <Editor
        handleChange={handleChange}
        overflow={overflow}
        progress={progress}
        preview={preview}
        content={content}
      />
{

      !preview && <ProgressBar overflow={overflow} progress={progress} />

}

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

export default Compose;
