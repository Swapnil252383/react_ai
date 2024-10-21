import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Courses from './components/Courses';
import Login from './components/Login';
import SignUp from './components/SignUp';
import ContactUs from './components/ContactUs';
import './App.css';

function App() {
    return (
        <Router>
            <Navbar />
            <div className="container">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/courses" element={<Courses />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<SignUp />} />
                    <Route path="/contact" element={<ContactUs />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
