import React from 'react'

function Avatar() {
  return (
    <div className='avatar'>
        <img src="avatar.jpg" alt="" />



        <style jsx>
            {`
            
            .avatar {
                width: 2.5rem;
                margin: 0 .5rem;
                
            }
            img {
                width: 100%;
                border-radius: 50%;
                border: 3px solid gold;
            }
            `}
        </style>
    </div>
  )
}

export default  Avatar