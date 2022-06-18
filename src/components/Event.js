import React, { useEffect, useState } from "react";
import temp1Img from '../images/bgimg-1.jpg'
import {Card,Button} from 'react-bootstrap'
import {useNavigate} from 'react-router-dom'

function Event() {
 
  let navigate=useNavigate()

  return (
    <>
      <div className="template-1">
          <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={temp1Img} />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
        <Button variant="primary" onClick={()=>navigate('/template1')}>Try This</Button>
      </div>
    </>
  );
}

export default Event;
