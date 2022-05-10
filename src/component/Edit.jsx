import React, { useEffect, useState } from "react";

export const Edit = () => {
    const [data,setData] = useState({
        id:"",
        firstname:"",
        lastname:"",
        email:"",
        number:"",
        date:"",      
    })

    const {id,firstname,lastname,email,number,date} = data;

    useEffect(() => {
        getData();
    })

    const getData = () => {
        fetch(`http://localhost:3001/details/${id}`, {
            method:"PUT",
            body : JSON.stringify(data),
            headers : {
                "content-type" : "application/json",                
            },
        })
        .then((res) => res.json())
        .then((res) => console.log(res));
    }

    const handleChange = e => {
        setData({...data,[e.target.name]:e.target.value})
    }

    const handleSubmit = e => {
        e.preventDefault();
        window.location.href="/";
    }

    return (
        <div>
             <form onSubmit={handleSubmit}>
             <input type="number" placeholder="enter your id" name="id" value={id} onChange={handleChange} style={{height:"30px",width:"20%",border:"2PX solid red"}} />
             <br />
             <br />
             <input type="text" placeholder="edit your first name" name="firstname" value={firstname} onChange={handleChange} style={{height:"30px",width:"20%"}} />
             <br />
             <br />
             <input type="text" placeholder="edit your last name" name="lastname" value={lastname} onChange={handleChange} style={{height:"30px",width:"20%"}} />
             <br />
             <br />
             <input type="email" placeholder="edit your email" name="email" value={email} onChange={handleChange} style={{height:"30px",width:"20%"}} />
             <br />
             <br />
             <input type="number" placeholder="edit your number" name="number" value={number} onChange={handleChange} style={{height:"30px",width:"20%"}} />
             <br />
             <br />
             <input type="date" name="date" value={date} onChange={handleChange} style={{height:"30px",width:"20%"}} />
             <br />
             <br />
             <input type="submit" placeholder="button" style={{height:"30px",width:"20%", backgroundColor:"black",color:"white"}} />
             </form>
        </div>
    )
}