import React, { useState } from 'react'
import {Container, Collapse, Navbar, NavbarToggler, NavbarBrand,
     Nav, NavItem, NavLink, Col, Form, FormGroup, Label, Input, Button} from 'reactstrap'






const LogIn = () => {

    const [collapsed, setCollapesed] = useState(true);

    const toggleNavbar = () => setCollapesed(!collapsed)

    return(

        <>
        <Navbar color="info" light>
            <NavbarBrand>Wave Suggester</NavbarBrand>
            <NavbarToggler onClick={toggleNavbar} className="mr-2" />
            <Collapse isOpen={!collapsed} navbar>
                <Nav navbar>
                    <NavItem>
                        <NavLink>About</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink>Contact</NavLink>
                    </NavItem>
                </Nav>
            </Collapse>
        </Navbar>
        <Container className="sign " style={{width: '40rem' }}>
        <h2>Sign In</h2>
        <Form className="form">
          <Col>
            <FormGroup>
              <Label>Email</Label>
              <Input
                type="email"
                name="email"
                placeholder="myemail@email.com"
              />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Label>Password</Label>
              <Input
                type="password"
                name="password"
                placeholder="********"
              />
            </FormGroup>
          </Col>
          <Button>Submit</Button>
        </Form>
    
        </Container>

        </>
    


    )
  
  

}



export default LogIn
