import React,{useEffect, useState} from 'react'
import {Route,Routes,NavLink, Link } from "react-router-dom";
import styled from 'styled-components';
import '../css/App.css';

const Ul = styled.ul`
list-style:none;
width : 80%;
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
    <Li><Link to="/TotalHour">7. Total hours of Kim Bo Ra</Link></Li>
    <Li><Link to="/MemberEnroll">8. Sign up</Link></Li>
    <Li><Link to="/DeleteMember">9. Delete Member</Link></Li>
    <Li><Link to="/MemberLecturePrice">10. Total price of Lecture enrolled by members</Link></Li>
    <Li><Link to="/Lecture_time">11. Time for lectures enrolled by Kim Kakao</Link></Li>
    <Li><Link to="/Certificate">12. Certificate of Kwon sung min </Link></Li>
    <Li><Link to="/UpdateYear">13. Update Year about Kim Bo Ra </Link></Li>
    </Ul>
    </>
  )
}
