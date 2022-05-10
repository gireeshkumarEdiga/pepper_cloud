import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const Form = () => {
    const [data,setData] = useState([])

    useEffect(() => {
        getData();
    })

    const getData = () => {
        fetch("http://localhost:3001/details")
        .then((res) => res.json())
        .then((res) => {
            setData(res);
        })
    }

    const butt = {
        backgroundColor:"black",
        fontSize : "20PX",
        textDecoration : "none",
        colour:"white",
    }

    const handleDelete = (index) => {
        fetch(`http://localhost:3001/details/${index}`,{
            method:"DELETE",
        })
        .then((res) => res.json())
        .then((res) => console.log(res));
    }

    return (
        <div>
            <button><Link style={butt} to="/create">button</Link></button>

            <table border="2" style={{margin:"2% 25%"}}>
                <tr>
                    <th>Id</th>
                    <th>Firstname</th>
                    <th>Lastname</th>
                    <th>Email</th>
                    <th>Number</th>
                    <th>Date</th>
                    <th>Operation</th>
                </tr>
                {data.map((e,i) => 
                <tr key={i}>
                    <td>{e.id}</td>
                    <td>{e.firstname}</td>
                    <td>{e.lastname}</td>
                    <td>{e.email}</td> 
                    <td>{e.number}</td>
                    <td>{e.date}</td> 
                    <td><button onClick={() => handleDelete(e.id)}>delete</button></td>              
                </tr>
                )}
            </table>
        </div>
    )
}