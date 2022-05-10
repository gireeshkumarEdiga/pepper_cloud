import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const Id = () => {
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

    // const handleDelete = (index) => {
    //     fetch(`http://localhost:3001/details/${index}`,{
    //         method:"DELETE",
    //     })
    //     .then((res) => res.json())
    //     .then((res) => console.log(res));
    // }

    return (
        <div>
            <table border="0" style={{margin:"2% 25%"}}>
                <tr>
                    <th>Id</th>
                    <th>Firstname</th>
                    <th>Lastname</th>
                    <th>Email</th>
                    <th>Number</th>
                    {/* <th>Password</th> */}
                    <th>Date</th>
                    {/* <th>Operation</th> */}
                </tr>
                {data.map((e,i) => 
                <tr key={i}>
                    <td>{e.id}</td>
                    <td>{e.firstname}</td>
                    <td>{e.lastname}</td>
                    <td>{e.email}</td> 
                    <td>{e.number}</td>
                    {/* <td>{e.password}</td> */}
                    <td>{e.date}</td> 
                    {/* <td><button onClick={() => handleDelete(e.id)}>delete</button></td> */}
                </tr>
                )}
            </table>
        </div>
    )
}