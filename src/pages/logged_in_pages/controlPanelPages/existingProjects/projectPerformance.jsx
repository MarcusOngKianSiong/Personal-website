import React,{useState,useEffect} from "react";
import CompletionLevel from '../../assets/completionLevel'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function ProjectPerformance(tools){
    return(
        <div className="d-flex flex-column flex-row " style={{height: '100%','flex-grow': "1"}}>
            <div className="flex-row d-flex justify-content-center">
                        <div className="m-4">
                            <CompletionLevel title={"Overall"} changeProjectPage={tools.changeProjectPage}/>
                        </div>
                        
            </div>
            <div className="d-flex p-5 justify-content-center ">
                        <div className="m-4">
                            <CompletionLevel title={"Design"} changeProjectPage={tools.changeProjectPage}/>
                        </div>
                        <div className="m-4">
                            <CompletionLevel title={"Development"} changeProjectPage={tools.changeProjectPage}/>
                        </div>
                        <div className="m-4">
                            <CompletionLevel title={"Documentation"} changeProjectPage={tools.changeProjectPage}/>
                        </div>
            </div>
        </div>
    )
}