import { useForm, ValidationError } from '@formspree/react';
import './ContactForm.css';

export default function ContactForm() {
  const [state, handleSubmit] = useForm("xbjnkqel");
  if (state.succeeded) {
      return <p>We'll chat soon!</p>;
  }
  return (
    <div id="contact" className="container">
      <div className="contact-title">
        <p>Let's Connect</p>
        <h1>Contact Me</h1>
      </div>
      <div className="contact-form-container">
        <form onSubmit={handleSubmit} className='contact-form'>
          <label htmlFor="full-name">Full Name</label>
          <input 
            type="text" 
            name="full-name" 
            id="full-name" 
            placeholder="First and Last" 
            required
          />

          <ValidationError 
            prefix="Full Name" 
            field="full-name"
            errors={state.errors}
          />

          <label htmlFor="email">Email Address</label>
          <input
            id="email"
            type="email" 
            name="email"
            placeholder="youremail@email.com" 
            required
          />

          <ValidationError 
            prefix="Email" 
            field="email"
            errors={state.errors}
          />

          <label htmlFor="message">Message</label>
          <textarea 
            rows="5" 
            name="message" 
            id="message" 
            placeholder="Aenean lacinia bibendum nulla sed consectetur. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Donec ullamcorper nulla non metus auctor fringilla nullam quis risus." 
            required
          />

          <ValidationError 
            prefix="Message" 
            field="message"
            errors={state.errors}
          />
          <button type="submit" disabled={state.submitting}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
