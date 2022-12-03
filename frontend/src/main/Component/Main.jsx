import React,{useEffect, useState} from 'react'
import {Route,Routes,NavLink, Link } from "react-router-dom";

export default function Main() {
  return (
    <>
    <ul>
    <li><Link to="/viewLecture">Show Lecture</Link></li>
    <li><Link to="/viewMember">Show Member</Link></li>
    <li><Link to="/viewLocker">Using Locker list</Link></li>
    </ul>
    </>
  )
}
