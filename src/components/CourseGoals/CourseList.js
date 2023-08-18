import React from 'react';
// import './CourseList.css';
import CourceItem from './CourceItem';

import styled from 'styled-components';

const CourseUl = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

const CourseList = ({ items, onDelete }) => {
  return (
    <CourseUl>
      {items.map((item) => {
        return (
          <CourceItem
            key={item.id}
            item={item}
            onDelete={onDelete}
          />
        );
      })}
    </CourseUl>
  );
};

export default CourseList;
