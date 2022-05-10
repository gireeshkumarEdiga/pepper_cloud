// import React from "react";
// import { useState } from "react";

// export const Create = () => {
//     const [data, setData] = useState({
//         text : "",
//         email: "",
//         password: "",
//         number: "",
//         date : "",
//         status:"false",
//     })

//     const {text, email, password, number,date} = data;

//     const handleChange = (e) => {
//         setData({...data,[e.target.name]:e.target.value})
//     }

//     const handleClick = (e) => {
//         e.preventDefault();
//         console.log(data);

//         fetch("http://localhost:3001/details",{
//             method:"POST",
//             body : JSON.stringify(data),
//             headers : {
//                 "content-type" : "application/json",
//             }
//         })
//         .then((res) => res.json())
//         .then((res) => console.log(res));
//     }

//     return (
//         <div>
//             <h2>Fill the form</h2>
//             <form onSubmit={handleClick}  autoComplete="off">
//                 <input type="text" placeholder="Enter your name" value={text} name="text" onChange={handleChange} />
//                 <br />
//                 <br />
//                 <input type="email" placeholder="enter your mail" value={email} name="email" onChange={handleChange} />
//                 <br />
//                 <br />
//                 <input type="password" placeholder="enter your password" value={password} name="password" onChange={handleChange} />
//                 <br />
//                 <br />
//                 <input type="number" placeholder="enter your number" value={number} name="number" onChange={handleChange} />
//                 <br />
//                 <br />
//                 <input type="date" placeholder="enter the date" value={date} name="date" onChange={handleChange} />
//                 <br />
//                 <br />
//                 <input type="submit" >SUBMIT</input>
//             </form>
//         </div>
//     )
// }


import React from "react";
import { useState } from "react";

export const Create = () => {
    const [data, setData] = useState({
        firstname:"",
        lastname:"",
        email:"",
        number:"",
        password:"",
        confirmPassword:"",
        date:"",
        status:"false",
    });

    const {firstname,lastname,email,number,password,confirmPassword,date} = data;
    
    const handleChange = e => {

        // const {name, value} = e.target;
        
        // setData({...data,[name]:value});

        setData({...data,[e.target.name]:e.target.value});
    }

    const handleSubmit = e => {
        e.preventDefault();
        if(password !== confirmPassword){
            alert("password doesn't match")
        }else{
            console.log(data);
            window.location.href="/";
        }

        // axios.post("http://localhost:3001/details",data).then(() =>{
        //     alert("User is created");
        // })

        // const payload = {
        //     firstname: data.firstname,
        //     lastname: lastname,
        //     email : email,
        //     password : password,
        //     confirmPassword : confirmPassword,

        //     status : false,
        // }

        fetch("http://localhost:3001/details",{
            method:"POST",
            body : JSON.stringify(data),
            headers : {
                "content-type" : "application/json",                
            },
        })
        .then((res) => res.json())
        .then((res) => console.log(res));
        
    }
    return (
        <div>
            <h2>Fill the form</h2>
            <form onSubmit={handleSubmit} autoComplete="off">
                <br />
                <br />
                <input type="text" name="firstname" value={firstname} placeholder="enter your first name" onChange={handleChange} style={{height:"30px",width:"20%"}} />
                <br />
                <br />
                <input type="text" name="lastname" value={lastname} placeholder="enter your last name" onChange={handleChange} style={{height:"30px",width:"20%"}} />
                <br />
                <br />
                <input type="email" name="email" value={email} placeholder="enter your email" onChange={handleChange} style={{height:"30px",width:"20%"}} />
                <br />
                <br />
                <input type="number" name="number" value={number} placeholder="enter your number" onChange={handleChange} style={{height:"30px",width:"20%"}} />
                <br />
                <br />
                <input type="password" name="password" value={password} placeholder="enter your password" onChange={handleChange} style={{height:"30px",width:"20%"}} />
                <br />
                <br />
                <input type="password" name="confirmPassword" value={confirmPassword} placeholder="enter the confirmed password" onChange={handleChange} style={{height:"30px",width:"20%"}} />
                <br />
                <br />
                <input type="date" placeholder="enter the date" value={date} name="date" onChange={handleChange} style={{height:"30px",width:"20%"}} />
                <br />
                <br />
                <button type="submit" style={{height:"30px",width:"20%", backgroundColor:"black",color:"white"}}>SUBMIT</button>
                <br />
                <br />
                </form>
                {/* If you have an account already <button><Link to="signin">SIGNIN</Link></button> */}
        </div>
    )
}