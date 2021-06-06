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
  const [ prepAboutMe, setPrepAboutMe ] = useState(false)
  const [ prepSkills, setPrepSkills ] = useState(false)
  const [ prepMainMenu, setPrepMainMenu ] = useState(false)
  
  console.log(h)

  function processDragInfo(x, y) {
      console.log(x, y, startingDragPoint)
      if ((startingDragPoint.y / 2) > y) {
          setPrepAboutMe(true)
          setMainExitTransition({y: h})
          setMainVisible(false)
          setMainTransition({y: h })
          setMainTransitionAnimate({ y: h/4 })

      }
      else if ((startingDragPoint.x / 2) > x) {
        setPrepSkills(true)
        setMainExitTransition({x: w})
        setMainTransition({x: w, y: h/4})  
        setMainVisible(false)
        setMainTransitionAnimate({ x: 0 })
      }
      else if ((startingDragPoint.x * 1.5) < x) {
        setMainExitTransition({x: -1000})
        setMainTransition({x: -1000, y: 300})
        setMainVisible(false)
        setProjectsVisible(true)
        setMainTransitionAnimate({ x: 100 })
      }
  }

  function processElementExit() {
    console.log(prepMainMenu)
    if (prepAboutMe === true) {
      setAboutMeVisible(true)
      setPrepAboutMe(false)
    }
    else if (prepSkills === true) {
      setSkillsVisible(true)
      setPrepSkills(false)
    }
  }

  return (
    <div className="App">
      <ParticlesBackground mainVisible={mainVisible} aboutMeVisible={aboutMeVisible}>

        <AnimatePresence onExitComplete={() => {processElementExit()}}>
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
        <AnimatePresence onExitComplete={() => {setMainVisible(true)}}>
            {aboutMeVisible && (
              <div>
                <motion.div
                  initial={{ y: -h }}
                  animate={{ y: h/4 }}
                  transition={{ duration: 1 }}
                  exit={{ y: -h}}
                >
                  <AboutMe setAboutMeVisible={setAboutMeVisible} setMainVisible={setMainVisible} setPrepMainMenu={setPrepMainMenu}/>
                </motion.div>
              </div>  
            )}  
        </AnimatePresence>

        {/* Skills Section */}
        <AnimatePresence onExitComplete={() => {setMainVisible(true)}}>
            {skillsVisible && (
              <div>
                <motion.div
                  initial={{ x: -w, y: h/6 }}
                  animate={{ x: 0 }}
                  transition={{ duration: 1 }}
                  exit={{ x: -w}}
                >
                  <SkillsTools setMainVisible={setMainVisible} setSkillsVisible={setSkillsVisible}/>
                </motion.div>
              </div>  
            )}  
        </AnimatePresence>  

        {/* Projects Section */}
        <AnimatePresence>
            {projectsVisible && (
              <div>
                <motion.div
                  initial={{ x: 1000 }}
                  animate={{ x: -300 }}
                  transition={{ duration: 1 }}
                  exit={{ x: 1000}}
                >
                  <Projects setMainVisible={setMainVisible} setProjectsVisible={setProjectsVisible}/>
                </motion.div>
              </div>  
            )}  
        </AnimatePresence>          



      </ParticlesBackground>
    </div>
  );
}

export default App;
