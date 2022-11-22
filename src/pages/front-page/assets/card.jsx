import React from "react";
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Systems from './systems.jpeg'

export default function ACard(){
    return (
        <Card className="shadow p-3 mb-5 bg-white rounded">
            <Card.Img className="" src={Systems}/>
            <Card.Body>
                <Card.Title>Something</Card.Title>
                <Card.Text>
                    Description of something
                </Card.Text>
                <Button>View Documentation</Button>               
            </Card.Body>
        </Card>
    )
}