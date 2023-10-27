import React from 'react';
import styled from "styled-components";
import "../../App.css"

export default function Header() {
  return (
    <Headerbox>
        <Logo src={require("../../images/logo.svg").default}/>
        <Login href="">Home</Login>
        <Login href="">About</Login>
        <Logi href="">Youtube</Logi>
        <Login href="">Todo</Login>
        <Login href="">Users</Login>
        <Logi href="">Contact</Logi>
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
  margin-right: 99px;
`;
const Login = styled.a`
  height: 47px;
  width: 131px;
  font-size: 29px;
  margin-top: 23px;
  border: none;
  background: #00f;
  color: #fff;
  font-weight: bold;
  border-radius: 7px;
  margin-right: 27px;
  padding-left: 27px;
  text-decoration: none;
`;
const Logi = styled.a`
  height: 47px;
  width: 131px;
  font-size: 29px;
  margin-top: 23px;
  border: none;
  background: #00f;
  color: #fff;
  font-weight: bold;
  border-radius: 7px;
  margin-right: 27px;
  padding-left: 17px;
  text-decoration: none;
`;

