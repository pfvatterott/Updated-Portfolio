import React from 'react'
import { Row, Col, Container, Button, Section} from 'react-materialize';
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
        <Section>
            <Row className="container valign-wrapper">
                <Col s={12} m={6} className="left-align">
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
                    <Button
                        floating
                        className="fab fa-html5 languageIcons z-depth-4"
                        large
                        node="button"
                        tooltip="HTML5"
                    />
                     <Button
                        floating
                        className="fab fa-css3 languageIcons z-depth-4"
                        large
                        node="button"
                        tooltip="CSS3"
                    />
                     <Button
                        floating
                        className="fab fa-windows languageIcons z-depth-4"
                        large
                        node="button"
                        tooltip="Visual Studio Code"
                    />
                     <Button
                        floating
                        className="fab fa-js-square languageIcons z-depth-4"
                        large
                        node="button"
                        tooltip="JavaScript"
                    />
                     <Button
                        floating
                        className="fab fa-node-js languageIcons z-depth-4"
                        large
                        node="button"
                        tooltip="NodeJS"
                    />
                     <Button
                        floating
                        className="fas fa-database languageIcons z-depth-4"
                        large
                        node="button"
                        tooltip="MySql and NoSql"
                    />
                    <Button
                        floating
                        className="fab fa-react languageIcons z-depth-4"
                        large
                        node="button"
                        tooltip="ReactJS"
                    />
                </Col>
                <Col s={12} m={1}></Col>    
                <Col s={12} m={5}>
                    <Resume/>
                </Col>
            </Row>
        </Section>
    )
}
