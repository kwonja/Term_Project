import React, { useState, useEffect } from 'react';
import axios from 'axios';
export default function View() {
    const [show,setShow]=useState(false);
    const [table1,setTable]=useState();
    const handleOnclick = async(e)=>{

        const result = await axios.post(
            'http://localhost/test/select.php');
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
                        <td key={x.bookid}>{x.bookid}</td>
                        <td>{x.bookname}</td>
                        <td>{x.publisher}</td>
                        <td>{x.price}</td>
                    </tr>
                )
            ))}
            </tbody>
        </table>
        </>
    );
}
