import React,{useState} from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Button,Card } from 'react-bootstrap';
import {useSelector,useDispatch,useEffect} from "react-redux";
import {changeName,changeCompany,changeAddress,changeMobile,changeEmail,addFormData} from '../../actions/index';

//For callinng the API we will use use effect hook  



const ReduxHooksForm = () => {
 
    let [formInputData,setFormInputData] = useState({
        "name" : "",
        "email" : "",
        "address" : "",
        "mobile" : "",
        "company" : ""
    })

    let [formError,setFormError] = useState({
        "name" : "",
        "email" : "",
        "mobile" : "",
        "company" : "" ,
        "address" : ""
    })


    const dispatch = useDispatch();

    const updateField = e => {
        // console.log("update field function is called with value",e.target.value);
        setFormInputData({
          ...formInputData,
          [e.target.name]: e.target.value
        });
        // console.log("FormIinput data state is ",formInputData)
      };


    return (
        <Container>
    <Card style={{marginTop:'20px',marginLeft:'180px', backgroundColor:"#87B89F",borderBlockColor:"black",borderWidth:'10px',width:"700px",heignt:'700px',alignItems:"center" }}>
        <Form>
           <Form.Group className="mb-3" controlId="formBasicEmail" style={{width:"500px"}}>
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" name="name" placeholder="Enter Name"  onChange={(event)=> updateField(event)}  />               
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail"  style={{width:"500px"}}>
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email"  name="email" placeholder="Enter Email" onChange={(event)=> updateField(event)} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword"  style={{width:"500px"}}>
                <Form.Label>Mobile</Form.Label>
                <Form.Control type="mobile" placeholder="Mobile" name="mobile" onChange={(event)=> updateField(event)} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword"  style={{width:"500px"}}>
                <Form.Label>Address</Form.Label>
                <Form.Control type="text" placeholder="Address" name="address" onChange={(event)=> updateField(event)}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword"  style={{width:"500px"}}>
                <Form.Label>Company</Form.Label>
                <Form.Control type="text" placeholder="Company" name="company" onChange={(event)=> updateField(event)} />
            </Form.Group>

            <Button variant="dark" type="submit" onClick={()=>dispatch(addFormData(formInputData))} style={{marginLeft:'190px',marginBottom:"20px"}} >
                Submit
            </Button>
        </Form>
        </Card>
        </Container>
    )
}

export default ReduxHooksForm;
