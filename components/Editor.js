import ProgressBar from './ProgressBar';
import useStore from '../store';
function Editor({ handleChange, content, overflow, progress, preview }) {
  const {fontSize, commandState, setCommandState } = useStore();


function handleSelect () {

const selectState = {
  bold: document.queryCommandState('bold'),
  italic: document.queryCommandState('italic'),
  heading: document.queryCommandValue('formatBlock' ) == 'h1',
  text: document.queryCommandValue('formatBlock' ) == 'div',
  center: document.queryCommandState('justifyCenter'),
  left: document.queryCommandState('justifyLeft'),

}
console.log('bold',  document.queryCommandState('bold'))
console.log('qmvl', document.queryCommandValue('formatBlock'))
setCommandState(selectState)
console.log('CommandSTATE' , commandState)
}


  // function handleSelect() {
  //   const selectState = {};
  //  ['bold', 'italic', 'formatBlock'].map((btn) => {
  //     selectState[btn] = document.queryCommandState(btn);
  //   });
  //   // console.log('selectState', selectState);
  //   setCommandState(selectState)
  //   console.log('commandState', commandState)
  //   return selectState;
  // }
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
            font-size: ${fontSize}rem;
          }
        `}
      </style>
    </div>
  );
}

export default Editor;
