import React from 'react'
import "./style.css"

export default function Icons(props) {
    return (
        <span>
            <a href={props.href} target="_blank">
              <i class={props.iconName}></i>
            </a>
        </span>
    )
}
