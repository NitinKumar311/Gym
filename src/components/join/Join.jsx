import { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./join.css";

const Join = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_44eyl77", "template_i5eq7bb", form.current, {
        publicKey: "9bPVwHZqw0IzLCItO",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  // const sendEmail = (e) =>{
  //   e.preventDefault();
  //   emailjs.sendForm('Your_Service_ID', 'Your_Templates_ID', form.current,'Your_User_ID')
  //   .then((result)=>{
  //     console.log(result.text);
  //   }, (error)=>{
  //     console.log(error.text);
  //   });
  // };

  return (
    <div className="Join" id="join-us">
      <div className="left-j">
        <hr />
        <div>
          <span className="stroke-text">READY TO</span>
          <span>LEVEL UP</span>
        </div>
        <div>
          <span>YOUR BODY</span>
          <span className="stroke-text">WITH US</span>
        </div>
      </div>
      <div className="right-j">
        <form ref={form} className="email-container" onSubmit={sendEmail}>
          <input
            type="email"
            name="from_name"
            placeholder="Enter Your Email Address"
          />
          <button className="btn btn-j">Join Now</button>
        </form>
      </div>
    </div>
  );
};

export default Join;
