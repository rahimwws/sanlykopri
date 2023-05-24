import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

export const Sender = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_avszrso",
        "template_vsnvmv5",
        form.current,
        "8JN3xlKsgBltKN8-W"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <input type="text" name="user_name" placeholder="Имя*" />
      <input type="email" name="user_email" placeholder="Email*"/>
      <input type="text" name="message" placeholder="Расскажите о проекте*"/>
      <input type="submit" value="Send" className="button" />
    </form>
  );
};
