import React from 'react'
import "./style.css"

export default function Icons(props) {
    return (
        <span>
            <a href={props.href} target="_blank"
              className="hoverable btn-floating btn-large contact-icons z-depth-4" data-aos="flip-left">
              <i class={props.iconName} data-tooltip="Instagram"></i>
            </a>
        </span>
    )
}
