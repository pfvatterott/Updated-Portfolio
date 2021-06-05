import React, {useState} from 'react'
import './App.css';
import { Row, Col, Container, Section} from 'react-materialize';
import ParticlesBackground from "./components/ParticlesBackground"
import Logo from "./images/logo.png"
import { motion, useMotionValue, useTransform, AnimatePresence } from "framer-motion"
import AboutMe from "./pages/AboutMe"
import SkillsTools from "./pages/SkillsTools"
import Projects from "./pages/Projects"
import 'materialize-css';

function App() {
  var w = window.innerWidth;
  var h = window.innerHeight;
  let startingDragPoint = {}
  const x = useMotionValue(0)
  const [ mainVisible, setMainVisible ] = useState(true)
  const [ aboutMeVisible, setAboutMeVisible ] = useState(false)
  const [ skillsVisible, setSkillsVisible ] = useState(false)
  const [ projectsVisible, setProjectsVisible ] = useState(false)
  const [ mainTransition, setMainTransition ] = useState({y: -100, x: 0})
  const [ mainTransitionAnimate, setMainTransitionAnimate ] = useState({ y: h/4})
  const [ mainExitTransition, setMainExitTransition ] = useState({})
  
  console.log(h)

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

        <AnimatePresence>
            {mainVisible && (
              <Section>
               <motion.div
                  initial={mainTransition}
                  animate={mainTransitionAnimate}
                  transition={{ duration: 1 }}
                  exit={mainExitTransition}
                >
                  <Section>
                    <Row className="valign-wrapper center-align container">
                      <Col s={12}>
                        <h2>About Me</h2>
                      </Col>
                    </Row>
                    <br></br><br></br><br></br><br></br>
                    <Row className="valign-wrapper center-align container">
                      <Col s={4}>
                        <h2>Skills and Tools</h2>
                      </Col>
                      <Col s={4}>
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
                      <Col s={4}>
                        <h2>My Projects</h2>
                      </Col>
                    </Row>
                    <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
                    <Row className="valign-wrapper center-align container">
                      <Col>
                        <h2>Contact</h2>
                      </Col>
                    </Row>
                  </Section>
                </motion.div>
              </Section>  
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
