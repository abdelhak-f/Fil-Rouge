import React from 'react'
import './css/style.css';
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { Container, Card, Button, Col, Row } from 'react-bootstrap';
import image from '../images/image.jpg';
// import FormGarage from './forms/FormGarage'



function Blog() {
  return (
        <> 
     <Container  className="Blog" >
         {/* first blog */}
         <Card >
           <Card.Header  >"Le nom de Garage"  </Card.Header>
            <Card.Img 
            style={{ height: '400px', weiht: '500px' }}
             src={image} />
            <Card.Body
             style={{ height: '400px', weiht: '500px' }}
            >
            <Card.Title>Special title treatment</Card.Title>
            <Card.Text>
                 With supporting text below as a natural lead-in to additional content.
                 With supporting text below as a natural lead-in to additional content.
                 With supporting text below as a natural lead-in to additional content.
                 With supporting text below as a natural lead-in to additional content.
                 With supporting text below as a natural lead-in to additional content.
                 With supporting text below as a natural lead-in to additional content.
                 With supporting text below as a natural lead-in to additional content.
                 With supporting text below as a natural lead-in to additional content.
                 With supporting text below as a natural lead-in to additional content.
                 With supporting text below as a natural lead-in to additional content.
                 With supporting text below as a natural lead-in to additional content.
                 With supporting text below as a natural lead-in to additional content.
                 With supporting text below as a natural lead-in to additional content.
                 With supporting text below as a natural lead-in to additional content.
                 With supporting text below as a natural lead-in to additional content.
                 With supporting text below as a natural lead-in to additional content.
                 With supporting text below as a natural lead-in to additional content.
            </Card.Text>
            <Card.Title>Adress of Garage</Card.Title>
            <Button as='Col' className="badge" variant="info">
              <NavLink to="/FormGarage" >take an appointment</NavLink> 
            </Button>  
            
           </Card.Body>
        </Card>

        <Card className="Blog">
           <Card.Header  >"Le nom de Garage"  </Card.Header>
            <Card.Img  
             style={{ height: '350px', weiht: '500px' }}
            src={image} />
            <Card.Body>
            <Card.Title>Special title treatment</Card.Title>
            <Card.Text>
                 With supporting text below as a natural lead-in to additional content.
            </Card.Text>
           
            <Row>
               <Col>
               <Button className="badge" variant="info">take an appointment</Button>
               </Col>
               <Col>
               {/* <>Special title treatment</> */}
               </Col>
            </Row>
           </Card.Body>
        </Card>

        {/* second blog */}
        
     </Container>




{/* <Router>
    <Switch>
     <Route  path="/" component={FormGarage} /> 
    </Switch>

</Router> */}

</>
     
  )
  
}

export default Blog
