import React from 'react'

function ProgressBar({progress, overflow}) {
  return (
    <div className='progress-bar'>

    <div className="progress-status">
{}
{overflow ? 'spazio esaurito' : (progress*100).toFixed(0) + '%  '}
    </div>
    <style jsx>
        {`
        .progress-bar {
            height: 30px;
            background-color: rgb(7, 181, 91);
            width: 100%;
          }
          .progress-status {
            background-color: red;
            height: 100%;
            padding: 0.2rem;
            display: ${progress < 0 ? 'none' : 'block'};
            width: ${progress > 1 ? '100%' : progress * 100 + '%'};
            color: white;
            font-size: 0.3;
          }
        `}
    </style>
  </div>
  )
}

export default ProgressBar