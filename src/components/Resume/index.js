import React from 'react'
import resumeScreenShot from "../../images/resume-screenshot.png"
import resumeDownload from "../../images/Paul Vatterott Resume.pdf"
import { MediaBox } from 'react-materialize';
import "./style.css"

export default function Resume() {


    return (
        <div>
            <MediaBox
                id="resume"
                className="z-depth-3 hoverable center-align"
                options={{
                    inDuration: 275,
                    onCloseEnd: null,
                    onCloseStart: null,
                    onOpenEnd: null,
                    onOpenStart: null,
                    outDuration: 200
                }}
                >
                <img
                    alt=""
                    src={resumeScreenShot}
                />
            </MediaBox>

            <a href={resumeDownload} download class="waves-effect waves-light btn-large download-button center-align"
            data-aos="fade-left"><i class="material-icons left">download</i>pdf resume</a>
        </div>
    )
}
