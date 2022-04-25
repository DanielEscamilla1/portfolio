import React, { useRef, useState } from "react";
import "./Contact.css";
import Phone from "../../img/Phone.png";
import emailjs from "@emailjs/browser";
import { useContext } from "react";
import { ThemeContext } from "../../context";

const Contact = () => {
  const formRef = useRef();
  const [done, setDone] = useState(false);
  const theme = useContext(ThemeContext)
  const darkMode = theme.state.darkMode

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_yy0e1l8",
        "template_gsvi04n",
        formRef.current,
        "IPGPIN5fXgd5w-uD2"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true)
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="c">
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">Let's discuss your project</h1>
          <div className="c-info">
            <div className="c-info-item">
              <img src={Phone} alt="" className="c-icon" />
              +1 123 456 7890
            </div>
            <div className="c-info-item">
              <img src={Phone} alt="" className="c-icon" />
              contact@lama.com
            </div>
            <div className="c-info-item">
              <img src={Phone} alt="" className="c-icon" />
              123 Unity st, Thomasville, North Carolina
            </div>
          </div>
        </div>
        <div className="c-right">
          <p className="c-desc">
            <b>What's your story?</b>Get in touch. Always freelancing if the
            right project comes along.
          </p>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="First Name" name="user_name" />
            <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Last Name" name="user_subject" />
            <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Email" name="user_email" />
            <textarea style={{backgroundColor: darkMode && "#333"}} name="message" rows="5" placeholder="Message"></textarea>
            <button>Submit</button>
            {done && " Thank you..."}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
