import React from "react";
import { Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function SubDetailContent(prop){
    
    return(
        <div className="position-absolute d-flex flex-column border border-danger" style={{width: '100vw',height: '100vh', top: '0', left: '0', backdropFilter: 'blur(3px)'}}>
            <Button className="m-3 w-25" onClick={e=>{prop.close()}}>Back</Button>
            <div className="m-2 h-75 border border-danger bg-light" >
                <p>{prop.content}</p>
            </div>
        </div>
    )
}