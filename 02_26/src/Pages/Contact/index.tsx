import Heading from '../../Components/Heading';
import React, { useState } from "react";
import Error from "../../Components/Error";
import { createRoot } from 'react-dom/client';




function Contact() {

    const MessageSent = () => {
        return (React.createElement('h2', {}, 'Message sent'));
    }
    

    function validateForm() {
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        if (email.length == 0) {
            setEmailError('Email is required');
        }
        else {
            setEmailError('');
        }

        if (!emailRegex.test(email)) {
            setEmailError('Email is not valid');
        }
        else {
            setEmailError('');
        }

        if (!accept) {
            setAcceptError('Acceptance is required');
        }
        else {
            setAcceptError('');
        }

        if (message.length < 20) {
            setMessageError('Message is required to be 20 chars long');
        }
        else {
            setMessageError('');
        }

        if (email.length > 0 && emailRegex.test(email) && accept && message.length >= 20) {
            const form = document.getElementById('form');
            const root = createRoot(form!);
            root.render(<MessageSent />);

        }


    }


    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState('');

    const [accept, setAccept] = useState(false);
    const [acceptError, setAcceptError] = useState('');

    const [message, setMessage] = useState(''); 
    const [messageError, setMessageError] = useState('');

    return (
        <div>
            <Heading title="Contact" />
            
            <div id="form">
                <label htmlFor="email">Email: </label>
                <input type="email" name="email" id="email" value={email} onChange={event=>{setEmail(event?.target.value)}} />
                <Error message={emailError}></Error>
                <br />
                <label htmlFor="topic">Topic: </label>
                <select id="topic" name="topic">
                    <option value="1">Option 1</option>
                    <option value="2">Option 2</option>
                    <option value="3">Option 3</option>
                    <option value="4">Option 4</option>
                    <option value="5">Option 5</option>
                </select>
                <br />
                <label htmlFor="accept">I agree to process my personal data: </label>
                <input type="checkbox" name="accept" id="accept" checked={accept} onChange={event=>{setAccept(event.target.checked)}} />
                <Error message={acceptError}></Error>
                <br />
                <label htmlFor="message">Message: </label>
                <textarea name="message" id="message" value={message} onChange={event=>{setMessage(event.target.value)}}></textarea>
                <Error message={messageError}></Error>
                <br />
                <button onClick={validateForm}>Send</button>

            
            </div>
      </div>
    )
  }
  
  export default Contact;