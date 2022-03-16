import React from 'react'
import useStore from '../store'
function ProgressBar({progress}) {
  const {overflow, fontSize}= useStore()
  return (
    <div className='progress-bar'>

    <div className="progress-status">
{}
{overflow && fontSize <= 0.75? 'spazio esaurito, raggiunto il carattere più piccolo possibile' : (progress*100).toFixed(0) + '%  '}
    </div>
    <style jsx>
        {`
        .progress-bar {
            height: 30px;
            background-color: green;
            width: 100%;
          }
          .progress-status {
            background-color: red;
            height: 100%;
            padding: 0.2rem;
            display: ${progress < 0 ? 'none' : 'block'};
            width: ${progress > 1 ? '100%' : progress * 100 + '%'};
            color: white;
            font-size: 0.8rem;
          }
        `}
    </style>
  </div>
  )
}

export default ProgressBar