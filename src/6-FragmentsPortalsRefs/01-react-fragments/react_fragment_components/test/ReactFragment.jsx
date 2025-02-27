import React from 'react'
import SonFragment from './SonFragment'

const ReactFragment = () => {
  return (
      <React.Fragment>
          <h1 style= {{ textAlign: 'center', fontSize: 'larger', color:'brown',
                 backgroundColor: 'yellow', marginLeft: '25%', marginRight: '25%',
              borderRadius: '20px', padding: '80px', fontWeight: 'bolder'
          }}> Introduction React Fragment
                 </h1>
          <SonFragment/>
      </React.Fragment>
  )
}

export default ReactFragment