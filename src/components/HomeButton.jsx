import { useLocation, Link } from "react-router-dom";
import React from 'react';
import { aboutPhotos } from "../assets/bakeryPhotos";

function HomeButton() {
    return (
        <div className="home-button"><Link to="/"><button className="btn btn-primary px-4 my-5" type="button">
Home ↑
</button></Link>
</div>
    );
}
export default HomeButton;

