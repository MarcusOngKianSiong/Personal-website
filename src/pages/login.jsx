import React,{useState} from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import query from '../assets/functions/query.js'

export default function Login(){

    const [loginDetails,setLoginDetails] = useState({
        email: "",
        password: ""
    })

    const handleSubmit = () => {
        const query = query.query(loginDetails);
        console.log(query);
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
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
        
    )
}