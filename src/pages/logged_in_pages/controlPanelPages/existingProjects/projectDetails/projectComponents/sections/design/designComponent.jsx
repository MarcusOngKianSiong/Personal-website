import React,{useState,useEffect} from "react";
import Architecture from './architecture/architecture'
import FrontEndDesign from './frontEndDesign/frontEndDesign'
import RequirementsGathering from './requirementsGathering/requirementsGathering'

const associatedElement = (target) => {
    if(target === 'requirementGathering'){
        return <RequirementsGathering/>
    }
    if(target === 'frontEndDesign'){
        return <FrontEndDesign/>
    }
    if(target === 'architecture'){
        return <Architecture/>
    }
}


export default function DesignComponent(){

    

    const [designComponentView,setDesignComponentView] = useState({
        requirementGathering: {name: '▶ Requirements Gathering', element: null},
        frontEndDesign: {name: '▶ Front-end Design', element: null},
        architecture: {name: '▶ Architecture', element: null}
    })    

    const openOrCloseSection = (e) => {
        const target = e.target.id
        const currentDesignComponentView = {...designComponentView};
        const arrow = ['▶','▼']
        let targetArrow = null;
        let element = null

        if(currentDesignComponentView[target].element === null){
            // Change name to open
            
            targetArrow = 1;
            element = associatedElement(target)
            
        }else{
            element = null
            targetArrow = 0;
        }
        
        // Change the arrow symbol
        const currentName = designComponentView[target].name;
        const splitting = currentName.split(' ');
        splitting[0] = arrow[targetArrow];
        const newName = splitting.join(' ')
        currentDesignComponentView[target].name = newName;
        currentDesignComponentView[target].element = element
        setDesignComponentView(currentDesignComponentView)
        // Display or remove the display

    }

    return(
        <div className="d-flex flex-column justify-content-start ">
            <div className="d-flex flex-column">
                <p id="requirementGathering" className="d-flex p-2" onClick={openOrCloseSection}>{designComponentView.requirementGathering.name}</p>
                {designComponentView.requirementGathering.element}
            </div>
            <div>
                <p id="frontEndDesign" className="d-flex p-2" onClick={openOrCloseSection}>{designComponentView.frontEndDesign.name}</p>
                {designComponentView.frontEndDesign.element}
            </div>
            <div>
                <p id="architecture" className="d-flex p-2" onClick={openOrCloseSection}>{designComponentView.architecture.name}</p>
                {designComponentView.architecture.element}
            </div>
            
        </div>
    )
}