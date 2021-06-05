import React from 'react'
import { Parallax, Row, Col, Section, Icon} from 'react-materialize';
import profilePic from "../../images/profile-picture.jpg"
import Icons from "../../components/Icons"
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
        if ((startingDragPoint.y * 1.8) < y) {
            console.log('working')
            props.setAboutMeVisible(false)
            props.setMainVisible(true)
        }
    }


    return (

        <Section>
            <Row className="container">
            <Col s={12} m={6} className="center-align">
                <div>
                <br></br>
                <img class="circle main-profile-pic z-depth-3 hoverable scrollspy" id="Contact"
                    src={profilePic} alt="Paul Vatterott profile picture"/>
                <br></br>
                </div>
            </Col>
            <Col s={12} m={6} className="left-align">
            <div >
            <h2 class="header left-align">Paul Vatterott</h2>
            <h4 class="grey-text text-darken-3 lighten-3 left-align">Full-Stack Web Developer</h4>
            <p class="grey-text text-darken-3 lighten-3 left-align">Based out of Salt Lake City, Utah and
            employed at the Rustler
            Lodge in Alta. Currently in the University of Utah's Fullstack Web Development Bootcamp.</p>
            <br></br>
        </div>
                <Icons href="https://github.com/pfvatterott" iconName="fab fa-github tooltipped contact-icons" tooltip="working" tooltipOptions={{position: 'top'}}/>
                <Icons href="https://www.linkedin.com/in/paul-vatterott/" iconName="fab fa-linkedin-in tooltipped contact-icons"/>
                <Icons href="https://www.instagram.com/pppaaaauuuullllll/" iconName="fab fa-instagram tooltipped contact-icons"/>
                <Icons href="https://www.facebook.com/paul.vatterott/" iconName="fab fa-facebook tooltipped contact-icons"/>
                <Icons href="mailto:pfvatterott@gmail.com" iconName="far fa-envelope tooltipped contact-icons"/>
            </Col>
            </Row>
        </Section>
    )
}
