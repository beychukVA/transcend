import React, { useState } from "react";
import styles from "./styles.module.scss";
import Button from "../UI/Button";
import Input from "../UI/Input";
import EmailIcon from "../Icons/Email";
import LockIcon from "../Icons/Lock";
import EyeIcon from "../Icons/Eye";
import Error from "../Error/Error";
import useAuth from "../../services/useAuth";

const RegisterForm = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  const { signUp, error, setError } = useAuth();

  const canSubmit = !email || !password || !confirmPassword;

  const register = () => {
    if (password !== confirmPassword) {
      setError({ code: 5, message: "passwords must match" });
      return;
    }
    setError(null);
    signUp(email, password);
  };

  return (
    <section className={styles.registration}>
      <div className={styles.content}>
        <h2 className={styles.title}>Registration</h2>
        <div className={styles.inputs}>
          <Input
            type="text"
            placeholder="Email"
            leftIcon={<EmailIcon />}
            onChange={setEmail}
          />
          <Input
            type="password"
            placeholder="Password"
            leftIcon={<LockIcon />}
            rightIcon={<EyeIcon />}
            onChange={setPassword}
          />
          <Input
            type="password"
            placeholder="Confirm Password"
            leftIcon={<LockIcon />}
            rightIcon={<EyeIcon />}
            onChange={setConfirmPassword}
          />
        </div>
        {error && <Error message={error.message} />}
        <div className={styles.controls}>
          <Button
            className={styles.button}
            type="button"
            text="Submit Registration"
            disabled={canSubmit}
            onClick={register}
          />
        </div>
      </div>
      <div className={styles.img}></div>
    </section>
  );
};

export default RegisterForm;
