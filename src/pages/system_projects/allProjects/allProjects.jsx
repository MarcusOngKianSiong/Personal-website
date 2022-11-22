import React,{useState,useEffect} from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import ProjectCard from './assets/projectCard'
import 'bootstrap/dist/css/bootstrap.min.css';
export default function AllProjects(tools){
    
    const [projectCards,setProjectCards] = useState(null)

    const handleShowProjectDetails = (e) => {
        const projectName = e.target.id;
        tools.showProjectDetails(projectName);
    }

    

    const getAllProjects = () => {
        // Go into the database and pull out all project details.
        // fetch('#/getAllProjects')
        // .then(res=>{
        //     return res.json()
        // })
        // .then(res=>{
            
        // })
        return [
            {
                title: "hello",
                description: "something about hello"
            },
            {
                title: "goodbye",
                description: "something about goodbye"
            }
        ]
    }
    
    const showAllProjects = () => {
        const projects = getAllProjects()
        const listOfCards = createProjectCards(projects)
        setProjectCards(listOfCards)
    }

    const createProjectCards = (projects) => {
        // Data should be in the form of an array
        // Each array item should be an object
        // Each object should have these items: title, description
        const listOfCards = [];
        projects.forEach(project=>{
            listOfCards.push(<ProjectCard 
                title={project.title} 
                description={project.description} 
                handleShowProjectDetails={handleShowProjectDetails}
            />)
        })
        return listOfCards
    }

    useEffect(()=>{
        showAllProjects()
    },[])
    
    return(
        <div className=' p-5 w-100 h-100'>
            <h1 className='m-5'>All Projects</h1>
            <div className='d-flex'>
                {projectCards}
            </div>
        </div>
    )
}