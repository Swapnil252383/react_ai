import React from 'react';
import './ContactUs.css';

const ContactUs = () => {
    return (
        <div className="contact-us">
            <h2>Contact Us</h2>
            <form>
                <input type="text" placeholder="Name" required />
                <input type="email" placeholder="Email" required />
                <textarea placeholder="Message" required></textarea>
                <button type="submit">Send</button>
            </form>
        </div>
    );
};

export default ContactUs;
