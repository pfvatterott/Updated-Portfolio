import React from 'react'
import resumeScreenShot from "../../images/resume-screenshot.png"
import resumeDownload from "../../images/Paul Vatterott Resume.pdf"
import { Container, Row, Col, Button } from 'react-bootstrap';
import "./style.css"

export default function Resume() {


    return (
        <div>
            <img src={resumeScreenShot} className="resumeScreenshot" />
            <br></br> <br></br>
            <a href={resumeDownload} download ><Button className="downloadButton">Download PDF</Button></a>
        </div>
    )
}
