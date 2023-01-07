import React from 'react';
import './VerticalMenu.css';

function VerticalMenu({ children }) {
  return (
    <div className='VerticalMenu'>
      <div>
        {children}
      </div>
      <div className='VerticalMenu-line'></div>
    </div>
  )
}

export { VerticalMenu }