import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button'

export default function ControlPanel(tools){
    return(
        <div onClick={tools.logout}>
            <Button>Logout</Button>
            THIS IS THE CONTROL PANEL.
        </div>
    )
}