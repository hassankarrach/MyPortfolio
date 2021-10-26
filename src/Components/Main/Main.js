import React from 'react'
import Header from '../Header/Header'
import {motion} from 'framer-motion'

function Main() {
    return (
      <motion.div
      initial ={{opacity:0}}
      animate= {{opacity:1, transition :{delay: 0.1,duration:1.3}}}
      exit={{ opacity:0 ,transition :{delay: 0.1,duration:0.2}}}
      >
        <Header></Header>
      </motion.div>
    )
}

export default Main
