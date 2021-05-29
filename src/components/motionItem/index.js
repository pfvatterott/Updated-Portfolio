import React from 'react'
import {
    motion,
    useMotionValue,
    useTransform,
} from "framer-motion"
import "./style.css"

export default function MotionItem() {


  const x = useMotionValue(0)
  const background = useTransform(
    x,
    [-100, 0, 100],
    ["#ff008c", "#7700ff", "rgb(230, 255, 0)"]
  )

    return (
        <motion.div
            drag
            dragConstraints={{ top: -50, left: -50, right: 50, bottom: 50 }}
            style={{ x }}
        >
            <img className="dragItem" draggable="false" src="./images/clipart1869989.png"></img>
            {/* </motion.div> */}
        </motion.div>
    )
}
