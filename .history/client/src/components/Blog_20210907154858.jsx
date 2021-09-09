import React from 'react'
import {Container,Card, Button} from 'react-bootstrap';

function Blog() {
  return (
      
     <Container >
         <Card>
           <Card.Header>Featured</Card.Header>
            <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
            <Card.Body>
            <Card.Title>Special title treatment</Card.Title>
            <Card.Text>
                 With supporting text below as a natural lead-in to additional content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
           </Card.Body>
        </Card>
     </Container>
     
  )
}

export default Blog
