import React from 'react'
import './CourseInput.css';

const CourseInput = () => {
  return (
    <form>
      <div className="form-control">
        <label>나의 목표</label>
        <input type="text"/>
      </div>
      <button type="submit">목표 추가하기</button>
    </form>
  )
}

export default CourseInput