import React,{useEffect,useState} from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function SectionSideBar(tools){

    const [sideBarPanelStyle,setSideBarPanelStyle] = useState({
        panelWidth: '20%',
        panelItemDisplay: 'block',
        displaySideBarButton: 'none'
    })

    const hidePanel = () => {
        setSideBarPanelStyle({
            panelWidth: '0',
            panelItemDisplay: 'none',
            displaySideBarButton: 'block'
        })

    }

    const showPanel = () => {
        setSideBarPanelStyle({
            displaySideBarButton: 'none',
            panelWidth: '20%',
            panelItemDisplay: 'block',
        })
    }

    return(
        <div id="projectSideBar" className='p-4 ' style={{width: sideBarPanelStyle.panelWidth}}>
            <p style={{display: sideBarPanelStyle.displaySideBarButton}} className="" onClick={showPanel}>X</p>
            <p style={{display: sideBarPanelStyle.panelItemDisplay}} onClick={tools.back}>Back</p>
            <p style={{display: sideBarPanelStyle.panelItemDisplay}} onClick={hidePanel}>hide panel</p>
            <div style={{display: sideBarPanelStyle.panelItemDisplay}} className='m-3 border border-danger'></div>
            <p id="Overview" style={{display: sideBarPanelStyle.panelItemDisplay}} onClick={tools.changeProjectSection}>Overview</p>
            <p id="Design" style={{display: sideBarPanelStyle.panelItemDisplay}} onClick={tools.changeProjectSection}>Design</p>
            <p id="Development" style={{display: sideBarPanelStyle.panelItemDisplay}} onClick={tools.changeProjectSection}>Development</p>
            <p id="Documentation" style={{display: sideBarPanelStyle.panelItemDisplay}} onClick={tools.changeProjectSection}>Documentation</p>
        </div>
    )
}