import React from 'react'
import './Contact.css'
import mail_icon from '../../assets/mail_icon.svg'
import call_icon from '../../assets/call_icon.svg'
import location_icon from '../../assets/location_icon.svg'

const Contact = () => {
    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "4c0b8eb7-df64-4aa1-8883-23b7ad391370");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
          console.log("Success", res);
          alert(res.message);
        }
      };
  return (
    <div id='contact' className='contact'>
        <div className="contact-title">
            <h1>Reach Out</h1>
        </div>
        <div className="contact-section">
            <div className="contact-left">
                <h1>Let's Talk</h1>
                <p>I'm currently avaliable to take on new projects, so feel free to send me a message about anything that you want me to work on. You can contact anytime.</p>
            <div className="contact-details">
                <div className="contact-detail">
                    <img src={mail_icon} alt="" /><p>gokulakrishna161@gmail.com</p>
                </div>
                <div className="contact-detail">
                    <img src={call_icon} alt="" /><p>+91 818-898-866-71</p>
                </div>
                <div className="contact-detail">
                    <img src={location_icon} alt="" /><p>Chennai,Tamilnadu,India</p>
                </div>
                </div>
            </div>
            <form onSubmit={onSubmit} className="contact-right">
                <label htmlFor='name'>Your Name</label>
                <input type="text" placeholder='Enter your name'name='name' autoComplete='given-name'id='name'/>
                <label htmlFor='email'>Enter your email</label>
                <input type="email" placeholder='Enter your email' name='email' autoComplete='off'id='email'/>
                <label htmlFor="text">Write your message here</label>
                <textarea name="message" placeholder='Enter yor message' rows="8" id='text'></textarea>
                <button className="contact-submit" type='submit' onSubmit={onSubmit}>Submit now</button>
            </form>
        </div>
      
    </div>
  )
}

export default Contact
