import React,{useState} from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import query from '../assets/functions/query.js'

export default function Login(tools){

    const [loginDetails,setLoginDetails] = useState({
        email: "",
        password: ""
    })

    const handleSubmit = async () => {
    
        const linkQuery = query.query(loginDetails);
        console.log(linkQuery)
        await fetch('https://ec1b21dhj7.execute-api.ap-southeast-1.amazonaws.com/systemDesignAndDevelopment'+linkQuery,{method: 'post'})
        .then(res=>{
            return res.json()
        })
        .then(res=>{
            if(res.outcome){
                console.log("SUCCESS: ",res)
                sessionStorage.setItem('token',res.JWTtoken)
                tools.login()
            }else{
                console.log("ERROR: ",res.reason)
            }
        })
        
    }
    
    const handleChange = (e) => {
        const value = e.target.value;
        const inputType = e.target.type;
        const newValue = {...loginDetails};
        newValue[inputType] = value;
        setLoginDetails(newValue);
        
    }

    return (
        <div className="d-flex align-items-center justify-content-center w-50 h-100">
            
            <Form className=" w-50" onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" value={loginDetails.email} onChange={handleChange}/>
                    <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" value={loginDetails.password} onChange={handleChange}/>
                </Form.Group>
                <Button variant="primary" type="button" onClick={handleSubmit}>
                    Submit
                </Button>
            </Form>
        </div>
        
    )
}