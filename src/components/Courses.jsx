import React from 'react';
import './Courses.css';

const Courses = () => {
    return (
        <div className="courses">
            <h2>Available Courses</h2>
            <ul>
                <li>React Basics</li>
                <li>Advanced React</li>
                <li>React with Redux</li>
                <li>React Hooks</li>
            </ul>
        </div>
    );
};

export default Courses;
