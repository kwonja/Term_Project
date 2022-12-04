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
export default function View() {
    const [show,setShow]=useState(false);
    const [table1,setTable]=useState();

    useEffect( () =>{
        const handleOnclick = async(e)=>{

            const result = await axios.post('http://localhost/backend/ViewLecture.php');
            console.log(result);
            setShow(true);
            setTable(result);
        }
        handleOnclick();
    },[])
  return (
    <>
    
    {   show ? (<TableSet data={table1} />) : null}
    </>
  )
}

function TableSet(props){
    return(
        <>
        <Table border={1}>
            <Caption>Lecture List</Caption>
            <thead>
                <tr>
                <Th>L_id</Th>
                <Th>Name</Th>
                <Th>Lecture_time</Th>
                <Th>Price</Th>
                <Th>Level</Th>
                </tr>
            </thead>
            <tbody>
            { props.data.data.map( (x) =>(
                (
                    <tr>
                        <Td key={x.L_id}>{x.L_id}</Td>
                        <Td>{x.Name}</Td>
                        <Td>{x.Lecture_time}</Td>
                        <Td>{x.Date}</Td>
                        <Td>{x.Level}</Td>
                    </tr>
                )
            ))}
            </tbody>
        </Table>

        </>
    );
}
