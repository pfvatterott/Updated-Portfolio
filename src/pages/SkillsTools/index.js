import React from 'react'
import { Container, Row, Col, Button, OverlayTrigger, Tooltip } from 'react-bootstrap';
import Resume from "../../components/Resume"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDatabase } from "@fortawesome/free-solid-svg-icons"
import { faHtml5, faCss3, faWindows, faJsSquare, faNodeJs, faReact } from "@fortawesome/free-brands-svg-icons";
import { motion, useMotionValue, useTransform, AnimatePresence } from "framer-motion"
import "./style.css"

export default function SkillsTools(props) {
    let startingDragPoint = {}
    const x = useMotionValue(0)
  
    function processDragInfo(x, y) {
        console.log(x, y, startingDragPoint)
        if ((startingDragPoint.x * 1.8) < x) {
            console.log('working')
            props.setSkillsVisible(false)
            props.setMainVisible(true)
        }
    }
    return (
        <Container className="skillsToolsContainer">
            <Row>
                <Col style={{marginRight: "50px"}}>
                    <h3>Languages and Skills</h3>
                    <p>
                        <br/>
                        Since starting the University of Utah Web Development Program I have gone all in to hone my skills to be
                        ready for the job market. My natural curiosity paired with a strong work ethic means I am always looking to
                        improve my skills.
                        <br/><br/>
                        Through past experiences leading countless outdoors expeditions I have acquired the ability to work with and
                        manage teams of varying sizes. I naturally like to take the reins to solve problems while also feeling
                        content to step back and learn from others.
                        <br/><br/>
                        Once I earn my certificate from the University of Utah I will be joining the job search as a full-stack web
                        developer. Until then, please reach out if you'd like to talk or collaborate!
                    </p>
                    <span>
                        <OverlayTrigger
                            placement="bottom"
                            delay={{ show: 250, hide: 400 }}
                            overlay={<Tooltip>HTML5</Tooltip>}
                        >
                            <Button
                                className="skills-icons"
                            >
                                <FontAwesomeIcon icon={faHtml5} />
                            </Button>
                        </OverlayTrigger>
                        <OverlayTrigger
                            placement="bottom"
                            delay={{ show: 250, hide: 400 }}
                            overlay={<Tooltip>CSS3</Tooltip>}
                        >
                            <Button
                                className="skills-icons"
                            >
                                <FontAwesomeIcon icon={faCss3} />
                            </Button>
                        </OverlayTrigger>
                        <OverlayTrigger
                            placement="bottom"
                            delay={{ show: 250, hide: 400 }}
                            overlay={<Tooltip>VS Code</Tooltip>}
                        >
                            <Button
                                className="skills-icons"
                            >
                                <FontAwesomeIcon icon={faWindows} />
                            </Button>
                        </OverlayTrigger>
                        <OverlayTrigger
                            placement="bottom"
                            delay={{ show: 250, hide: 400 }}
                            overlay={<Tooltip>JavaScript</Tooltip>}
                        >
                            <Button
                                className="skills-icons"
                            >
                                <FontAwesomeIcon icon={faJsSquare} />
                            </Button>
                        </OverlayTrigger>
                        <OverlayTrigger
                            placement="bottom"
                            delay={{ show: 250, hide: 400 }}
                            overlay={<Tooltip>Node-JS</Tooltip>}
                        >
                            <Button
                                className="skills-icons"
                            >
                                <FontAwesomeIcon icon={faNodeJs} />
                            </Button>
                        </OverlayTrigger>
                        <OverlayTrigger
                            placement="bottom"
                            delay={{ show: 250, hide: 400 }}
                            overlay={<Tooltip>MySql & MongoDB</Tooltip>}
                        >
                            <Button
                                className="skills-icons"
                            >
                                <FontAwesomeIcon icon={faDatabase} />
                            </Button>
                        </OverlayTrigger>
                        <OverlayTrigger
                            placement="bottom"
                            delay={{ show: 250, hide: 400 }}
                            overlay={<Tooltip>ReactJS</Tooltip>}
                        >
                            <Button
                                className="skills-icons"
                            >
                                <FontAwesomeIcon icon={faReact} />
                            </Button>
                        </OverlayTrigger>
                    </span>
                </Col>
                <Col>
                    <Resume />
                </Col>
            </Row>
            <br></br><br></br>
            <Row>
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
                            </motion.div>
                    </motion.div>
                </Col>
                <Col>
                    <h2>Back to Main</h2>
                </Col>
            </Row>
          
        </Container>
    )
}
