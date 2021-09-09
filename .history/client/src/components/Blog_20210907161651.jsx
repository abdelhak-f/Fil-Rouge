import React from 'react'
import {Container,Card, Button} from 'react-bootstrap';
import image from '../images/image.jpg';

function Blog() {
  return (
      
     <Container classeName="mt-4" style={{ width: "150% , marginTop: 60px "  }} >
         <Card >
           <Card.Header  >Featured FeaturedFeatured Featured FeaturedFeaturedFeaturedFeaturedFeatured FeaturedFeaturedFeaturedFeaturedFeaturedFeaturedFeaturedFeaturedFeaturedFeaturedFeaturedFeaturedFeaturedFeaturedFeaturedFeaturedFeaturedFeaturedFeaturedFeaturedFeaturedFeaturedFeaturedFeaturedFeaturedFeaturedFeatured</Card.Header>
            <Card.Img variant="top" src={image} />
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
