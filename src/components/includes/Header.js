import React from 'react';
import styled from "styled-components";
import "../../App.css"

export default function Header() {
  return (
    <Headerbox>
        <Logo src={require("../../images/logo.svg").default}/>
        <Login>Login</Login>
    </Headerbox>
  )
}

const Headerbox = styled.header`
  position:absolute;
  bottom: 570px;
  padding: 11px 25px;
  display: flex;
`;
const Logo = styled.img`
  margin-right: 999px;
`;
const Login = styled.button`
  height: 47px;
  width: 131px;
  font-size: 19px;
  margin-top: 23px;
  border: none;
  background: #00f;
  color: #fff;
  font-weight: bold;
  border-radius: 7px;
`;

