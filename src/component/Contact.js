import "../Css/Contact.css";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_1fsdbpb",
        "template_1gt0hhq",
        form.current,
        "FW73KjWMa0m8s6t3_"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("email sent successfully");
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <>
      <div className="contact">
        <div className="table_container">
          <h1>Contact Me</h1>

          <form ref={form} onSubmit={sendEmail}>
            <label>Name:</label>
            <input
              type="text"
              name="username"
              id="name"
              placeholder="Enter Your Name"
              required
            />

            <label>Email:</label>
            <input type="text" name="usermail" placeholder="Enter Your email" required/>

            <label>Message:</label>
            <textarea row="20" column="30" name="usermessage" placeholder="enter your message" required/>
            <div className="btn">
              <button>Send Me</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Contact;
