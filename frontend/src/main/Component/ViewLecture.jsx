import React, { useState, useEffect } from 'react';
import axios from 'axios';
export default function View() {
    const [show,setShow]=useState(false);
    const [table1,setTable]=useState();
    const handleOnclick = async(e)=>{

        const result = await axios.post(
            'http://localhost/test/ViewLecture.php');
        console.log(result);
        setShow(true);
        setTable(result);
    }
  return (
    <>
    <div onClick={handleOnclick}>조회</div>
    {   show ? (<TableSet data={table1} />) : null}
    </>
  )
}

function TableSet(props){
    return(
        <>
        <table>
            <thead>
                <tr>
                <th>1</th>
                <th>1</th>
                <th>1</th>
                <th>1</th>
                </tr>
            </thead>
            <tbody>
            { props.data.data.map( (x) =>(
                (
                    <tr>
                        <td key={x.L_id}>{x.L_id}</td>
                        <td>{x.Lecture_time}</td>
                        <td>{x.Price}</td>
                        <td>{x.Name}</td>
                        <td>{x.Level}</td>
                    </tr>
                )
            ))}
            </tbody>
        </table>
        </>
    );
}
