import React from 'react'
import { getContrastYIQ } from '../Helpers';

function Copied({color}) {
  return (
    <div className='copied' style={{ '--bg-color': `#${color}`, '--text-color': `${getContrastYIQ(color)}` }}>
      Copied #{color} to Clipboard
    </div>
  )
}

export default Copied
