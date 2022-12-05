import React, { useState } from "react";
import styled from "styled-components";
import SignIn from "./SignIn";
import { Link, useNavigate } from "react-router-dom";

function SignUp() {
  const [valueEmail, setValueEmail] = useState("");
  const [valuePassword, setValuePassword] = useState("");
  const navigate = useNavigate();

  function handleClick() {
    if (!valueEmail.trim()) return null;
    if (!valuePassword.trim()) return null;
    fetch("https://trelloclone-e6780-default-rtdb.firebaseio.com/Users.json", {
      method: "POST",
      headers: { "Content-Type": "application.json" },
      body: JSON.stringify({
        Email: valueEmail,
        Password: valuePassword,
      }),
    });

    setValueEmail("");
    setValuePassword("");
    navigate("/Home");
    
  }
  return (
    <StyledContainer>
      <img src="data:image/png;base64,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" />
      <H1>Зарегистрировать аккаунт</H1>
      <Input
        placeholder="Укажите адрес электронной почты"
        value={valueEmail}
        onChange={(e) => setValueEmail(e.target.value)}
      />
      <Input
      placeholder="новый пароль"
        value={valuePassword}
        onChange={(e) => setValuePassword(e.target.value)}
      />
      <Button onClick={handleClick}>Продолжить</Button>
      <Link to="/" element={<SignIn />}>
        SignIn
      </Link>
    </StyledContainer>
  );
}
const Button=styled.button`
    color: hsl(0,0%,55%);
    margin: 0 auto;
    width: 300px;
    height: 30px;
    font-weight: 700;
    font-family: '-apple-system',BlinkMacSystemFont,'Segoe UI',Roboto,Oxygen,Ubuntu,'Fira Sans','Droid Sans','Helvetica Neue',sans-serif;
`
const Input = styled.input`
width: 300px;
height: 30px;
border-radius: 3px;
border:3px solid  #dfe1e6; ;
background-color: inherit;
outline-color:hsl(202,92%,85%) ;
`;
const H1=styled.h1`
    text-align: center;
    color: #5e6c84;
    font-size: 20px;
    font-family: '-apple-system',BlinkMacSystemFont,'Segoe UI',Roboto,Oxygen,Ubuntu,'Fira Sans','Droid Sans','Helvetica Neue',sans-serif;
`
const StyledContainer = styled.div`
  width: 500px;
  height: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  margin: 0 auto;
  background-color: #ffffff;
    border-radius: 3px;
    padding: 25px 40px;
    box-shadow: rgb(0 0 0 / 10%) 0 0 10px;
`;
export default SignUp;
