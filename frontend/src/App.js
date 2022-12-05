import React, { useState, useEffect } from 'react';
import {BrowserRouter,Route,Routes} from "react-router-dom";
import ViewLecture from './main/Component/ViewLecture'
import Main from './main/Component/Main';
import Footer from './main/Component/Footer';
import ViewMember from './main/Component/ViewMember';
import ViewLocker from './main/Component/ViewLocker';
import ViewEnroll from './main/Component/ViewEnroll';
import ViewCenter from './main/Component/ViewCenter';
import ViewInstructor from './main/Component/ViewInstructor';
import MemberEnroll from './main/Component/MemberEnroll';
import TotalHour from './main/Component/TotalHour';
import DeleteMember from './main/Component/DeleteMember';
import MemberLecturePrice from './main/Component/MemberLecturePrice';
import Lecturetime from './main/Component/Lecture_time';
import Certificate from './main/Component/Certificate';
import UpdateYear from './main/Component/UpdateYear';
import Banner from './main/Component/Banner';
function App() {
   
    return(
        <BrowserRouter>
        <Banner/>
    <Routes>
      <Route path="/" element={<Main/>}></Route>
      <Route path="/viewLecture" element={<ViewLecture />}></Route>
      <Route path="/viewMember" element={<ViewMember />}></Route>
      <Route path="/viewLocker" element={<ViewLocker />}></Route>
      <Route path="/viewEnroll" element={<ViewEnroll />}></Route>
      <Route path="/viewCenter" element={<ViewCenter />}></Route>
      <Route path="/viewInstructor" element={<ViewInstructor />}></Route>
      <Route path="/MemberEnroll" element={<MemberEnroll />}></Route>
      <Route path="/DeleteMember" element={<DeleteMember />}></Route>
      <Route path="/TotalHour" element={<TotalHour />}></Route>
      <Route path="/MemberLecturePrice" element={<MemberLecturePrice />}></Route>
      <Route path="/Lecture_time" element={<Lecturetime/>}></Route>
      <Route path="/Certificate" element={<Certificate/>}></Route>
      <Route path="/UpdateYear" element={<UpdateYear/>}></Route>
    </Routes>
    <Footer/>
    </BrowserRouter>
    );

}

export default App;
