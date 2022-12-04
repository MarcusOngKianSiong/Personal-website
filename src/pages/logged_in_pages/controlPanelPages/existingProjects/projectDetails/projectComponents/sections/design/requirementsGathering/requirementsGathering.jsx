import React,{useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button'
import Requirement from './components/requirement'
import RequirementDetail from "./components/requirementDetail";
import { useEffect } from "react";
import { keyboardImplementationWrapper } from "@testing-library/user-event/dist/keyboard";

export default function RequirementsGathering(){
    
    const retrieveRequirementsAndDetails = () => {
        //1.  go to the back end to retrieve requirements and details
        //2.  create the requirement elements 
        const requirementList = [{
            name: 'Mapping feature',
            details: [{
                name: 'Map Points',
                description: 'Represent property location on the map',
                subDetails: [
                    {
                        name: 'What are those points based on?',
                        content: 'Coordinates',
                    },{
                        name: 'How do I get those points?',
                        content: 'Use the search bar feature to get the location data and within the location data, get the coordinates.'
                    }
                ]
            }]
        }]
        return requirementList
    }
    
    const [requirementData,setRequirementData] = useState(retrieveRequirementsAndDetails)
    const [requirementElements,setRequirementElements] = useState(null)
    
    

    

    
    
    const displayRequirements = () => {
        let requirementDisplay = []
        requirementData.forEach(requirement=>{
            requirementDisplay.push(<Requirement requirementName={requirement.name} requirementData={requirementData}/>)
        })
        setRequirementElements(requirementDisplay);
    }

    
    

    const createNewRequirement = () => {
        // Create new section in the database
        

        // Run the retrieve requirement data again. 
        
    }

    const createNewDetail = () => {
        
    }

    const createNewSubDetail = () => {

    }

    useEffect(()=>{
        displayRequirements()
    },[requirementData])

    return (
        <div className="p-3 border border-danger d-flex justify-content-start">
            
            <div className="d-flex border border-danger" style={{}}>
                
                <div>
                    <Button>New Requirement</Button>
                    {requirementElements}
                </div>
                
            </div>
            
            
            
        </div>
    )
}