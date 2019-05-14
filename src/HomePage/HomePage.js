import React from "react";
import { Link } from "react-router-dom";
import "./HomePage.scss";

const HomePage = () =>(
    <div className="container anchor">
        <h5>HomePage</h5>
        <Link to="/login">Login</Link>
    </div>
);

export default HomePage;