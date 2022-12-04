import React,{useEffect, useState} from 'react'
import {Route,Routes,NavLink, Link } from "react-router-dom";
import styled from 'styled-components';
import '../css/App.css';

const Ul = styled.ul`
list-style:none;
width : 50%;
display : flex;
flex-wrap: wrap;
`;
const Li = styled.li`
width : 40%;
font-size : 30px;
padding : 25px;
a{
    color: #FF7759;
}
`;
export default function Main() {
  return (
    <>
    <Ul>
    <Li><Link to="/viewLecture">1. Lecture List</Link></Li>
    <Li><Link to="/viewMember">2. Member List</Link></Li>
    <Li><Link to="/viewLocker">3. Using Locker List</Link></Li>
    <Li><Link to="/viewEnroll">4. Enroll List</Link></Li>
    <Li><Link to="/viewCenter">5. Center List</Link></Li>
    <Li><Link to="/viewInstructor">6. Instructor List</Link></Li>
    <Li><Link to="/123">7. 김보라의 총 강의시간</Link></Li>
    <Li><Link to="/MemberEnroll">8. Sign up</Link></Li>
    </Ul>
    </>
  )
}
