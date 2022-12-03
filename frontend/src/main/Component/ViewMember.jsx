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
export default function ViewMember() {
    const [show,setShow]=useState(false);
    const [table1,setTable]=useState();
    const handleOnclick = async(e)=>{

        const result = await axios.post(
            'http://localhost/backend/ViewMember.php');
        console.log(result);
        setShow(true);
        setTable(result);
    }
  return (
    <>
    <span>스포츠센터를 등록한 회원 보기 </span><button onClick={handleOnclick}>클릭!</button><br/>
    
    {   show ? (<TableSet data={table1} />) : null}
    </>
  )
}
function TableSet(props){
    return(
        <>
        <Table border={1}>
            <thead>
                <tr>
                <Th>M_id</Th>
                <Th>Name</Th>
                <Th>Job</Th>
                <Th>Phone Number</Th>
                <Th>Bdate</Th>
                <Th>Start_date</Th>
                <Th>L_id</Th>
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
                        <Td>{x.L_id}</Td>
                    </tr>
                )
            ))}
            </tbody>
        </Table>

        </>
    );
}
