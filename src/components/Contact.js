import React from "react";
import FormIn from "./FormIn";

const Contact = () => {

  const img = '/img/Down3.png'
  const imgr = '/img/Right2.jpg'

    return (
        <>
           <div className="container-fluid">
               <div className="row">
                   <div className="col-10 mx-auto">
                       <div className="row mt-5 ">
                       <div className="col-md-6 col-12 order-1 order-lg-1">
                            <img className="d-block  d-sm-block d-md-none w-100" style={{maxHeight:'350px', borderRadius:'75px'}} src={img} alt="img" />
                            <img className="d-none d-md-block d-lg-block d-xl-block w-100 justify-content-center" style={{maxHeight:'380px', borderRadius:'75px'}} src={imgr} alt="img" />
                       </div>
                           <FormIn/>
                       </div>
                   </div>
               </div>
           </div>
        </>
    )
}

export default Contact
