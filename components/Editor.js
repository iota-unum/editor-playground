import ProgressBar from './ProgressBar';
function Editor({ handleChange, content, overflow, progress, preview }) {
  return (
    <div
      className='editor'
      contentEditable={!preview}
      onInput={handleChange}
      suppressContentEditableWarning={true}
      value={content}
    >
      {content === '' ? <div></div> : <div></div>}

      <style jsx global>
        {`
          .editor{
            min-height: calc(var(--containerWidth) * 0.5625);
            max-height: ${preview
              ? `calc(var(--containerWidth) * 1.333333)`
              : `calc(var(--containerWidth) * 0.5625)`};
            background-color: gold;
            border: ${overflow && '5px solid red'};
            overflow: auto;
            padding: 0.5rem;
            font-size: .75rem;
          }
        `}
      </style>
    </div>
  );
}

export default Editor;
