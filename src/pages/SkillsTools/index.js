import React from 'react'
import { Row, Col, Container, Button, Section} from 'react-materialize';
import Resume from "../../components/Resume"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDatabase } from "@fortawesome/free-solid-svg-icons"
import { faHtml5, faCss3, faWindows, faJsSquare, faNodeJs, faReact } from "@fortawesome/free-brands-svg-icons";
import { motion, useMotionValue, useTransform, AnimatePresence } from "framer-motion"
import ReactTooltip from 'react-tooltip';
import "./style.css"

export default function SkillsTools(props) {
    let startingDragPoint = {}
    const x = useMotionValue(0)
  
    function processDragInfo(x, y) {
        console.log(x, y, startingDragPoint)
        if ((startingDragPoint.x * 1.8) < x) {
            props.setSkillsVisible(false)
        }
    }
    return (
        <Section>
            <Row className="container valign-wrapper">
                <Col s={12} m={6} className="left-align" style={{paddingRight:"50px"}}>
                    <h3 class="header grey-text text-darken-3 lighten-3 left-align" data-aos="fade-right">Languages and Skills</h3>
                    <p class="grey-text text-darken-3 lighten-3 left-align" data-aos="fade-right">
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
                    <br/>
                    <a href="https://github.com/pfvatterott" target="_blank" data-tip="HTML5"
                        class="hoverable btn-floating btn-large languageIcons z-depth-4" data-aos="flip-left">
                        <i class="fab fa-html5 tooltipped"></i>
                        <ReactTooltip place="bottom" type="dark" effect="solid"/>
                    </a>
                    <a href="https://github.com/pfvatterott" target="_blank" data-tip="CSS3"
                        class="hoverable btn-floating btn-large languageIcons z-depth-4" data-aos="flip-left">
                        <i class="fab fa-css3 tooltipped"></i>
                        <ReactTooltip place="bottom" type="dark" effect="solid"/>
                    </a>
                    <a href="https://github.com/pfvatterott" target="_blank" data-tip="Visual Studio Code"
                        class="hoverable btn-floating btn-large languageIcons z-depth-4" data-aos="flip-left">
                        <i class="fab fa-windows tooltipped"></i>
                        <ReactTooltip place="bottom" type="dark" effect="solid"/>
                    </a>
                    <a href="https://github.com/pfvatterott" target="_blank" data-tip="JavaScript"
                        class="hoverable btn-floating btn-large languageIcons z-depth-4" data-aos="flip-left">
                        <i class="fab fa-js-square tooltipped"></i>
                        <ReactTooltip place="bottom" type="dark" effect="solid"/>
                    </a>
                    <a href="https://github.com/pfvatterott" target="_blank" data-tip="NodeJS"
                        class="hoverable btn-floating btn-large languageIcons z-depth-4" data-aos="flip-left">
                        <i class="fab fa-node-js tooltipped"></i>
                        <ReactTooltip place="bottom" type="dark" effect="solid"/>
                    </a>
                    <a href="https://github.com/pfvatterott" target="_blank" data-tip="MySql and NoSql"
                        class="hoverable btn-floating btn-large languageIcons z-depth-4" data-aos="flip-left">
                        <i class="fas fa-database  tooltipped"></i>
                        <ReactTooltip place="bottom" type="dark" effect="solid"/>
                    </a>
                    <a href="https://github.com/pfvatterott" target="_blank" data-tip="ReactJS"
                        class="hoverable btn-floating btn-large languageIcons z-depth-4" data-aos="flip-left">
                        <i class="fab fa-react  tooltipped"></i>
                        <ReactTooltip place="bottom" type="dark" effect="solid"/>
                    </a>
                </Col>
                   
                <Col s={12} m={6}>
                    <Resume/>
                </Col>
            </Row>
            <Row className="container">
                <Col s={8}>
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
                    <h3>Back to Main</h3>
                </Col>
            </Row>
        </Section>
    )
}
