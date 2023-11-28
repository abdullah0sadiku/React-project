import React ,  { useRef }  from "react";
import emailjs from '@emailjs/browser';

const Contact = () => {
  
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    
    const name = form.current.user_name.value;
    const email = form.current.user_email.value;
    const message = form.current.message.value;
    
    if (!name || !email || !message) {
      alert('Please fill out all required fields');
      return
    }
  
    
      emailjs.sendForm('service_6x0yu4w', 'template_vod78dv', form.current, 'YUkPlRX_Y-0ZdP2oT')
        .then((result) => {
            console.log(result.text);
            e.target.reset();
        }, (error) => {
            console.log(error.text);
        });
    
      alert('Email has been sent !')
    };

  return (
    <div className="contact-page-wrapper" id="contact">
      <h1 className="primary-heading">Contact</h1>
      <div className="contact-form-container">
          
          <form className="contt" ref={form} onSubmit={sendEmail}>
                  <label>Name</label>
                  <input type="text" name="user_name" />
                  <label>Email</label>
                  <input type="email" name="user_email" />
                
                      <label>Message</label>
                      <textarea name="message" />
                      
                      <br/>
                      
                      <input className="SS" type="submit" value="Send" />
               
          </form>

      
      </div>
     
    </div>
  );
};

export default Contact;