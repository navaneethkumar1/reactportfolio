import "../Css/Contact.css";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Loader from "./Loader";
function Contact() {
  const form = useRef();

  // useRef hook is used to create a reference (form) to the form element.
  const [Loading,setLoading]=useState(false);
  const sendEmail = (e) => {
    e.preventDefault();
setLoading(true);
    emailjs.sendForm(
        "service_1fsdbpb",
        "template_1gt0hhq",
        form.current,
        "FW73KjWMa0m8s6t3_"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("email sent successfully");
          setLoading(false);
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
  
            />

            <label>Email:</label>
            <input type="text" name="usermail" placeholder="Enter Your email" />

            <label>Message:</label>
            <textarea row="20" column="30" name="usermessage" placeholder="enter your message" />
            <div className="btn">
              {Loading?
  "":
              <button>Send Me</button>
}
            </div>
            
            ?{
Loading?
            <Loader/> : null}


          </form>
        </div>
      </div>
    </>
  );
}

export default Contact;
