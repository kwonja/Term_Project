import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Insert() {

    const [bookid,setBookid]=useState(0);
    const [bookname,setBookname]=useState("");
    const [publisher,setPublisher]=useState("");
    const [price,setPrice]=useState(0);

    const handleBook = (e) =>{
        setBookid(e.target.value);
        console.log(e.target.value);
    }
    const handleBookname = (e) =>{
        setBookname(e.target.value);
    }
    const handleBookpublisher = (e) =>{
        setPublisher(e.target.value);
    }
    const handlePrice = (e) =>{
        setPrice(e.target.value);
    }
    const handleSubmit = async(e) =>{
        e.preventDefault();
        const Reigster = new FormData();
        Reigster.append("bookid",bookid);
        Reigster.append("bookname", bookname);
        Reigster.append("publisher",publisher);
        Reigster.append("price",price);
        console.log(Reigster);
        // FormData의 값 확인
        for (var pair of Reigster.entries()) {
            console.log(pair[0]+ ', ' + pair[1]);
        }
        try{
            await axios(
                {
                    method : "POST",
                    url : "http://localhost/test/process_create.php",
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
        <div>마당table에 데이터가 잘 들어가는지 확인</div>
    <form action="process_create.php" method="POST">
      <p><input type="text" name="bookid" placeholder="bookid" onChange={handleBook}/></p>
      <p><input type="text"name="bookname" placeholder="bookname" onChange={handleBookname}/></p>
      <p><input type="text"name="publisher" placeholder="publisher" onChange={handleBookpublisher}/></p>
      <p><input type="text"name="price" placeholder="price" onChange={handlePrice}/></p>
      <button onClick={handleSubmit} type="submit">제출</button>
    </form>
        </>
    
    );
}
