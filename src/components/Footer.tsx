import React from 'react';
import Foote from "../assets/logo-text.png";

const Footer = () => {
    return (
        <div>
        <div className="container mx-auto gap-32 py-32 flex">
            <div className="grid gap-4">
                 < img src={Foote} alt="Logo" className="w-32 h-auto" />
                 <p>Curated tools, technologies, and resources for developers building<br />
modern software.</p>
               <ul className="flex">
                <li>Github</li>
                <li>Twitter</li>
                <li>LinkedIn</li>
               </ul>
            </div>
            <div className="grid">
               <h4>Product</h4>
               <ul>
                <li>Home</li>
                <li>Technologies</li>
                <li>Project</li>
               </ul>
            </div>
            <div>
                <h3>Company</h3>
                <ul>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Career</li>
                </ul>
            </div>
            <div >
                <h2>Legal</h2>
                <ul>
                <li> Privacy Policy</li>
                <li> Terms of Service</li>
                </ul>
            
            </div>
           
        </div>
        <footer className="mx-auto ml-8">© 2026 Dev Stack. All rights reserved.</footer>
        </div>
    
    );
};

export default Footer;