import React, { useState } from "react";
import { Form, BtnLogin } from "../styles/styles";
import "./login.css";
import { signinUser } from "../../graphql/mutations/auth";
import { useMutation } from "@apollo/react-hooks";
import { Link } from "react-router-dom";
import { useToasts } from "react-toast-notifications";
import Cookies from "js-cookie";

export const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: ""
  });

  const { addToast } = useToasts();

  const [login, { loading }] = useMutation(signinUser);

  const handleSubmit = e => {
    e.preventDefault();
    login({
      variables: {
        ...user
      }
    })
      .then(res => {
        if (res.data.signinUser.token) {
          Cookies.set("user", JSON.stringify(res.data.signinUser));
          const cookie = new Promise((resolve, reject) => {
            if (Cookies.get("user")) {
              resolve();
            }
          });

          cookie.then(() => {
            window.location.href = "/dashboard";
          });
        }
      })
      .catch(error => {
        addToast("Não foi possível fazer o login, tente novamente", {
          appearance: "error"
        });
      });
  };

  return (
    <Form id="login">
      <div className="form">
        <form id="form-login" onSubmit={handleSubmit}>
          <h1 style={{ textAlign: "center" }}>Welcome</h1>
          <div className="input-container">
            <input
              type="email"
              placeholder="Email"
              value={user.email}
              onChange={e =>
                setUser({ ...user, email: e.target.value.toLocaleLowerCase() })
              }
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={user.password}
              onChange={e => setUser({ ...user, password: e.target.value })}
              required
            />
            <BtnLogin disabled={loading} className="btn">
              {loading ? "..." : "Entrar"}
            </BtnLogin>
          </div>
          <span className="link">
            <Link to="/signin">Sign in</Link>
          </span>
        </form>
      </div>
    </Form>
  );
};
