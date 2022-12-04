import React from "react";
import { useState } from "react";
import Card from 'react-bootstrap/Card'
import 'bootstrap/dist/css/bootstrap.min.css';
import SubDetailContent from "./subDetailContent";

export default function SubDetail(prop){
    
    const [subDetailContent,setSubDetailContent] = useState(null)

    const closeSubDetailContent = (e) => {
        
        setSubDetailContent(null)
    }

    const openContent = () => {
        
        setSubDetailContent(<SubDetailContent content={prop.subDetail.content} close={closeSubDetailContent}/>)
    }
    

    return(
        <div>
            <Card onClick={openContent}>{prop.subDetail.name}</Card>
            {subDetailContent}
        </div>
        
    )
}