import React, { useState } from "react";
import {Form ,Button } from 'react-bootstrap'

const FormIn = () => {
    const [state , setState] = useState({
        fullname:"",
        email:"",
        password:""
    })

    let submit=((e)=>{
        e.preventDefault();
        alert(`Hello ${state.fullname} You can now contact us on 03118816018`)
           
           
    })

    let InputEvent =(event)=>{
        const {name,value}=event.target;
        setState((preVal)=>{
            return{
                ...preVal,
                [name] : value,
            }
        })

    }

    return (
        <>
            <div className="col-md-6 col-12 order-2 order-lg-2 mb-3">
            <Form onSubmit={submit}>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>FullName</Form.Label>
                    <Form.Control name="fullname" value={state.fullname} onChange={InputEvent} type="text" placeholder="Name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control name="email" value={state.email} onChange={InputEvent} type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name="password" value={state.password} onChange={InputEvent} type="password" placeholder="Password" />
                </Form.Group>
               
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
            </div>
        </>
    )
}

export default FormIn
