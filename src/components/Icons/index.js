import React from 'react'
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import "./style.css"

export default function Icons(props) {
    return (
        <span>
            <a href={props.href} target="_blank">
              <Button
                className="contact-icons"
                >
                    <FontAwesomeIcon icon={props.iconName} />
              </Button>
            </a>
        </span>
    )
}
