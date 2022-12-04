import React from 'react'
import { useEffect } from 'react'
import axios from 'axios';
import { useState } from 'react';

export default function UpdateMember() {
    const [show,setShow]=useState(true);
    useEffect( ()=>{
        hanle();
    },[])

    const hanle = async(e)=>{
        try{
            await axios(
                {
                    method : "POST",
                    url : "http://localhost/backend/InsertLecture.php",
                    headers : {"Content-Type" : "multipart/form-data",},
                });
                setShow(true);
        }catch(error){
            console.log(error);
        }

    }
  return (
    <>
    123
    {show ? (<div>insert 성공</div>) : null}
    </>
  )
}
