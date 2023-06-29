import React from 'react'
import Accordion from 'react-bootstrap/Accordion';

function Accord(props) {

    let textClass = props.theme? "white-text fw-bold": "fw-bold"
    
  return (
    <Accordion defaultActiveKey="0" flush className='accordMain'>
    <Accordion.Item eventKey="0" className='accordItem'>
      <Accordion.Header className='accordHeader'>
        <span className={textClass}>
        What is the cost of an online course
        </span>
      </Accordion.Header>
      <Accordion.Body className='accordBody light-dark'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
        aliquip ex ea commodo consequat. Duis aute irure dolor in
        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
        culpa qui officia deserunt mollit anim id est laborum.
      </Accordion.Body>
    </Accordion.Item>
    <Accordion.Item eventKey="1" className='accordItem'>
      <Accordion.Header className='accordHeader'>
        <span className={textClass}>
        What do I need to take a course?
        </span>
      </Accordion.Header>
      <Accordion.Body className='accordBody light-dark'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
        aliquip ex ea commodo consequat. Duis aute irure dolor in
        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
        culpa qui officia deserunt mollit anim id est laborum.
      </Accordion.Body>
    </Accordion.Item>
    <Accordion.Item eventKey="2" className='accordItem'>
      <Accordion.Header className='accordHeader'>
      <span className={textClass}>
       What do I receive for taking this course?
        </span>
      </Accordion.Header>
      <Accordion.Body className='accordBody light-dark'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
        aliquip ex ea commodo consequat. Duis aute irure dolor in
        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
        culpa qui officia deserunt mollit anim id est laborum.
      </Accordion.Body>
    </Accordion.Item>
    <Accordion.Item eventKey="3" className='accordItem'>
      <Accordion.Header className='accordHeader'>
      <span className={textClass}>
      What willI get if I subscribe to this Certificate?
        </span>
      </Accordion.Header>
      <Accordion.Body className='accordBody light-dark'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
        aliquip ex ea commodo consequat. Duis aute irure dolor in
        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
        culpa qui officia deserunt mollit anim id est laborum.
      </Accordion.Body>
    </Accordion.Item>
    
  </Accordion>
  )
}

export default Accord