import React from 'react'
import {useRef} from 'react'
import "./parallax.scss";
import {motion,useScroll, useTransform} from "framer-motion"
export const Parallax = ({type}) => {

    const ref=useRef()

    const {scrollYProgress}=useScroll({
        target:ref,
        offset:["start start", "end start"]
    })

    const yBg=useTransform(scrollYProgress,[0,1],["0%","100%"]);

  return (
    <div className='parallax' ref={ref} style={{background:type=="services"
    ? "linear-gradient(180deg,#111132,#0c0c1d)"
    
    : "linear-gradient(180 deg,#111132,#505064"}}
    >
        <motion.h1 style={{y:yBg}}>{type=="services"?"What we do?" : "What we did"}</motion.h1>
        <motion.div className='mountains'></motion.div>
        <motion.div style={{y:yBg}} className='planets'></motion.div>
        <motion.div style={{x:yBg}} className='stars'></motion.div>
    </div>
  )
}
