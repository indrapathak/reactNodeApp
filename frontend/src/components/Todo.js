// import { react } from "@babel/types";
import { Button, Card } from '@material-ui/core';
import React, { useState } from 'react';
//BELOW ARE HOOKS OF REACT WHICH HELP IN GETTING DATA FROM STORE AND ACCESING STATES,USE SELECTOR HOOKS IS USED TO FOR GETTING THE DATA STORED IN THE REDUX STORE
import { useSelector, useDispatch } from "react-redux";
import { addTodo,deleteTodo,removeTodo } from '../actions/index';
import { Col, Row } from 'reactstrap';

const Todo = () => {
    ///  These USESTATE AND USEDIPATCH ARE REACT HOOKS THAT ARE USED TO ACCESS STATE AND DISPATCH ACTIONS
    const [inputData, setInputData] = useState('');
    const list = useSelector((state) => state.todoReducer.list)
    const dispatch = useDispatch();
    console.log("inside TODO component function")
    return (
        <>
               <Card style={{ width: "60%", height: "50vh",marginTop:"20px" ,  marginLeft: "auto", marginRight:"auto",backgroundColor: 'white' }}>
                <figcaption>
                    <figure>Add Your List Here</figure>
                </figcaption>
                <Row>
                    <Col  xs={4}>
                    <input type="text" placeholder=" Add Item " value={inputData} onChange={(event) => setInputData(event.target.value)} />
                    </Col>
                    <Col  xs={4} >
                    <Button variant="contained" onClick={() => dispatch(addTodo(inputData), setInputData(''))}>Add Item</Button>
                    </Col>
                </Row>
                <Row >
                        {
                            list.map(element => {
                                return (
                                    <div className="eachItems" key={element.id}>
                                        <h3>{element.data}</h3>
                                        <Button variant="contained" onClick={() => dispatch(deleteTodo(element.id))}>Delete Item</Button>
                                    </div>
                                )
                            })
                        }
                </Row>
                <Row styel={{margin:"100px"}}>
                    <div className="showItems">
                        <Button variant="contained" onClick={() => dispatch(removeTodo())}>Remove All</Button>
                    </div>
                </Row>             
                </Card>
        </>
    )
}


export default Todo;