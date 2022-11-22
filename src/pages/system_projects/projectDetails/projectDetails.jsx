import React,{useEffect,useState} from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css';
import SectionSideBar from './assets/section_sidebar'
import Overview from './sections/overview/overview'
import Design from './sections/design/design'
import Development from './sections/development/development'
import Documentation from './sections/documentation/documentation'


export default function ProjectDetails(tools){

    const [detailSection,setDetailSection] = useState(null)


    const getProjectOverview = () => {
        const projectName = tools.projectName;
        
        // Fetch project overview from the database
        // fetch()
    }
    
    const changeProjectSection = (e) => {
        const sectionName = e.target.id
        if(sectionName === "Overview"){
            setDetailSection(<Overview/>)
        }
        if(sectionName === "Design"){
            setDetailSection(<Design/>)
        }
        if(sectionName === "Development"){
            setDetailSection(<Development/>)
        }
        if(sectionName === "Documentation"){
            setDetailSection(<Documentation/>)
        }
    }

    useEffect(()=>{
        setDetailSection(<Overview/>)
    },[])

    return(
        <div className='h-100 d-flex'>
            <SectionSideBar back={tools.back} changeProjectSection={changeProjectSection}/>
            <div> 
                <h2>{tools.projectName}</h2>
                <div>
                    {detailSection}
                </div>
            </div>
        </div>
    )

}