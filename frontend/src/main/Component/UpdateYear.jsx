import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const Div = styled.div`
font-size : 30px;
color: #FF7759;
;`
export default function UpdateYear() {
    const [year,setYear]=useState("");
    const handleYear = (e) =>{
        setYear(e.target.value);
    }
    const handleSubmit = async(e) =>{
        e.preventDefault();
        const Reigster = new FormData();
        Reigster.append("Year",year);
        console.log(Reigster);
        // FormData의 값 확인
        for (var pair of Reigster.entries()) {
            console.log(pair[0]+ ', ' + pair[1]);
        }
        try{
            await axios(
                {
                    method : "POST",
                    url : "http://localhost/backend/UpdateYear.php",
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
    <Div>Edit Year</Div>
    <Div>Kim Bo Ra</Div>
    <form>
      <p><label for="Name">Year : </label><input type="text" name="Year" placeholder="Year" onChange={handleYear}/></p>
      <button onClick={handleSubmit} type="submit">Submit</button>
    </form>
        </>
    
    );
}
