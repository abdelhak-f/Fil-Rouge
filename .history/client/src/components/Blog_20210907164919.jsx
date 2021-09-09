import React from 'react'
import './css/style.css';
import {Container,Card, Button} from 'react-bootstrap';
import image from '../images/image.jpg';

function Blog() {
  return (

     <Container  className="Blog" >
         <Card >
           <Card.Header  >"Le nom de Garage"  </Card.Header>
            <Card.Img  src={image} />
            <Card.Body>
            <Card.Title>Special title treatment</Card.Title>
            <Card.Text>
                 With supporting text below as a natural lead-in to additional content.
            </Card.Text>
            <Button variant="primary">take an appointment</Button>
           </Card.Body>
        </Card>
     </Container>
  )
  
}

export default Blog
