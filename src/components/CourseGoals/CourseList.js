import React from 'react';
import './CourseList.css';
import CourceItem from './CourceItem';

const CourseList = ({ items, onDelete }) => {
  return (
    <ul className="goal-list">
      {items.map((item) => {
        return (
          <CourceItem
            key={item.id}
            item={item}
            onDelete={onDelete}
          />
        );
      })}
    </ul>
  );
};

export default CourseList;
