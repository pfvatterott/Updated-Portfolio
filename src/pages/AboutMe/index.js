import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap';
import profilePic from "../../images/profile-picture.jpg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { faGithub, faLinkedinIn, faInstagram, faFacebook } from "@fortawesome/free-brands-svg-icons";
import { motion, useMotionValue, useTransform, AnimatePresence } from "framer-motion"
import "./style.css"

export default function AboutMe(props) {

    let startingDragPoint = {}
    const x = useMotionValue(0)
  
    function processDragInfo(x, y) {
        console.log(x, y, startingDragPoint)
        if ((startingDragPoint.x * 1.8) < x) {
            console.log('working')
            props.setAboutMeVisible(false)
            props.setMainVisible(true)
        }
    }


    return (

        <Container className="aboutMeContainer">
            <Row>
                <Col>
                    <img className="rounded-circle profilePic" src={profilePic}></img>
                </Col>
                <Col>
                    <br></br>
                    <h2>Paul Vatterott</h2>
                    <h3>Full Stack Web Developer</h3>
                    <br></br>
                    <p>Based out of Salt Lake City, UT and recent graduate the University of Utah Web Development Bootcamp.</p>
                    <span>
                        <a href={"https://github.com/pfvatterott"} target="_blank">
                            <Button
                                className="contact-icons"
                            >
                                <FontAwesomeIcon icon={faGithub} />
                            </Button>
                        </a>
                        <a href={"https://www.linkedin.com/in/paul-vatterott/"} target="_blank">
                            <Button
                                className="contact-icons"
                            >
                                <FontAwesomeIcon icon={faLinkedinIn} />
                            </Button>
                        </a>
                        <a href={"https://www.instagram.com/pppaaaauuuullllll/"} target="_blank">
                            <Button
                                className="contact-icons"
                            >
                                <FontAwesomeIcon icon={faInstagram} />
                            </Button>
                        </a>
                        <a href={"https://www.facebook.com/paul.vatterott/"} target="_blank">
                            <Button
                                className="contact-icons"
                            >
                                <FontAwesomeIcon icon={faFacebook} />
                            </Button>
                        </a>
                        <a href={"mailto:pfvatterott@gmail.com"} target="_blank">
                            <Button
                                className="contact-icons"
                            >
                                <FontAwesomeIcon icon={faEnvelope} />
                            </Button>
                        </a>
                    </span>
                </Col>
            </Row>
            <br></br><br></br><br></br>
            <Row>
                <Col></Col>
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
                    <h3>Back To Main</h3>
                </Col>
            </Row>
        </Container>
    )
}
