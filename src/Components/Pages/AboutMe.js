import React from 'react'
import styled from "styled-components"
import {Container, Row, Col ,Image} from 'react-bootstrap'
import {motion} from 'framer-motion'
import { Button,Stack } from '@mui/material';
import ModalUnstyled from '@mui/core/ModalUnstyled';
import {  Box } from '@mui/system';
import {Link} from 'react-router-dom'

//Swiper
import { Swiper, SwiperSlide  } from 'swiper/react';
import 'swiper/swiper-bundle.css';  

import { FaChevronRight } from 'react-icons/fa';
//CV PDF
import CvEn from '../../Media/AboutMe/CvEn.pdf'
import CvFr from '../../Media/AboutMe/CvFr.pdf'

//import Media
import Avatar from '../../Media/AboutMe/Avatar.jpg'
import Banner from '../../Media/AboutMe/Banner.jpg'
//LogosSkills
import ReactLogo from '../../Media/Skills/LogosSkills/React.png'
import HtmlLogo from '../../Media/Skills/LogosSkills/Html.png'
import CssLogo from '../../Media/Skills/LogosSkills/Css.png'
import JsLogo from '../../Media/Skills/LogosSkills/Js.png'
import Bootstrap from '../../Media/Skills/LogosSkills/Bootstrap.png'
//
import Csharp from '../../Media/Skills/LogosSkills/C#.png'
import Sql from '../../Media/Skills/LogosSkills/Sql.png'
import php from '../../Media/Skills/LogosSkills/php.png'
//
import photoshop from '../../Media/Skills/LogosSkills/photoshop.png'
import PremierPro from '../../Media/Skills/LogosSkills/PremierPro.png'
import illustrator from '../../Media/Skills/LogosSkills/illustrator.png'
//contact Icons
import email from '../../Media/AboutMe/ContactIcons/email.png'
import whatsapp from '../../Media/AboutMe/ContactIcons/whatsapp.png'
import linkedin from '../../Media/AboutMe/ContactIcons/linkedin.png'


//Modal Settings ==> Cv Button
const StyledModal = styled(ModalUnstyled)`
  position: fixed;
  z-index: 1300;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Backdrop = styled('div')`
  z-index: -1;
  position: fixed;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  -webkit-tap-highlight-color: transparent;
`;
const style = {
  width: 400,
  height :80,
  bgcolor: 'white',
  borderRadius: '2px',
  display :'flex',
  alignItems :'center',
  justifyContent :'center'
};
//EndModal Settings

//StyledComponents
const StyledAboutMe = styled.div`
    padding : 20px 0px;
    margin: 0px 9%;

   .ItemTitle{
     margin-bottom : 20px;
     display: flex;
     justify-content : center;
   }
   .About{
     margin-top: 50px;
   }
   .Highlighted{
     color:#00dfb5;
     font-weight: bold;
     cursor: pointer;
     text-decoration : none;
     transition : 0.16s ease-in;
   }
   .Highlighted:hover{
     background-color :#00dfb5;
     color:white;
     border-radius:2px
   }
   .SecondTitle{
     font-weight :bold;
     color:#00dfb5;
   }
   .profile{
       position : relative;
   }
   .Banner{
       height: 200px;
       background-image :url(${Banner}) ;
       background-position : center;
       background-size: cover;
       background-repeat :no-repeat;
       border-bottom-left-radius : 8px;
       border-bottom-right-radius : 8px;
   }
   .avatar ,.CtaCV{
       display : flex;
       align-items : center;
       justify-content : center
   }
   .circle{
       height : 120px;
       width: 120px;
       background-color : skyblue;
       border-radius : 50%;
       position : absolute;
       bottom : -40px;
       background-image : url(${Avatar});
       background-position : center;
       background-repeat : no-repeat;
       border : 3px solid white
   }

   .SkillElement{
     height :350px;
     display : flex;
     flex-direction : column;
     justify-content: center;
     align-items : center;
   }


   .Title {
 overflow: hidden;
 text-align: center;
}
.Title:before,
.Title:after {
 background-color: rgb(221, 221, 221,0.6  );
 content: "";
 display: inline-block;
 height: 1px;
 position: relative;
 vertical-align: middle;
 width: 50%;
}
.Title:before {
 right: 0.5em;
 margin-left: -50%;
}
.Title:after {
 left: 0.5em;
 margin-right: -50%;
}


.List{
  display : flex;
}
.ListItem{
  background-color: #00dfb5;
  width: 60px;
  height: 60px;
  border-radius : 50%;
  display :flex;
  align-items :center;
  justify-content :center;
  margin :5px;
  cursor : pointer;
  transition : 0.3s ease-in-out;
}
.ListItem:hover{
  background-color: #00b593;
}
.icon{
  width : 50px;
  height :50px;
}
.ContactMe{
  display: flex;
  justify-content : center;
}
`



function AboutMe() {
    return (
        <motion.div
        initial ={{opacity:0}}
        animate= {{opacity:1, transition :{delay: 0.1,duration:1.3}}}
        exit={{ opacity:0 ,transition :{delay: 0.1,duration:0.2}}}
        >

        <StyledAboutMe style={{margin:'0px 9%'}}>    
        <div className='profile'>
        <motion.div className='Banner'
        initial={{opacity:0}}
        animate={{opacity:1 }}
        transition={{ duration: 3 }}
        ></motion.div>
        <div className='avatar'>
            <div className='circle'></div>
        </div>
        </div>
        <Row
        data-aos="fade-up" data-aos-delay="250"
        >
          <motion.div className='About'
          initial={{x:'-100vw', opacity:0}}
          animate={{ x: 0 ,opacity:1}}
          transition={{ delay: 0.7 }}
          >
          <div>
            <h2 className='Title'>About <span className='SecondTitle'>Me</span></h2>
          </div>
          <p style={{fontSize :'18px' ,textAlign :'center'}}>
            Hi, My Name is HASSAN KARRACH I'm 22yo from Casablanca-Morocco, 
            i'm a 
            <Link to='/GraphicDesign' style={{textDecoration:'none'}}><span className='Highlighted'> Graphic Designer </span></Link>
            and a <br/>Full Stack 
            <Link to='/Coding' style={{textDecoration:'none'}}><span className='Highlighted'> Web Devloper </span></Link>.
            Designing and Coding have been my passion since the days I started working with computers but I found myself into web design/development since 2018. I enjoy creating beautiful things.
          </p>
          </motion.div>
        </Row>   
        <Row
        data-aos="fade-up" data-aos-delay="250"
        >
          <div >
            <h2 className='Title'>My <span className='SecondTitle'>Skills</span></h2>
          </div>

          <Container>
          <Swiper 
        slidesPerView={1} 
        spaceBetween={10} 
        loop={true} 
        autoplay={{
            delay: 5000,
            disableOnInteraction: false
        }}
        navigation={true} 
        className="mySwiper">
          <SwiperSlide>
           <div className='SkillElement' >
            <div style={{textAlign:'center',display:'flex', justifyContent :'center', alignItems:'center', flexDirection:'column',padding:'0px 30px'}}>
            <h2>Front-End</h2>
              <Col  lg={6} style={{textAlign:'center'}}>
                <div className='logos'>
                <img src={HtmlLogo}></img>
                <img src={CssLogo}></img>
                <img src={JsLogo}></img>
                <img src={ReactLogo}></img>
                <img src={Bootstrap}></img>
                </div>
              </Col>
            
            </div>
           </div>
          </SwiperSlide>
          <SwiperSlide>
           <div className='SkillElement'>
            <div style={{textAlign:'center',display:'flex', justifyContent :'center', alignItems:'center', flexDirection:'column',padding:'0px 30px'}}>
            <h2 style={{marginTop:'0'}}>Back-End</h2>
              <Col lg={8} style={{textAlign:'center'}}>
                <div className='logos'>
                <img src={Csharp}></img>
                <img src={Sql}></img>
                <img src={php}></img>
                </div>
              </Col>
            </div>
           </div>
          </SwiperSlide>
          <SwiperSlide>
           <div className='SkillElement'>
            <div style={{textAlign:'center',display:'flex', justifyContent :'center', alignItems:'center', flexDirection:'column',padding:'0px 30px'}}>
            <h2 style={{marginTop:'0'}}>Graphic Design</h2>
              <Col lg={8} style={{textAlign:'center'}}>
                <div className='logos'>
                <img src={photoshop}></img>
                <img src={PremierPro}></img>
                <img src={illustrator}></img>
                </div>
              </Col>
            </div>
           </div>
          </SwiperSlide>
        </Swiper>
          </Container>

        </Row>
        <div>
            <h2 className='Title'><span className='SecondTitle'>Resume</span></h2>
          </div>
        <Resume></Resume>
          <div>
            <h2 className='Title'>Contact <span className='SecondTitle'>Me</span></h2>
          </div>
          <div className='ContactMe'>
            <div className='List'>
              <div className='ListItem'>
                <a href='mailto:hassan.winners@gmail.com' target='_blank'>
                <img className='icon' src={email}></img>
                </a>
              </div>

              <div className='ListItem'>
                <a href='https://wa.me/+212646838512' target='_blank'>
                <img className='icon' src={whatsapp}></img>
                </a>
              </div>
              
              <div className='ListItem'>
               <a href='https://www.linkedin.com/in/hassan-karrach-3b8187185/' target='_blank'>
                <img className='icon' src={linkedin}></img>
                </a>
              </div>
              
            </div>
          </div>
        
        <div className='CtaCV'>
      <Stack style={{marginTop :'35px'}} direction="row" spacing={2}>
      <Link style={{textDecoration:'none'}} to='/GraphicDesign'>
       <Button variant="contained" 
      style={{backgroundColor :'#00dfb5'}}
      >
      Next <FaChevronRight style={{marginLeft:'5px'}}></FaChevronRight>
      </Button>
      </Link>      
      </Stack>
        </div>
        </StyledAboutMe> 
        </motion.div>
    )
}



const StyledResume = styled.div`
.resume-title {
  font-size: 26px;
  font-weight: 700;
  margin-top: 20px;
  margin-bottom: 20px;
  color: #45505b;
}

.resume-item {
  padding: 0 0 20px 20px;
  margin-top: -2px;
  border-left: 2px solid #00e0b5;
  position: relative;
}

.resume-item h4 {
  line-height: 18px;
  font-size: 18px;
  font-weight: 600;
  text-transform: uppercase;
  font-family: "Poppins", sans-serif;
  color: #00e0b5;
  margin-bottom: 10px;
}

.resume-item h5 {
  font-size: 16px;
  background: #f7f8f9;
  padding: 5px 15px;
  display: inline-block;
  font-weight: 600;
  margin-bottom: 10px;
}

.resume-item ul {
  padding-left: 20px;
}

.resume-item ul li {
  padding-bottom: 10px;
}

.resume-item:last-child {
  padding-bottom: 0;
}

.resume-item::before {
  content: "";
  position: absolute;
  width: 16px;
  height: 16px;
  border-radius: 50px;
  left: -9px;
  top: 0;
  background: #fff;
  border: 2px solid #00e0b5;
}

`

const Resume = ()=>{
  //Modal Settings
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

    return(
      <StyledResume
      data-aos="fade-up" data-aos-delay="250"
      >
      <Container>
           
            <Row>
                <Col lg={6}>
                    <h3 className=''>Education</h3>
                    <div className="resume-item">
                    <h4>BAC-SVT</h4>
                    <h5>2017</h5>
                    <p>IBNO MOAATAZ - Casablanca</p>
                    </div>

                    <div className="resume-item">
                    <h4>TS En Développement Informatique</h4>
                    <h5>2018 - 2021</h5>
                    <p><em>OFPPT - TDI</em></p>
                    </div>
                </Col>
                <Col lg={6}>
                <h3 className="">Professional Experience</h3>

                <div className="resume-item">
                <h4>Freelancer</h4>
                <h5>2018 - Present</h5>
                <p><em>Freelancer at </em></p>
                <ul>
                <li>www.Designcrowd.com</li>
                <li>www.fiverr.com </li>
                <li>www.freelancer.com</li>
                </ul>
                </div>
                </Col>
            </Row>
            <div style={{display: 'flex', justifyContent :'center', margin : '20px'}}>
            <Button variant="outlined"
      style={{borderColor :'#00dfb5', color :'#00dfb5'}}
      onClick={handleOpen}
      >
      Download My Cv
      </Button>
      <StyledModal
        aria-labelledby="unstyled-modal-title"
        aria-describedby="unstyled-modal-description"
        open={open}
        onClose={handleClose}
        BackdropComponent={Backdrop}
      >
        <Box sx={style}>
          <div>
          <Button variant="outlined"
               download="HassanKarrach_CV.pdf"
               href={CvFr}
               onclick={handleClose}
      style={{borderColor :'#00dfb5', color :'#00dfb5', marginRight : '10px'}}>
          Francais
          </Button>
          <Button variant="outlined"
                    download="HassanKarrach_Resume.pdf"
                    href={CvEn}
                    onclick={handleClose}
      style={{borderColor :'#00dfb5', color :'#00dfb5'}}>
          English
          </Button>
          </div>
        </Box>
      </StyledModal>
            </div>
      </Container>
      </StyledResume>
    )
}
export default AboutMe