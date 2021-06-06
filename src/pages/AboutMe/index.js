import React from 'react'
import { Row, Col, Section } from 'react-materialize';
import profilePic from "../../images/profile-picture.jpg"
import Icons from "../../components/Icons"
import { motion, useMotionValue } from "framer-motion"
import ReactTooltip from 'react-tooltip';
import "./style.css"

export default function AboutMe(props) {

    let startingDragPoint = {}
    const x = useMotionValue(0)
  
    function processDragInfo(x, y) {
        console.log(x, y, startingDragPoint)
        if ((startingDragPoint.y * 1.8) < y) {
            console.log('working')
            props.setAboutMeVisible(false)
            props.setPrepMainMenu(true)
        }
    }


    return (

        <Section>
            <Row className="container">
            <Col s={12} m={5} className="center-align">
                <div>
                <br></br>
                <img class="circle main-profile-pic z-depth-3 hoverable scrollspy" id="Contact"
                    src={profilePic} alt="Paul Vatterott profile picture"/>
                <br></br>
                </div>
            </Col>
            <Col s={12} m={5} className="left-align">
            <div >
                <h2 class="header left-align">Paul Vatterott</h2>
                <h4 class="grey-text text-darken-3 lighten-3 left-align">Full-Stack Web Developer</h4>
                <p class="grey-text text-darken-3 lighten-3 left-align">Based out of Salt Lake City, Utah and
                employed at the Rustler
                Lodge in Alta. Currently in the University of Utah's Fullstack Web Development Bootcamp.</p>
                <br></br>
            </div>
            <span style={{fontSize: "3em"}}>
            <a href="https://github.com/pfvatterott" target="_blank" data-tip="Github"
              class="hoverable btn-floating btn-large contact-icons z-depth-4" data-aos="flip-left">
              <i class="fab fa-github tooltipped iconImage" data-tooltip="Github"></i>
              <ReactTooltip place="bottom" type="dark" effect="solid"/>
            </a>
            <a href="https://www.linkedin.com/in/paul-vatterott/" target="_blank" data-tip="LinkedIn" style={{color: "#00bcd4"}}
              class="hoverable btn-floating btn-large contact-icons z-depth-4" data-aos="flip-left">
              <i class="fab fa-linkedin-in tooltipped iconImage" data-tooltip="LinkedIn"></i>
              <ReactTooltip place="bottom" type="dark" effect="solid"/>
            </a>
            <a href="https://www.instagram.com/pppaaaauuuullllll/" target="_blank" data-tip="Instagram" style={{color: "#00bcd4"}}
              class="hoverable btn-floating btn-large contact-icons z-depth-4" data-aos="flip-left">
              <i class="fab fa-instagram tooltipped iconImage" data-tooltip="Instagram"></i>
              <ReactTooltip place="bottom" type="dark" effect="solid"/>
            </a>
            <a href="https://www.facebook.com/paul.vatterott/" target="_blank" data-tip="Facebook" style={{color: "#00bcd4"}}
              class="hoverable btn-floating btn-large contact-icons z-depth-4" data-aos="flip-left">
              <i class="fab fa-facebook tooltipped iconImage" data-tooltip="Facebook"></i>
              <ReactTooltip place="bottom" type="dark" effect="solid"/>
            </a>
            <a href="mailto:pfvatterott@gmail.com" target="_blank" data-tip="Email: pfvatterott@gmail.com" style={{color: "#00bcd4"}}
              class="hoverable btn-floating btn-large contact-icons z-depth-4" data-aos="flip-left">
              <i class="far fa-envelope tooltipped iconImage" data-tooltip="Email"></i>
              <ReactTooltip place="bottom" type="dark" effect="solid"/>
            </a>
          </span>
            
            </Col>
            <Col s={12} m={2}>
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
        </Section>
    )
}
