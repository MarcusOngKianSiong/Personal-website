import React,{useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import AllProjects from './allProjects/allProjects'
import ProjectDetails from './projectDetails/projectDetails'
import { useEffect } from "react";

export default function SystemProjects(){

    const [systemProjectPageLevel,setSystemProjectPageLevel] = useState(null)
    
    const showProjectDetails = (ProjectName) => {
        setSystemProjectPageLevel(<ProjectDetails projectName={ProjectName} back={showAllProjects}/>)
    }

    const showAllProjects = () => {
        setSystemProjectPageLevel(<AllProjects showProjectDetails={showProjectDetails}/>)
    }

    useEffect(()=>{
        showAllProjects()
    },[])

    return(
        <div className=" w-100 h-100">

            {systemProjectPageLevel}            
            
        </div>
    )
}