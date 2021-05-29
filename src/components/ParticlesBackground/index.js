import React, { Component } from 'react'
import Particles from "react-tsparticles";


export default class ParticlesBackground extends Component {

    constructor(props) {
        super(props);
    
        this.particlesInit = this.particlesInit.bind(this);
        this.particlesLoaded = this.particlesLoaded.bind(this);
      }
    
      particlesInit(main) {
        console.log(main);
    
        // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
      }
    
      particlesLoaded(container) {
        console.log(container);
      }
    render() {
        return (
            <div>
                <Particles
                    id="tsparticles"
                    init={this.particlesInit}
                    loaded={this.particlesLoaded}
                    params={{
                        "background": {
                        "color": {
                            "value": "#000000"
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
                            "value": "#ff0000",
                            "animation": {
                            "h": {
                                "enable": true,
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
                {this.props.children}
            </div>
        )
    }
}

