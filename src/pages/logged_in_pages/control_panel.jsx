import React,{useState,useEffect} from "react";
import ProjectPerformance from "./controlPanelPages/existingProjects/projectPerformance"
import ProjectDetails from "./controlPanelPages/existingProjects/projectDetails/projectDetails";
import NewProject from "./controlPanelPages/newProject/newProject";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button'

/**
    THE GOAL OF THE CONTROL PANEL:
    - To measure individual performance
        - Average project completion duration
        - Number of projects completed for a given period
    

    Possible views:
    1. Display all display one
    2. Display in-depth
    
 */

export default function ControlPanel(tools){

    const [ControlPanelView,setControlPanelView] = useState(null)
    const [sideBarStyle,setSideBarStyle] = useState({tabs: "",open: "none",sideBarWidth: "15vw"})
    

    

    const hideSideBar = () => {
        setSideBarStyle({tabs: "none", open:"",sideBarWidth: '4vw'})
    }

    const openSideBar = () => {
        setSideBarStyle({tabs: "", open: "none",sideBarWidth: '15vw'})
    }

    const showProjectDetails = (projectComponentTarget) => {
        
        setProjectView(<ProjectDetails back={showProjectPerformance} projectComponentTarget={projectComponentTarget}/>);
    }
    
    const [projectView,setProjectView] = useState(<ProjectPerformance changeProjectPage={showProjectDetails}/>)
    
    const showProjectPerformance = () => {
        setProjectView(<ProjectPerformance changeProjectPage={showProjectDetails}/>)
    }
    
    const newProject = () => {
        // change view 
        setProjectView(<NewProject back={showProjectPerformance}/>); 
    }
    
    useEffect(()=>{
        if(sessionStorage.getItem('token')){
            
        }else{
            // Go back to the login page
        }
    },[])

    return(
        <div className="d-flex w-100 h-100">
            <div id="controlPanelSideBar" style={{width: sideBarStyle.sideBarWidth}}>
                <div style={{display: sideBarStyle.tabs}}>
                    <div className="p-4" style={{'flex-grow': "1"}}>
                        <p onClick={hideSideBar}>Hide</p>
                        <p onClick={tools.logout}>Logout</p>
                        <p onClick={newProject}>New Project</p>
                    </div>
                    <strong className="p-1">Projects</strong>
                    <div className="border-top m-3 h-75 p-4" >
                        Projects to scroll for
                    </div>
                    <strong className="p-1">Personal Stats</strong>
                    <div className="border-top m-3 h-75 p-4" >
                        <p>Overall Performance</p>
                    </div>
                </div>
                <div style={{display: sideBarStyle.open}}>
                    <p  onClick={openSideBar}>Open</p>
                </div>
                
            </div>
            {projectView}
            
        </div>
    )
}