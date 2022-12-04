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
export default function ViewMember() {
    const [show,setShow]=useState(false);
    const [table1,setTable]=useState();
    useEffect( () =>{
        const handleOnclick = async(e)=>{

            const result = await axios.post(
                'http://localhost/backend/ViewEnroll.php');
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
        <Caption>Enroll List</Caption>
            <thead>
                <tr>
                <Th>M_id</Th>
                <Th>L_id</Th>
                <Th>가격</Th>
                </tr>
            </thead>
            <tbody>
            { props.data.data.map( (x) =>(
                (
                    <tr>
                        <Td key={x.M_id}>{x.M_id}</Td>
                        <Td>{x.L_id}</Td>
                        <Td>{x.Price}</Td>
                    </tr>
                )
            ))}
            </tbody>
        </Table>

        </>
    );
}
