import ProgressBar from './ProgressBar';
import useStore from '../store';
function Editor({ handleChange, content, overflow, progress, preview }) {
  const { fontSize, commandState, setCommandState } = useStore();

  function handleSelect() {
    const selectState = {
      bold: document.queryCommandState('bold'),
      italic: document.queryCommandState('italic'),
      heading: document.queryCommandValue('formatBlock') === 'h1',
      text: document.queryCommandValue('formatBlock') === 'div',
      center: document.queryCommandState('justifyCenter'),
      left: document.queryCommandState('justifyLeft'),
    };
    console.log('bold', document.queryCommandState('bold'));
    console.log('qmvl', document.queryCommandValue('formatBlock'));
    setCommandState(selectState);
    console.log('CommandSTATE', commandState);
  }

  function handlePaste(e) {
    e.preventDefault();
    const text = e.clipboardData.getData('text/plain');
    document.execCommand('insertHTML', false, text);
  }

  return (
    <div
      className='editor'
      contentEditable={!preview}
      onInput={handleChange}
      suppressContentEditableWarning={true}
      // value={content}
      onSelect={handleSelect}
      onPaste={handlePaste}
    >
      {content === '' ? <div></div> : <div></div>}

      <style jsx global>
        {`
          .editor {
            font-weight: 500;

            min-height: calc(var(--containerWidth) * 0.5625);
            max-height: ${preview
              ? `calc(var(--containerWidth) * 1.333333)`
              : `calc(var(--containerWidth) * 0.5625)`};
            background-color: gold;
            overflow: auto;
            padding: 0.5rem;
            font-size: ${fontSize}rem;
          }
        `}
      </style>
    </div>
  );
}

export default Editor;
