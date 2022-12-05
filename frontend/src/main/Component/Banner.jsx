import React,{useEffect, useState} from 'react'
import '../css/App.css';
import styled from 'styled-components';

const Logo =styled.div`
font-weight: 400;
font-size: 30px;
line-height: 24px;
color: #000000;
`;
const Nav =styled.nav`
width : 80%;
background: #66C6A3;
padding : 20px;
color : #000000;
`
export default function Banner() {
  return (
    <>
            <Nav>
            <Logo>CBNU SPORT CENTER SWIM MANAGE SYSTEM</Logo>
            </Nav>
    </>
  )
}
