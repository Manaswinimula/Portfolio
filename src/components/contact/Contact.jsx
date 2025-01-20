import './contact.css';

import React, { useRef, useState } from 'react';

import { MdOutlineEmail } from 'react-icons/md';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [message, setMessage] = useState(false);
  const formRef = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true);
    emailjs
      .sendForm(
        'service_msek4w1',
        'template_3xn3p5n',
        formRef.current,
        'P9j41D1nnDoTa1OK7'
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
  };
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h5>
        I do receive your messages and will respond asap if the valid email is
        provided :)
      </h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>manaswinimula10@gmail.com</h5>
            <a href="mailto:manaswinimula10@gmail.com">Send a message</a>
          </article>
        </div>
        <form ref={formRef} onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Your Full Name"
            name="user_name"
            required
          />
          <input
            type="text"
            placeholder="Your Email"
            name="user_email"
            required
          />
          <textarea
            placeholder="Your message"
            rows="7"
            name="message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
          {message && <span>Thanks, I'll reply ASAP :)</span>}
        </form>
      </div>
    </section>
  );
};

export default Contact;


// import './contact.css';

// import React, { useRef, useState } from 'react';

// import { MdOutlineEmail } from 'react-icons/md';
// import emailjs from '@emailjs/browser';

// const Contact = () => {
//   const [message, setMessage] = useState(null); // To handle both success and error messages
//   const [isSubmitting, setIsSubmitting] = useState(false); // To disable button during submission
//   const formRef = useRef();

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setIsSubmitting(true); // Disable the button while submitting

//     emailjs
//       .sendForm(
//         'service_msek4w1', // Replace with your Email.js service ID
//         'template_3xn3p5n', // Replace with your Email.js template ID
//         formRef.current,
//         'P9j41D1nnDoTa1OK7' // Replace with your Email.js public key
//       )
//       .then(
//         (result) => {
//           console.log('Email sent:', result.text);
//           setMessage('Your message has been sent successfully. Thank you!');
//           setIsSubmitting(false); // Re-enable the button
//         },
//         (error) => {
//           console.error('Email send error:', error.text);
//           setMessage('Failed to send your message. Please try again later.');
//           setIsSubmitting(false); // Re-enable the button
//         }
//       );

//     e.target.reset();
//   };

//   return (
//     <section id="contact">
//       <h5>Get In Touch</h5>
//       <h5>
//         I do receive your messages and will respond ASAP if a valid email is
//         provided :)
//       </h5>
//       <h2>Contact Me</h2>
//       <div className="container contact__container">
//         <div className="contact__options">
//           <article className="contact__option">
//             <MdOutlineEmail className="contact__option-icon" />
//             <h4>Email</h4>
//             <h5>manaswinimula10@gmail.com</h5>
//             <a href="mailto:manaswinimula10@gmail.com">Send a message</a>
//           </article>
//         </div>
//         <form ref={formRef} onSubmit={handleSubmit}>
//           <input
//             type="text"
//             placeholder="Your Full Name"
//             name="user_name"
//             required
//           />
//           <input
//             type="email"
//             placeholder="Your Email"
//             name="user_email"
//             required
//           />
//           <textarea
//             placeholder="Your Message"
//             rows="7"
//             name="message"
//             required
//           ></textarea>
//           <button
//             type="submit"
//             className="btn btn-primary"
//             disabled={isSubmitting} // Disable button while submitting
//           >
//             {isSubmitting ? 'Sending...' : 'Send Message'}
//           </button>
//           {message && <span>{message}</span>}
//         </form>
//       </div>
//     </section>
//   );
// };

// export default Contact;
