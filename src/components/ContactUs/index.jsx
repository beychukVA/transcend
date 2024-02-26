import React, { useRef, useState } from "react";
import Button from "../UI/Button";
import Input from "../UI/Input";
import TextArea from "../UI/TextArea";
import styles from "./styles.module.scss";
import emailjs from "@emailjs/browser";
import Error from "../Error/Error";

const ContactUs = () => {
  const [name, setName] = useState();
  const [phone, setPhone] = useState();
  const [email, setEmail] = useState();
  const [company, setCompany] = useState();
  const [message, setMessage] = useState();
  const [error, setError] = useState(null);
  const form = useRef();

  const canSubmit = !name || !phone || !email || !company || !message;

  const sendEmail = (e) => {
    e.preventDefault();
    setError(null);

    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_PUBLIC_KEY
      )
      .then((result) => {
        e.target.reset();
      })
      .catch((error) => setError(error));
  };

  return (
    <section id="contact-us" className={styles.contactUs}>
      <div className={styles.content}>
        <h2 className={styles.title}>Get in touch with us</h2>
        <form ref={form} className={styles.form} onSubmit={sendEmail}>
          <div className={styles.inputs}>
            <Input
              onChange={setName}
              name="user_name"
              classNameContainer={styles.inputContainer}
              className={styles.input}
              placeholder="Name"
            />
            <Input
              onChange={setPhone}
              name="user_phone"
              classNameContainer={styles.inputContainer}
              className={styles.input}
              placeholder="Phone"
            />
            <Input
              onChange={setEmail}
              name="user_email"
              classNameContainer={styles.inputContainer}
              className={styles.input}
              placeholder="Email"
            />
            <Input
              onChange={setCompany}
              name="user_company"
              classNameContainer={styles.inputContainer}
              className={styles.input}
              placeholder="Company"
            />
          </div>
          <TextArea
            onChange={setMessage}
            placeholder="Message"
            name="message"
          />
          <div className={styles.buttonContainer}>
            {error && <Error message={error.text} />}
            <Button
              disabled={canSubmit}
              className={styles.button}
              type="submit"
              text="Submit Message"
            />
          </div>
        </form>
      </div>
      <div className={styles.img}></div>
    </section>
  );
};

export default ContactUs;
