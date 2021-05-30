import React, {useState} from 'react'
import './App.css';
import { Container, Row, Col, Navbar } from 'react-bootstrap';
import ParticlesBackground from "./components/ParticlesBackground"
import Logo from "./images/logo.png"
import {
  motion,
  useMotionValue,
  useTransform,
  AnimatePresence
} from "framer-motion"
import AboutMe from "./pages/AboutMe"

function App() {
  let startingDragPoint = {}
  const x = useMotionValue(0)
  const [mainVisible, setMainVisible] = useState(true)
  const [aboutMeVisible, setAboutMeVisible] = useState(false)

  function processDragInfo(x, y) {
      console.log(x, y, startingDragPoint)
      if ((startingDragPoint.y / 2) > y) {
          console.log('working')
          setAboutMeVisible(true)
          setMainVisible(false)
      }
  }
  return (
    <div className="App">
      <ParticlesBackground mainVisible={mainVisible} aboutMeVisible={aboutMeVisible}>

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
                <Row className="AboutMeAlign">
                  <Col>
                    <h2>About Me</h2>
                  </Col>
                </Row>
                <Row className="vertical-align">
                  <Col>
                    <motion.div>
                      <motion.div
                        drag
                        dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
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
                </Row>
                <Row className="ContactAlign">
                  <Col>
                    <h2>Contact</h2>
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
                  <AboutMe />
                </motion.div>
              </Container>  
            )}  
          </AnimatePresence>      



      </ParticlesBackground>
    </div>
  );
}

export default App;
