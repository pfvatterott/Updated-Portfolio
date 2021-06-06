import React, {useEffect, useState} from 'react'
import Particles from "react-tsparticles";
import "./style.css"

export default function ParticlesBackground(props) {
    const [particleColor, setParticleColor] = useState("#ff0000")

    // useEffect(() => {
    //     if (props.mainVisible === true) {
    //         setParticleColor("#ff0000")
    //     }
    //     else if (props.aboutMeVisible === true) {
    //         setParticleColor("#2f00ff")
    //     }
        
    // }, [props.mainVisible, props.aboutMeVisible])
    return (
        <div>
        <Particles
            id="tsparticles"
            params={{
                "background": {
                "color": {
                    "value": "white"
                }
                },
                "fullScreen": {
                "enable": true,
                "zIndex": -1
                },
                "interactivity": {
                "events": {
                    "onClick": {
                    "enable": true,
                    "mode": "push"
                    },
                    "onHover": {
                    "enable": true,
                    "mode": "repulse"
                    }
                }
                },
                "particles": {
                "color": {
                    "value": particleColor,
                    "animation": {
                    "h": {
                        "enable": false,
                        "speed": 20
                    }
                    }
                },
                "links": {
                    "color": {
                    "value": "#ffffff"
                    },
                    "enable": true,
                    "opacity": 0.4
                },
                "move": {
                    "enable": true,
                    "outModes": {
                    "bottom": "out",
                    "left": "out",
                    "right": "out",
                    "top": "out"
                    },
                    "speed": 6
                },
                "number": {
                    "density": {
                    "enable": true
                    },
                    "value": 80
                },
                "opacity": {
                    "value": 0.5
                },
                "size": {
                    "value": {
                    "min": 0.1,
                    "max": 3
                    }
                }
                }
            }}
        />
        {props.children}
    </div>
    )
}
















