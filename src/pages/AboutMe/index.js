import React from 'react'
import { Container, Row, Col, Jumbotron } from 'react-bootstrap';
import profilePic from "../../images/profile-picture.jpg"
import Icons from "../../components/Icons"
import "./style.css"

export default function AboutMe() {
    return (

            <Container className="aboutMeContainer">
                <Row>
                    <Col>
                        <img className="rounded-circle profilePic" src={profilePic}></img>
                    </Col>
                    <Col>
                        <br></br><br></br>
                        <h2>Paul Vatterott</h2>
                        <h3>Full Stack Web Developer</h3>
                        <br></br>
                        <p>Based out of Salt Lake City, UT and recent graduate the University of Utah Web Development Bootcamp.</p>
                        <Icons href="https://github.com/pfvatterott" iconName="fab fa-github contact-icons"/>
                    </Col>
                </Row>
            </Container>
    )
}
