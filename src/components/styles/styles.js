import styled from "styled-components";

const Container = styled.div`
  max-width: 1200px;
  display: block;
  width: 100%;
`;

const Form = styled.div`
  background-image: url(https://colorlib.com/etc/lf/Login_v5/images/bg-01.jpg);
  width: 100%;
  min-height: 100vh;
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 15px;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`;

const BtnLogin = styled.button`
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 20px;
  width: 100%;
  height: 45px;
  background-color: #333;
  border-radius: 10px;
  font-size: 16px;
  color: #fff;
  line-height: 1.2;
  -webkit-transition: all 0.4s;
  -o-transition: all 0.4s;
  -moz-transition: all 0.4s;
  transition: all 0.4s;
  position: relative;
  z-index: 1;
  cursor: pointer;
  border: none;
  outline: none;
`;

export { Container, Form, BtnLogin };
