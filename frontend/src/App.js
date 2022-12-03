import React, { useState, useEffect } from 'react';
import {BrowserRouter,Route,Routes} from "react-router-dom";
import axios from 'axios';
import Insert from './main/Component/insert';
import View from './main/Component/View';
import ViewLecture from './main/Component/ViewLecture'
import Main from './main/Component/Main';
import Footer from './main/Component/Footer';
import ViewMember from './main/Component/ViewMember';
function App() {
   
    return(
        <BrowserRouter>
    <Routes>
      <Route path="/" element={<Main/>}></Route>
      <Route path="/insert" element={<Insert />}></Route>
      <Route path="/view" element={<View />}></Route>
      <Route path="/viewLecture" element={<ViewLecture />}></Route>
      <Route path="/viewMember" element={<ViewMember />}></Route>
    </Routes>
    <Footer/>
    </BrowserRouter>
    );

}

export default App;
