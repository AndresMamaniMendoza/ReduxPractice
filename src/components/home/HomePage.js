import React from 'react';
import { Link } from "react-router-dom";
import Course from "../Course";

function HomePage () {
  return (
    <div className="jumbotron">
      <h1>Administration</h1>
      <p>Redux web app.</p>
      <Link to="about" className="btn btn-primary btn-lg">
        Learn more
      </Link>
      <Course/>
    </div>
  )
}

export default HomePage;
