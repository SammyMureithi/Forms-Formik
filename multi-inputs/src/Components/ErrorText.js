import React from 'react'

function ErrorText(props) {
  return (
      <div className='error'>
          {props.children}
    </div>
  )
}

export default ErrorText