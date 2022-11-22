import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from './assets/card'

export default function Front_page(){
    return (
        
        <div className="d-flex flex-column">
            <div className="d-flex flex-column w-100 p-5">
                <h2 className="p-2">Core Skill</h2>
                <h4 className="p-2">System Design and Development</h4>
                <h6 className="p-4">Design, Build, Document</h6>
                <p className="p-3">System Projects Examples</p> 
                <div className="d-flex justify-content-center ">
                    <Card/>
                </div>

            </div>
            
            <div className="d-flex flex-column">
                <h2>Goal</h2>
                <h4>To conceptualize, build, and own the systems that the world runs on</h4>
                <div>
                    
                </div>      
            </div>
            
        </div>
        
    )
}