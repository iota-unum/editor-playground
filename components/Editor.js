import ProgressBar from './ProgressBar';
import useStore from '../store';
function Editor({ handleChange, content, overflow, progress, preview }) {
  const { commandState, setCommandState } = useStore();
  function handleSelect() {
    const selectState = {};
    const newState = ['bold', 'italic', 'formatBlock'].map((btn) => {
      selectState[btn] = document.queryCommandValue(btn);
    });
    console.log('selectState', selectState);
    setCommandState(prev => selectState)
    console.log('commandState', commandState)
    return selectState;
  }
  return (
    <div
      className='editor'
      contentEditable={!preview}
      onInput={handleChange}
      suppressContentEditableWarning={true}
      // value={content}
      onSelect={handleSelect}
    >
      {content === '' ? <div></div> : <div></div>}

      <style jsx global>
        {`
          .editor {
            min-height: calc(var(--containerWidth) * 0.5625);
            max-height: ${preview
              ? `calc(var(--containerWidth) * 1.333333)`
              : `calc(var(--containerWidth) * 0.5625)`};
            background-color: gold;
            border: ${overflow && '5px solid red'};
            overflow: auto;
            padding: 0.5rem;
            font-size: 0.75rem;
          }
        `}
      </style>
    </div>
  );
}

export default Editor;
