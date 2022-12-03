import React,{useEffect, useState} from 'react'
import {Route,Routes,NavLink, Link } from "react-router-dom";

export default function Main() {
  return (
    <>
    <ul>
    <li><Link to="/viewLecture">Show Lecture</Link></li>
    </ul>
    </>
  )
}
