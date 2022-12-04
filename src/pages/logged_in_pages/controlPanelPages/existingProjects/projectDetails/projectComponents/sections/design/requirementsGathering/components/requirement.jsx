import React,{useState} from "react";
import Button from 'react-bootstrap/Button'
import RequirementDetail from "./requirementDetail";

export default function Requirement(prop) {

    const [detailSection,setDetail] = useState(null);
    const [requirementName,setRequirementName] = useState(`▶ ${prop.requirementName}`);
    const [newDetailButton,setnewDetailButton] = useState(null)

    const displayRequirementDetails = (target) => {

        if(detailSection===null){
            
            let details = []
            
            prop.requirementData.forEach(requirement=>{
                if(requirement.name === target){
                    requirement.details.forEach(detail=>{
                        console.log(detail)
                        details.push(<RequirementDetail requirementDetailName={detail.name} details={detail}/>)
                    })
                }
            })
        
            setDetail(details);
            setRequirementName(`▼ ${prop.requirementName}`)
            setnewDetailButton(<Button>New {prop.requirementName} detail</Button>)
        }else{

            setDetail(null)
            setRequirementName(`▶ ${prop.requirementName}`)
            setnewDetailButton(null)
        }
        
    }

    return(
        <div>
            <p onClick={(e)=>{displayRequirementDetails(prop.requirementName)}}>{requirementName}</p>
            <div className="border border-danger">
                    {newDetailButton}
                    <div id="">
                        {detailSection} 
                    </div>
            </div>    
        </div>
        
        
    )
}