import React from 'react';
import "../../App.css";
import styled from "styled-components"

export default function Nav() {
  return (
    <Box>
        <h1>Logo</h1>
        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
    </Box>
  )
}

const Box = styled.div`
    backgroundColor: #282c34;
    padding: 30px 100px;
    color: #fff;
    display: flex;
    justify-content: space-between;
`;
