import React, { useState } from "react";
import styles from "./styles.module.scss";
import { NavLink } from "react-router-dom";
import Button from "../UI/Button";
import Input from "../UI/Input";
import EmailIcon from "../Icons/Email";
import LockIcon from "../Icons/Lock";
import EyeIcon from "../Icons/Eye";
import useAuth from "../../services/useAuth";
import Error from "../Error/Error";

const LoginForm = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const { signIn, setError, error } = useAuth();

  const canSubmit = !email || !password;

  const login = () => {
    setError(null);
    signIn(email, password);
  };

  return (
    <section className={styles.login}>
      <div className={styles.content}>
        <h2 className={styles.title}>Login</h2>
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
        </div>
        {error && <Error message={error.message} />}
        <div className={styles.controls}>
          <NavLink className={styles.link} to="/forgot-password">
            Forgot password?
          </NavLink>
          <Button
            className={styles.button}
            type="button"
            text="Login"
            disabled={canSubmit}
            onClick={login}
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

export default LoginForm;
