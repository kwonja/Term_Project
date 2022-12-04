import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const Div = styled.div`
font-size : 30px;
color: #FF7759;
;`
export default function MemberEnroll() {
    const [M_id,setM_id]=useState(0);
    const [Name,setName]=useState("");
    const [Pnumber,setPnumber]=useState("");
    const [Job,setJob]=useState("");
    const [Bdate,setBdate]=useState("");
    const [Start_date,setStart_date]=useState("");
    const [Price,setPrice]=useState(0);
    const [L_id,setL_id]=useState(0);
    
    useEffect( ()=>{
        const setId = async(e)=>{

            const result = await axios.post(
                'http://localhost/backend/Memberid.php');
            console.log(result);
            setM_id(Number(result.data[0].M_id)+1);
        }
        setId();
    },[])
    const handleName = (e) =>{
        setName(e.target.value);
    }
    const handleJob = (e) =>{
        setJob(e.target.value);
    }
    const handlePnumber = (e) =>{
        setPnumber(e.target.value);
    }
    const handlePrice = (e) =>{
        setPrice(e.target.value);
    }
    const handleBdate = (e) =>{
        setBdate(e.target.value);
    }
    const handleStart_date = (e)=>{
        setStart_date(e.target.value);
    }
    const handleL_id = (e)=>{
        setL_id(e.target.value);
    }
    const handleSubmit = async(e) =>{
        e.preventDefault();
        const Reigster = new FormData();
        Reigster.append("M_id",M_id);
        Reigster.append("Name",Name);
        Reigster.append("Job",Job);
        Reigster.append("Bdate",Bdate);
        Reigster.append("Start_date",Start_date);
        Reigster.append("Pnumber",Pnumber);
        Reigster.append("L_id",L_id);
        Reigster.append("Locker_id",M_id);
        Reigster.append("Password",'1234');
        Reigster.append("Price",Price);
        console.log(Reigster);
        // FormData의 값 확인
        for (var pair of Reigster.entries()) {
            console.log(pair[0]+ ', ' + pair[1]);
        }
        try{
            await axios(
                {
                    method : "POST",
                    url : "http://localhost/backend/MemberEnroll.php",
                    data : Reigster,
                    headers : {"Content-Type" : "multipart/form-data",},
                });
                alert("전달성공!");
        }catch(error){
            console.log(error);

        }
    }

    return(
        <>
    <Div>Sign up</Div>
    <form action="MemberEnroll.php" method="POST">
      <p><label for="Name">Name : </label><input type="text" name="Name" placeholder="Name" onChange={handleName}/></p>
      <p><label for="Name">Pnumber : </label><input type="text"name="Pnumber" placeholder="Pnumber" onChange={handlePnumber}/></p>
      <p><label for="Name">Job : </label><input type="text"name="Job" placeholder="Job" onChange={handleJob}/></p>
      <p><label for="Name">Bdate : </label><input type="text"name="Bdate" placeholder="Bdate" onChange={handleBdate}/></p>
      <p><label for="Name">Start_date : </label><input type="text"name="Start_date" placeholder="Start_date" onChange={handleStart_date}/></p>
      <p><label for="Name">Lecture(Write Lecture_id) : </label><input type="text"name="L_id" placeholder="Lecture Number" onChange={handleL_id}/></p>
      <p><label for="Name">Price </label><input type="text"name="Price" placeholder="Price" onChange={handlePrice}/></p>
      <button onClick={handleSubmit} type="submit">Submit</button>
    </form>
        </>
    
    );
}
