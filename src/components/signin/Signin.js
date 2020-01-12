import React, { useState } from "react";
import { Form, BtnLogin } from "../styles/styles";
import { Link } from "react-router-dom";

export const SignIn = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
    name: ""
  });

  return (
    <Form id="login">
      <div className="form">
        <form id="form-login">
          <h1 style={{ textAlign: "center" }}>Welcome</h1>
          <div className="input-container">
            <input
              type="email"
              placeholder="Email"
              value={user.email}
              onChange={e => setUser({ ...user, email: e.target.value })}
            />
            <input
              type="text"
              placeholder="Nome"
              value={user.name}
              onChange={e => setUser({ ...user, name: e.target.value })}
            />
            <input
              type="password"
              placeholder="Password"
              value={user.password}
              onChange={e => setUser({ ...user, password: e.target.value })}
            />
            <BtnLogin className="btn">Criar</BtnLogin>
          </div>
          <span className="link">
            <Link to="/login">Login</Link>
          </span>
        </form>
      </div>
    </Form>
  );
};
