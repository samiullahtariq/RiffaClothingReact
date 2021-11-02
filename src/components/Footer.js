import React from "react";

const Footer = () => {
    const date = new Date().getFullYear()
    return (
        <>
            <footer className="bg-primary py-3 text-center text-light" style={{fontWeight:'bold'}}>
                    CopyRight &copy; {date} All Rights Reserved
            </footer>
         
        </>
    )
}

export default Footer
