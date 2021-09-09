import React from 'react'
import {Container,Card, Button} from 'react-bootstrap';

function Blog() {
  return (
      
     <Container className="mt-4>
         <Card>
  <Card.Header>Featured</Card.Header>
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
