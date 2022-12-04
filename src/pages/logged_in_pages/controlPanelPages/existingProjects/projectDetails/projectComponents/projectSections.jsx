import React,{useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import DesignComponent from './sections/design/designComponent'


export default function ProjectSection(tools){
    console.log(tools.projectComponentTarget)
    
    const [openOrCloseSymbol,setOpenOrClose] = useState({
        Design: "Design ▶",
        Development: "Development ▶", 
        Documentation: "Documentation ▶"
    });
    
    const [displaySection,setDisplaySection] = useState({
        Design: "none",
        Development: "none",
        Documentation: "none"
    })

    const openOrClose = (e) => {
        const id = e.target.id
        const newSymbol = {...openOrCloseSymbol}
        const newDisplay = {...displaySection}
        if (e.target.textContent === `${id} ▶`){
            newSymbol[id] = `${id} ▼`;    
            newDisplay[id] = 'block'
            setOpenOrClose(newSymbol);
            setDisplaySection(newDisplay)
        }else{
            newSymbol[id] = `${id} ▶`;
            newDisplay[id] = 'none'
            setOpenOrClose(newSymbol);
            setDisplaySection(newDisplay)
        }
    }
    
    return(
        <div className="d-flex flex-column w-100 h-100 p-2">
            <div id="Design"  className="d-flex flex-column">
                <p id="Design" onClick={openOrClose} className="border-bottom  w-100 d-flex">{openOrCloseSymbol.Design}</p>
                <div id="Design" style={{display: displaySection.Design}}>
                    <DesignComponent/>
                </div>
            </div>
            <div id="Development"  className="d-flex flex-column">
                <p id="Development" onClick={openOrClose} className="border-bottom  w-100 d-flex">{openOrCloseSymbol.Development}</p>
                <div id="Development" style={{display: displaySection.Development}}>Something</div>
            </div>
            <div id="Documentation" className="d-flex flex-column">
                <p id="Documentation" onClick={openOrClose} className="border-bottom  w-100 d-flex">{openOrCloseSymbol.Documentation}</p>
                <div id="Documentation" style={{display: displaySection.Documentation}}>Something</div>
            </div>
        </div>
    )
}

