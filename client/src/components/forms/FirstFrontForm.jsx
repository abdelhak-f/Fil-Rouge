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
                    {/* <Form.Group as={Col} controlId="formGridCity">
                      <Form.Label>City</Form.Label>
                      <Form.Control />
                    </Form.Group> */}
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
                        placeholder="Enter Your Description" 
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







  //   <Container>
  //      <Form >
     
  //    <Form.Group className="mb-3" controlId="formBasicEmail">
  //      <Form.Label>First Name </Form.Label>
  //      <Form.Control type="text" placeholder="Enter Your Name" />
  //    </Form.Group>
  //    <Form.Group>
  //    <Row>
  //      <Col>
  //      <Form.Control type="text" placeholder="Enter Your Name" />
  //      </Col>
  //      <Col>
  //      <Form.Control type="text" placeholder="Enter Your Name" />
  //      </Col>
  //    </Row>
  //    </Form.Group>
     
   
  //    <Form.Group className="mb-3 "  controlId="formBasicEmail">
  //      <Form.Label>Last Name</Form.Label>
  //      <Form.Control type="text" placeholder="Enter Your Last Name" />
  //    </Form.Group>
   
  //    <Form.Group className="mb-3 " controlId="formBasicEmail">
  //      <Form.Label>Email address</Form.Label>
  //      <Form.Control type="email" placeholder="Enter email" />
  //      <Form.Text className="text-muted">
  //        We'll never share your email with anyone else.
  //      </Form.Text>
  //    </Form.Group>
   
  //    <Form.Group className="mb-3" controlId="formBasicPassword">
  //      <Form.Label>Password</Form.Label>
  //      <Form.Control type="password" placeholder="Password" />
  //    </Form.Group>
  //    {/* <Form.Group as={Col} controlId="formGridCity">
  //        <Form.Label>City</Form.Label>
  //        <Form.Control />
  //      </Form.Group>
   
  //      <Form.Group as={Col} controlId="formGridState">
  //        <Form.Label>State</Form.Label>
  //        <Form.Select defaultValue="Choose...">
  //          <option>Choose...</option>
  //          <option>...</option>
  //        </Form.Select>
  //      </Form.Group>
   
  //      <Form.Group as={Col} controlId="formGridZip">
  //        <Form.Label>Zip</Form.Label>
  //        <Form.Control />
  //      </Form.Group> */}
  //      <Form.Group className="mb-3" controlId="formBasicCheckbox">
  //      <Form.Check type="checkbox" label="Check me out" />
  //    </Form.Group>
  //    <Button variant="primary" type="submit">
  //      Submit
  //    </Button>
     
  //  </Form>
  //   </Container>
   
    
  );
}

export default FirstFrontForm ;