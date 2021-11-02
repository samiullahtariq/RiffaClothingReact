import React from "react";
import Card from "./Card";
import Sdata from "../Data/Sdata";

const Home = () => {
    return (
        <>
            <div className="container-fluid pt-5" style={{backgroundColor:'#272838'}}>
                <div className="row">
                    <div className="col-10 mx-auto">
                    <div className="row gy-4  " >
                        
                        {
                            Sdata.map((value )=>{
                                return(
                                    <Card key={value._id} imgsrc={value.image} name={value.name} price={value.price} rating={value.rating} review={value.numReviews} color={value.color} />
                                )
                                
                            })
                        }
                        
                    </div>
                 
                    </div>
                </div>
            </div>
                    
                    
                       
                    
                       
                    
                
          
        </>
    )
}

export default Home
