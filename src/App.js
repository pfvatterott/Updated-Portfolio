import React, {useState} from 'react'
import './App.css';
import { Card, Button, Container, Row, Col, Navbar } from 'react-bootstrap';
import ParticlesBackground from "./components/ParticlesBackground"
import Logo from "./images/logo.png"
import {
  motion,
  useMotionValue,
  useTransform,
  AnimatePresence
} from "framer-motion"

function App() {
  let startingDragPoint = {}
  const x = useMotionValue(0)
  const [mainVisible, setMainVisible] = useState(true)
  const [aboutMeVisible, setAboutMeVisible] = useState(false)

  function processDragInfo(x, y) {
      console.log(x, y, startingDragPoint)
      if (x < 500) {
          console.log('working')
          setAboutMeVisible(true)
          setMainVisible(false)
      }
  }
  return (
    <div className="App">
      <ParticlesBackground>
        {/* Navbar */}
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="#home">
              <img
                alt=""
                src={Logo}
                width="30"
                height="30"
                className="d-inline-block align-top"
              />{' '}
            React Bootstrap
          </Navbar.Brand>
          </Container>
        </Navbar>



        <AnimatePresence>
            {mainVisible && (
              <Container fluid>
               <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <Row className="vertical-align">
            <Col>
              <h3>About Me</h3>
            </Col>
            <Col>
              <motion.div>
                <motion.div
                  drag
                  dragConstraints={{ top: -50, left: -50, right: 50, bottom: 50 }}
                  style={{ x }}
                  onDragStart={
                    (event, info) => startingDragPoint = { x: info.point.x, y: info.point.y }
                  }
                  onDragEnd={
                    (event, info) => processDragInfo(info.point.x, info.point.y)
                  }
                >
                  <img className="dragItem" draggable="false" src="./images/clipart1869989.png"></img>
                  {/* </motion.div> */}
                </motion.div>
              </motion.div>
            </Col>
            <Col>
              <h3>Projects</h3>
            </Col>
          </Row>
                </motion.div>
              </Container>  
            )}  
          </AnimatePresence>   

        {/* about me section */}
        <AnimatePresence>
            {aboutMeVisible && (
              <Container fluid>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <Card style={{ width: '18rem' }}>
                  <Card.Img variant="top" src="holder.js/100px180" />
                  <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and make up the bulk of
                      the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                  </Card.Body>
                </Card>
                </motion.div>
              </Container>  
            )}  
          </AnimatePresence>      



      </ParticlesBackground>
    </div>
  );
}

export default App;
