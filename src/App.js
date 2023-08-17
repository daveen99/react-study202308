import React, { useState } from 'react';
import CourseInput from './components/CourseGoals/CourseInput';
import CourseList from './components/CourseGoals/CourseList';
import Button from './components/UI/Button/Button';
import './App.css';

const App = () => {
  return (
    <div>
      <section id="goal-form">
        <CourseInput />
      </section>
      <section id="goals">
        <CourseList />
      </section>
      <Button type="submit">목표 추가하기</Button>
    </div>
  );
};

export default App;
