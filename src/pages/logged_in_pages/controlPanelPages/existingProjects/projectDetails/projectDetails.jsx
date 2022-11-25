import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import ProjectSections from "./projectComponents/projectSections";

export default function ProjectDetails(tools){
    return(
        <div className="w-100 h-100">
            <p className="m-2 border border-danger" style={{width: '10%'}} onClick={tools.back}>Back</p>
            <ProjectSections projectComponentTarget={tools.projectComponentTarget}/>
        </div>
        
    )
}