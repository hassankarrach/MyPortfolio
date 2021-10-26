import React ,{useState} from 'react'
import {Nav ,Logo,StyledMenu} from '../Styles/Navbar.Styled'
import logo from '../../Media/Logo/logo.png'
//React Link
import {Link } from 'react-router-dom'


//FramerMotion
import { motion ,AnimatePresence } from "framer-motion"
import Fade from '@mui/material/Fade';



function Navbar() {
    const [toggle ,setToggle]= useState(false);

    return (
    <>
        <Nav>
            <Link to='/'>
            <Logo onClick={()=>{setToggle(false)}} src={logo}></Logo>
            </Link>
            <div onClick={()=>{setToggle(!toggle)}} id="nav-icon3"
            className={`${toggle ? "open" : ""}`}
            >
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
        </Nav>

                 <Fade in={toggle} timeout ={460}>
                       <StyledMenu>
                        <motion.div className='OverlayContent'>
                           <Link to='/'>
                           <motion.div
                             onClick={()=>{setToggle(false)}}
                             whileHover={{scale: 1.1}}
                             >
                          <motion.a
                          onClick={()=>{setToggle(false)}}
                          whileHover={{color : '#00dfb5'}}
                          href='#'>Home</motion.a>
                             </motion.div>
                          </Link>
                          
                          <Link to='/About'>
                             <motion.div
                             onClick={()=>{setToggle(false)}}
                             whileHover={{scale: 1.1 }}
                             >
                             <motion.a
                              whileHover={{color:'#00dfb5'}}
                             href='#'>About Me
                             </motion.a>
                             </motion.div>
                          </Link>
            
                          <Link to='/GraphicDesign'>
                          <motion.div
                             onClick={()=>{setToggle(false)}}
                             whileHover={{scale: 1.1}}
                             >
                          <motion.a
                          onClick={()=>{setToggle(false)}}
                          whileHover={{color : '#00dfb5'}}
                          href='#'>Graphic Design</motion.a>
                          </motion.div>
                          </Link>
            
                          <Link to='/Coding'>
                          <motion.div
                             onClick={()=>{setToggle(false)}}
                             whileHover={{scale: 1.1}}
                             >
                          <motion.a
                          onClick={()=>{setToggle(false)}}
                          whileHover={{color : '#00dfb5'}}
                          href='#'>Coding</motion.a>
                          </motion.div>
                          </Link>
                        </motion.div>
                       </StyledMenu>
                  </Fade>

    </>
    )
}

export default Navbar
