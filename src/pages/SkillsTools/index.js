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
                    <h3 class="header grey-text text-darken-3 lighten-3 left-align" data-aos="fade-right">Skills and Tools</h3>
                    <p class="grey-text text-darken-3 lighten-3 left-align" data-aos="fade-right">
                        <br/>
                        Full Stack Web Developer Bootcamp graduate with a passion for problem solving, working with others, learning, and making products I’m proud of. My natural curiosity paired with a strong work ethic means I am always looking to improve my skills.
                        <br/><br/>
                        Through past experiences leading countless outdoors expeditions I have acquired the ability to work with and manage teams of varying sizes. I naturally like to take the reins to solve problems while also feeling content to step back and learn from others.
                        <br/><br/>
                        I am currently looking for new employment! An ideal job would be challenging and provide ways to improve my Web Development skills. If you are a recruiter or someone looking to collaborate please reach out!
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
