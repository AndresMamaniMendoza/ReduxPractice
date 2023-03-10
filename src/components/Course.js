import React from 'react';
import { useState } from "react";
import { connect, useDispatch } from 'react-redux';
import * as courseActions from '../redux/actions/courseActions';
import PropTypes from 'prop-types';

function Course({ courses }) {
  const [course, setCourse] = useState({ title: "" });


  const dispatch = useDispatch();
  function handleChange(e) {
    const newCourse = { ...course, title: e.target.value };
    setCourse(newCourse);
  }

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(courseActions.createCourse(course));
  }

  function handleDelete(courseTitle) {
    dispatch(courseActions.deleteCourse(courseTitle));
  }



  return (
    <>
      <form onSubmit={handleSubmit}>
        <h2>Courses</h2>
        <h3>Add course</h3>
        <input
          type="text"
          onChange={handleChange}
          value={course.title}
        />
        <input type="submit" value="Save" />
        {courses.courses.map(course => (
          <div key={course.title}>
            {course.title}
            <button onClick={()=>handleDelete(course.title)}>x</button>
          </div>
        ))}
      </form>
    </>
  )
}

Course.propTypes = {
  courses: PropTypes.array
}

console.log(`Step4: Connecting components to store...`);
function mapStateToProps(state, ownProps) {
  return {
    courses: state
  }
}

export default connect(mapStateToProps)(Course);
