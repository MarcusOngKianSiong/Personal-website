import React,{useEffect,useState} from "react";
import SubDetail from './subDetail'

export default function RequirementDetail(prop){

    const [detailName,setDetailName] = useState(`▶ ${prop.requirementDetailName}`)
    const [subDetails,setSubDetails] = useState(null)

    const openOrCloseDetail = (e) => {
        console.log(prop.details)
        if(subDetails === null){
            let subDetailElements = []
            prop.details.subDetails.forEach(subDetail=>{
                subDetailElements.push(<SubDetail subDetail={subDetail}/>)
            })
            setSubDetails(subDetailElements)
            setDetailName(`▼ ${prop.requirementDetailName}`)
        }else{
            setSubDetails(null)
            setDetailName(`▶ ${prop.requirementDetailName}`)
        }
        
    }

    return(
        <div>
            <div onClick={openOrCloseDetail}>{detailName}</div> 
            {subDetails}
        </div>
        
    )
}