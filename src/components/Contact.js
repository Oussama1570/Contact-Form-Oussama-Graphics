import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "../Styles/StylesContact.css"


// npm i @emailjs/browser

export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_nxtmqax', 'template_g015o7k', form.current, {
        publicKey: '_H4HpEDqLEbHtvf1E',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          e.target.reset();
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
  return (
    
      <form ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="from_name" />
        <label>Email</label>
        <input type="email" name="reply_to" />
        <label>Message</label>
        <textarea name="message" />
        <input type="submit" value="Send" />
      </form>
    
  );
};

export default Contact;

