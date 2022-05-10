import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
    const main = {
        display : "flex",
        flexDirection : "row",
        padding : "1% 10%",
        margin: "1%",
        backgroundColor: "yellow",
        border : "5px solid red"
    }

    const link = {
        margin: "0% 10%",
        fontSize : "20px",
        textDecoration : "none",
        color:"black",
        border:"1px solid orange",
        padding: "2PX 10PX",
    }

    return (
        <div style={main}>
            <Link style={link} to="/">Home</Link>
            <Link style={link} to="/create">Create</Link>
            <Link style={link} to="/edit">Edit</Link>
            <Link style={link} to="/id">Id</Link>
        </div>
    )
}