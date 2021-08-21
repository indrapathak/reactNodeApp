import React from 'react'
import { Card } from '@material-ui/core';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
function Login() {
    return (

        <Card style={{ width: "60%", height: "50vh", marginTop: "20px", marginLeft: "auto", marginRight: "auto", backgroundColor: 'light', borderRightColor: 'red' }}>
            <div style={{ marginTop: "100px", marginLeft: "300px", marginRight: "350px", backgroundColor: 'brown', borderRadius: '10px' }} >
                <Button href="https://learningreactappsignup.auth.us-west-2.amazoncognito.com/login?client_id=5pcftmm30ip2tlgsi9nva5u8pi&response_type=code&scope=email+openid&redirect_uri=http://localhost:3000/todo" class="btn btn-light">AWS Sign Up Page</Button>
            </div>
        </Card>

    )
}

export default Login
