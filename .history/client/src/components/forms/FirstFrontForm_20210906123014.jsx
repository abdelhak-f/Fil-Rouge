import React  from 'react';
import {Form, Container,Jumbotron, Button, Row, Col} from 'react-bootstrap';


 function FirstFrontForm () {
  return (

    <Container className="mt-5 mb-3">
          
            <Col md={{ span: 7, offset: 3 }}>
              <Jumbotron>
                <Form>
                  <Form.Group>
                    <h2>Owner Information</h2>
                    <Form.Label>Name</Form.Label>
                    <Row>
                      <Col>
                        <Form.Control placeholder="First Name"></Form.Control>
                      </Col>
                      <Col>
                        <Form.Control placeholder="Last Name"></Form.Control>
                      </Col>
                    </Row>
                  </Form.Group>
                  <Row>
                    <Form.Group as={Col} controlId="formGridEmail">
                      <Form.Label>Email</Form.Label>
                      <Form.Control type="email" placeholder="Enter Email" />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridTel">
                      <Form.Label>Phone</Form.Label>
                      <Form.Control
                        type="telephone"
                        placeholder="Enter Phone Number"
                      />
                    </Form.Group>
                  </Row>
                  <Form.Group controlId="formGridAddress1">
                    <Form.Label>Address</Form.Label>
                    <Form.Control placeholder="1234 Main St" />
                  </Form.Group>
    
                  <Row>
                    
                    <Form.Group as={Col} controlId="formGridState">
                      <Form.Label>City</Form.Label>
                      <Form.Control as="select">
                        <option>Choose...</option>
                        <option>Youssoufia</option>
                        <option>Safi</option>
                        <option>Marrakech</option>
                        <option>Agadir</option>
                        <option>Casablanca</option>
                        <option>Rabat</option>
                      </Form.Control>
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridCityZip">
                      <Form.Label>Zip Code</Form.Label>
                      <Form.Control />
                    </Form.Group>
                  </Row>
                  <Row>
                    <Form.Group as={Col} controlId="formGridEmail">
                      <Form.Label>Vehicle Type</Form.Label>
                      <Form.Control type="email" placeholder="Enter Vehicle Type" />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridTel">
                      <Form.Label>Serial Number</Form.Label>
                      <Form.Control
                        type="telephone"
                        placeholder="Enter serial number"
                      />
                    </Form.Group>
                  </Row>
                  <Row>
                    <Form.Group className="" controlId="exampleForm.ControlTextarea1">
                      <Form.Label>Your description</Form.Label>
                      <Form.Control as="textarea" rows={3} 
                        placeholder="you can describe the anomalies of your vehicle to be repaired" 
                      />
                    </Form.Group>
                    <Form.Group>
                    <Form.Label>Select Appointment</Form.Label>
                    <Form.Control
                      type="date"
                      // value={date}
                      // onChange={this.setDate}
                    />
                  </Form.Group>
                  </Row>
                  <br />
                  

                  <Button className="mb-3"
                   variant="primary" type="submit">
                     Submit
                 </Button>
                 
                </Form>
              </Jumbotron>
            </Col>
            
         
        </Container>


   
    
  );
}

export default FirstFrontForm ;