import React from 'react';
import './CourceItem.css';

const CourceItem = ({item, onDelete}) => {
  return (
    <li className='goal-item' onClick={() => onDelete(item.id)}>
        {item.text}
    </li>
  )
}

export default CourceItem