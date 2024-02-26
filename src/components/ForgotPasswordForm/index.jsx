import React, { useState } from "react";
import styles from "./styles.module.scss";
import { NavLink, useNavigate } from "react-router-dom";
import Button from "../UI/Button";
import Input from "../UI/Input";
import EmailIcon from "../Icons/Email";
import useAuth from "../../services/useAuth";
import Error from "../Error/Error";

const ForgotPasswordForm = () => {
  const [email, setEmail] = useState();
  const navigate = useNavigate();
  const { resetPassword, error, setError } = useAuth();

  const canSubmit = !email;

  const reset = async () => {
    setError(null);
    const res = await resetPassword(email);
    if (res) {
      navigate("/");
    }
  };

  return (
    <section className={styles.forgotPassword}>
      <div className={styles.content}>
        <h2 className={styles.title}>Forgot password?</h2>
        <span className={styles.description}>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint.
        </span>
        <div className={styles.inputs}>
          <Input
            type="text"
            placeholder="Email"
            leftIcon={<EmailIcon />}
            onChange={setEmail}
          />
        </div>
        {error && <Error message={error.message} />}
        <div className={styles.controls}>
          <Button
            className={styles.button}
            type="button"
            text="Reset Password"
            disabled={canSubmit}
            onClick={reset}
          />
        </div>
        <span className={styles.registerDescription}>
          Don’t have an account?
          <NavLink className={styles.linkRegister} to="/register">
            Register
          </NavLink>
        </span>
      </div>
      <div className={styles.img}></div>
    </section>
  );
};

export default ForgotPasswordForm;
