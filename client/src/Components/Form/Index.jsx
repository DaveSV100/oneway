import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import styled from "styled-components";

import './App.css'

const Email = () => {
    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_ktbx8li', 'template_zf3ixwr', form.current, {
        publicKey: 'ZUpCSmwiCyTvl-B8J',
      })
      .then(
        () => {
          console.log('EMAIL SENT!');
          e.target.reset();
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return <StyledContactForm>
    <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>
  </StyledContactForm>
}
export default Email;

// Styles
const StyledContactForm = styled.div`
 

  form {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    max-width: 500px;
    min-width: 300px
    font-size: 1rem;

    input {
      width: 95%;
      height: 35px;
      padding: 7px;
      outline: none;
      border-radius: 5px;
      border: 1px solid rgb(220, 220, 220);

      &:focus {
        border: 2px solid rgba(0, 206, 158, 1);
      }
    }

    textarea {
      max-width: 95%;
      min-width: 95%;
      width: 95%;
      max-height: 100px;
      min-height: 100px;
      padding: 7px;
      outline: none;
      border-radius: 5px;
      border: 1px solid rgb(220, 220, 220);

      &:focus {
        border: 2px solid rgba(0, 206, 158, 1);
      }
    }

    label {
      margin-top: 1rem;
    }

    input[type="submit"] {
      margin-top: 2rem;
      cursor: pointer;
      background: rgb(249, 105, 14);
      color: white;
      border: none;
    }
  }
`;
