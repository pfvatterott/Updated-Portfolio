import React, {useState} from 'react'
import './App.css';
import { Container, Row, Col, Navbar } from 'react-bootstrap';
import ParticlesBackground from "./components/ParticlesBackground"
import Logo from "./images/logo.png"
import { motion, useMotionValue, useTransform, AnimatePresence } from "framer-motion"
import AboutMe from "./pages/AboutMe"
import SkillsTools from "./pages/SkillsTools"
import Projects from "./pages/Projects"

function App() {
  let startingDragPoint = {}
  const x = useMotionValue(0)
  const [ mainVisible, setMainVisible ] = useState(true)
  const [ aboutMeVisible, setAboutMeVisible ] = useState(false)
  const [ skillsVisible, setSkillsVisible ] = useState(false)
  const [ projectsVisible, setProjectsVisible ] = useState(false)
  const [ mainTransition, setMainTransition ] = useState({y: -300})
  const [ mainTransitionAnimate, setMainTransitionAnimate ] = useState({ y: 300 })
  const [ mainExitTransition, setMainExitTransition ] = useState({})

  function processDragInfo(x, y) {
      console.log(x, y, startingDragPoint)
      if ((startingDragPoint.y / 2) > y) {
    
          setMainExitTransition({y: 1000})
          setAboutMeVisible(true)
          setMainVisible(false)
          setMainTransition({y: 1000 })
          setMainTransitionAnimate({ y: 300 })

      }
      else if ((startingDragPoint.x / 2) > x) {
        setMainExitTransition({x: 1000})
        setMainTransition({x: 1000, y: 300})
        setSkillsVisible(true)
        setMainVisible(false)
        setMainTransitionAnimate({ x: -100 })
      }
      else if ((startingDragPoint.x * 1.5) < x) {
        setMainExitTransition({x: -1000})
        setMainTransition({x: -1000, y: 300})
        setMainVisible(false)
        setProjectsVisible(true)
        setMainTransitionAnimate({ x: 100 })
      }
  }
  return (
    <div className="App">
      <ParticlesBackground mainVisible={mainVisible} aboutMeVisible={aboutMeVisible}>

        {/* Navbar */}
        <Navbar bg="dark" variant="dark" style={{zIndex: 5}}>
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
                  initial={mainTransition}
                  animate={mainTransitionAnimate}
                  transition={{ duration: 1 }}
                  exit={mainExitTransition}
                >
                  <Container className="mainPageContainer">
                    <Row>
                      <Col>
                        <h2>About Me</h2>
                      </Col>
                    </Row>
                    <br></br><br></br><br></br><br></br>
                    <Row className="align-horizontally">
                      <Col>
                        <h2>Skills and Tools</h2>
                      </Col>
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
                      <Col>
                        <h2>My Projects</h2>
                      </Col>
                    </Row>
                    <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
                    <Row>
                      <Col>
                        <h2>Contact</h2>
                      </Col>
                    </Row>
                  </Container>
                </motion.div>
              </Container>  
            )}  
          </AnimatePresence>   

        {/* about me section */}
        <AnimatePresence>
            {aboutMeVisible && (
              <Container fluid>
                <motion.div
                  initial={{ y: -1000 }}
                  animate={{ y: 300 }}
                  transition={{ duration: 1 }}
                  exit={{ y: -1000}}
                >
                  <AboutMe setAboutMeVisible={setAboutMeVisible} setMainVisible={setMainVisible}/>
                </motion.div>
              </Container>  
            )}  
        </AnimatePresence>

        <AnimatePresence>
            {skillsVisible && (
              <Container fluid>
                <motion.div
                  initial={{ x: -1000 }}
                  animate={{ x: 300 }}
                  transition={{ duration: 1 }}
                  exit={{ x: -1000}}
                >
                  <SkillsTools setMainVisible={setMainVisible} setSkillsVisible={setSkillsVisible}/>
                </motion.div>
              </Container>  
            )}  
        </AnimatePresence>  

        <AnimatePresence>
            {projectsVisible && (
              <Container fluid>
                <motion.div
                  initial={{ x: 1000 }}
                  animate={{ x: -300 }}
                  transition={{ duration: 1 }}
                  exit={{ x: 1000}}
                >
                  <Projects setMainVisible={setMainVisible} setProjectsVisible={setProjectsVisible}/>
                </motion.div>
              </Container>  
            )}  
        </AnimatePresence>          



      </ParticlesBackground>
    </div>
  );
}

export default App;
