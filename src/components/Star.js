import React from 'react';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import { PropTypes } from 'prop-types';


const Star = ({value , text , color}) => {
    let rating =[1,2,3,4,5]
    return (
        <>
            {rating.map((rate)=>(
                
                    <span key={rate} style={{color:color}}>
                        {
                            value > rate ? (<StarIcon/>):
                            value >= rate -0.5 ? (<StarHalfIcon/>):
                            (<StarBorderIcon/>)
                        }
                    </span>
                
            ))}
            <span style={{fontWeight:'bold'}}>{`from ${text}` }</span>
        </>
    )
}

Star.prototype ={
    value : PropTypes.number.required,
    text: PropTypes.string.required,
    color: PropTypes.string.required
}

export default Star
