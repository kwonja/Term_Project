import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {Route,Routes,NavLink, Link } from "react-router-dom";
import styled from 'styled-components';
import '../css/App.css';
const Table = styled.table`
  background: #FFFFFF;
  border-radius: 5px;
  width: 50%;
  border: 1px solid #E7E7E7;
  border-collapse : collapse;
  font-family: 'Noto Sans';
  font-style: normal;
  font-weight: 300;
  font-size: 15px;
  line-height: 33px;
  letter-spacing: -1px;
  color: #292929;
`;
const Th = styled.th`
text-align: center;
padding: 8px;
font-size: 12px;
`;
const Td = styled.td`
text-align: center;
padding: 8px;
font-weight: 300;
font-size: 15px;
;`
const Caption = styled.caption`
font-size : 30px;
color: #FF7759;
padding : 5px;
;`
const Div = styled.span`
font-size : 30px;
color: #FF7759;
`;
export default function DeleteMember() {
    const [show,setShow]=useState(false);
    const [table1,setTable]=useState();    
    const [M_id,setM_id]=useState(0);
    useEffect( () =>{
        const handleOnclick = async(e)=>{

            const result = await axios.post(
                'http://localhost/backend/ViewMember.php');
            console.log(result);
            setShow(true);
            setTable(result);
        }
        handleOnclick();
    },[])

    const handleM_id = (e)=>{
        setM_id(e.target.value);
    }
    const handleSumbit = async(e)=>{
        e.preventDefault();
        const Reigster = new FormData();
        Reigster.append("M_id",M_id);
        console.log(M_id);
        try{
            await axios(
                {
                    method : "POST",
                    url : "http://localhost/backend/DeleteMember.php",
                    data : Reigster,
                    headers : {"Content-Type" : "multipart/form-data",},
                });
                window.location.href="/";
        }catch(error){
            console.log(error);
        }
    }
  return (
    <>
    
    <Div>Input M_id of delete Date</Div><span>(input number which is not in table, Not Delete)</span><br/>
    <input type="text" name="M" onChange={handleM_id}/> <button onClick={handleSumbit}>삭제하기</button>
    {   show ? (<TableSet data={table1} />) : null}
    </>
  )
}
function TableSet(props){
    return(
        <>
        <Table border={1}>
        <Caption>Member Delete</Caption>
            <thead>
                <tr>
                <Th>M_id</Th>
                <Th>Name</Th>
                <Th>Job</Th>
                <Th>Phone Number</Th>
                <Th>Bdate</Th>
                <Th>Start_date</Th>
                </tr>
            </thead>
            <tbody>
            { props.data.data.map( (x) =>(
                (
                    <tr>
                        <Td key={x.M_id}>{x.M_id}</Td>
                        <Td>{x.Name}</Td>
                        <Td>{x.Job}</Td>
                        <Td>{x.Pnumber}</Td>
                        <Td>{x.Bdate}</Td>
                        <Td>{x.Start_date}</Td>
                    </tr>
                )
            ))}
            </tbody>
        </Table>

        </>
    );
}
