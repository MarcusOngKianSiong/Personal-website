import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function ProjectCard(tools){
    
    return(
        <Card className="shadow p-3 mb-5 bg-white rounded" style={{ width: '18rem',margin: '1%'}}>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                        <Card.Title>{tools.title}</Card.Title>
                        <Card.Text>
                            {tools.description}
                        </Card.Text>
                        <Button variant="primary" id={tools.title} onClick={tools.handleShowProjectDetails}>Go somewhere</Button>
                    </Card.Body>
        </Card>
    )
}