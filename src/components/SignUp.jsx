import React from 'react';
import './SignUp.css';

const SignUp = () => {
    return (
        <div className="signup">
            <h2>Sign Up</h2>
            <form>
                <input type="text" placeholder="Name" required />
                <input type="email" placeholder="Email" required />
                <input type="password" placeholder="Password" required />
                <button type="submit">Sign Up</button>
            </form>
        </div>
    );
};

export default SignUp;
