import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { Redirect, useHistory } from "react-router";
import { getAPIInstance } from "../../apihandler/APICall";
import Buttons from "../common/Button";
import { notifier } from "../common/Notifier";

function LoginForm() {
  const [loginData, setLogindata] = useState({
    user: "",
    pwd: "",
  });
  const [isError, setIsError] = useState(false);
  const history = useHistory();
  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const apiCall = new getAPIInstance();
      const response = await apiCall.post("login", loginData);
      localStorage.setItem("loggedInUser", response.token);
      setIsError(false);
      history.push(`${process.env.PUBLIC_URL}/`);
    } catch (error) {
      setIsError(true);
    }
  };
  return (
    <Form onSubmit={onSubmit} method="POST" className="d-flex flex-column">
      {isError && (
        <span className="text-center text-danger">Invalid Credentials</span>
      )}
      <Form.Group>
        <Form.Label>UserId</Form.Label>
        <Form.Control
          type="text"
          name="user"
          placeholder="Enter UserId"
          value={loginData.user}
          onChange={(e) => {
            setLogindata((prev) => {
              return { ...prev, [e.target.name]: e.target.value };
            });
          }}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Enter Password"
          value={loginData.pwd}
          name="pwd"
          onChange={(e) => {
            setLogindata((prev) => {
              return { ...prev, [e.target.name]: e.target.value };
            });
          }}
        />
      </Form.Group>
      <Buttons variant="primary" type="submit">
        Login
      </Buttons>
    </Form>
  );
}

export default LoginForm;
