import React from "react";
import Star from "./Star";


const Card = (props) => {
    return (
        <>
        <div className="col-md-4 col-10 mx-auto " style={{marginBottom: '15px'}}>
            
            <div className="card " >
            <div className="inner">
            <img src={props.imgsrc} style={{maxHeight:'250px'}} className="card-img-top d-block w-100" alt="img" />
            </div>
            
            <div className="card-body">
            <h5 class="card-title">{props.name}</h5>
            <h3 className="card-text">Rs {props.price} /-</h3>
            <Star value={props.rating} text={`${props.review} reviews`} color={props.color}/>
            </div>
            </div>
        
        </div>
      
            
        </>
    )
}

export default Card
