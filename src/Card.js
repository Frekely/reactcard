import React from "react";
import './Card.css'
import Female1 from "./female1.jpg"
import Female2 from "./female2.jpg"
import Male1 from "./male1.jpg"
import Male2 from "./male2.jpg"


const Card = (props) => {
    return(
        <div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5"> 
            <img className="passport-img" alt="passport" src={props.ImgUrl}></img>
            <div>
                <h1>{props.name}</h1>
                <p>{props.position}</p>
                <p>{props.school}</p>
                <p>{props.media}</p>
            </div>
        </div>
    );
}

export default Card