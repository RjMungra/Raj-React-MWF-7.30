import React from "react";

export default function Contact() {
    return (
        <>
            <body className=" bg-secondary">
                
            
            <div className="container">
            <div className="row text-center">
             <div className="col-12 ">
                    <h3>Contact form</h3>
                    <input type="text" placeholder="enter firstname"  className="contact-input w-50 mt-4 mb-4 text-center"/><br/>
                    <input type="text" placeholder="enter lastname" className="contact-input w-50 mb-4 text-center"/><br/>
                    <input type="text" placeholder="enter phone" className="contact-input w-50 mb-4 text-center"/><br/>
                    <input type="text" placeholder="enter mail" className="contact-input w-50 mb-4 text-center"/><br/>
                        <input type="text" placeholder="enter address" className="contact-input w-50 mb-4 text-center" />
                        <br />
                        <div className="text-center">
                    <button className="btn bg-info text-white mt-2">Send data</button>
                    <button className="btn bg-danger text-white ms-2 mt-2">Reset data</button>
                    </div>


                </div>
            </div></div>
            </body>
        </>
    )
} 
