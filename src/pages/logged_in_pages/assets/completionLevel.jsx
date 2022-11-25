import React,{useEffect,useState,useRef} from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend, Title  } from 'chart.js';
import { Doughnut, Bar, getElementAtEvent  } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend, Title);






export default function CompletionLevel(tools){
    
    const dataConfiguration = {
        labels: ['Accomplished objectives','Objectives not accomplished'],
        datasets: [
          {
            data: [3,10],
            backgroundColor: [
              'rgba(75, 192, 192, 1)',
              'rgba(255, 99, 132, 1)',
            ],
            borderWidth: 3,
          }
        ],
    }
    
    const chartConfiguration = {
        Plugins: {
            title: {
                display: true,
                text: tools.title
            }
        },
        options: {
            events: ['click']
        },
        // CLicked on specific graph components... -> Completed/incomplete part of that project component
        onClick: (e,activeEls)=>{
            let datasetIndex = activeEls[0].datasetIndex;
            let dataIndex = activeEls[0].index;
            let datasetLabel = e.chart.data.labels[dataIndex];
            console.log("Element CLiked: ",datasetLabel)
            console.log(tools.title)
            tools.changeProjectPage({component: tools.title,completeOrIncomplete: datasetLabel})
        }
    }
    
    // When clicked on title.... -> Complete and incomplete part of the project component
    const handleShowComponent = (e) => {
        const componentName = e.target.textContent
        console.log(componentName)
        tools.changeProjectPage({component: tools.title,completeOrIncomplete: "all"})
    }

    const [graphData,setGraphData] = useState(dataConfiguration)

    // CLICK TITLE
    // CLICK SOMETHING SMALL
    
    return(
        <div className="">
            <h4 onClick={handleShowComponent}>{tools.title}</h4>
            <Doughnut data={graphData} options={chartConfiguration}/>
        </div>
    )
}