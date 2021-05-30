import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap';
import "./style.css"

export default function SkillsTools() {
    return (
        <Container className="skillsToolsContainer">
            <Row>
                <Col>
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
                </Col>
                <Col></Col>
               
            </Row>
          
        </Container>
    )
}
