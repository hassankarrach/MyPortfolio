import React from 'react'
import styled from "styled-components"
import { Button } from '@mui/material';
import { FaGithubSquare,FaReact,FaHtml5,FaCss3,FaJs,FaEye } from 'react-icons/fa';
import {motion} from 'framer-motion'
import {Link} from 'react-router-dom'
//Media
import Banner from '../../Media/Coding/banner.jpg'
import work1 from '../../Media/Coding/work1.png'
import work2 from '../../Media/Coding/work2.png'
import work3 from '../../Media/Coding/work3.png'

const StyledSection = styled.div`
  margin: 0px 9%;
     .banner{
         height: 300px;
         background-image :linear-gradient(0deg, rgba(0,223,181,1) 0%, rgba(0,223,181,0) 100%), url(${Banner});
         background-position : center;
         background-size : cover;
         background-repeat : no-repeat;
         border-radius : 0px 0px 8px 8px;
         display: flex;
         align-items :center;
         justify-content : center;
     }
     .headerTitle{
         color : white;
         margin-top : 30px;
     }
     .Title_ {
      overflow: hidden;
      text-align: center;
     }
     .Title_:before,
     .Title_:after {
      background-color: rgb(221, 221, 221,0.6  );
      content: "";
      display: inline-block;
      height: 1px;
      position: relative;
      vertical-align: middle;
      width: 50%;
     }
     .Title_:before {
      right: 0.5em;
      margin-left: -50%;
     }
     .Title_:after {
      left: 0.5em;
      margin-right: -50%;
     }
     .SecondTitle{
     font-weight :bold;
     color:#00dfb5;
     }

     //Works
     .Works{
         display: flex;
         flex-direction: column;
         justify-content: center;
     }
     .Work{
         height : 300px;
         width: 100%;
         border-radius: 8px;
         background : white;
         display: flex;
         align-items: center;
         justify-content :center;
         border-bottom : 1px sold rgb(221, 221, 221,0.6  );

     }
     .img{
         max-width :100vw;
     }
     .Btn{
         position: absolute;
         bottom : 0px;
         border-color : #00dfb5;
         color: #00dfb5;
     }
     .infosTitle{
        color: #00dfb5;
        margin-bottom : 20px;
     }
     .icon{
         color: #00dfb5;
         margin-right: 8px;
         margin-bottom :10px;
     }


     @media only screen and (max-width: 600px) {
        .Work{
         flex-direction : column;
         height: 500px;
        }
   }
     
`

function Coding() {
    return (
        <motion.div
        initial ={{opacity:0}}
        animate= {{opacity:1, transition :{delay: 0.1,duration:1.3}}}
        exit={{ opacity:0 ,transition :{delay: 0.1,duration:0.2}}}
        >
        <StyledSection>
            <div className='banner'>
              <h1 className='headerTitle'>CODING</h1>
            </div>
            <div>
                <p style={{textAlign :'center' , marginTop :'20px'}}>
                I am a web developer, currently living in Casablanca, Computers and technology have always been a passion for me, but I found myself in Web Development so I decided to follow this path professionally.
                </p>
            </div>
            <div>
             <h2 className='Title_'>My<span className='SecondTitle'> Last Works</span></h2>
            </div>

            <div className='Works'>
              <div className='Work'
              data-aos="fade-up" data-aos-delay="250"
              >
              <img className='img' src={work1} alt='Work Preview'></img>
              <div className='infos'>
                  <h1 className='infosTitle'>My Portfolio</h1>
                  <p className='pg'> technologies used in project :</p>
                  <div className='techList'>
                  <FaReact className='icon' size={30}></FaReact>
                  <FaHtml5 className='icon' size={30}></FaHtml5>
                  <FaCss3 className='icon' size={30}></FaCss3>
                  <FaJs className='icon' size={30}></FaJs>
                  </div>
                  <Button 
                   href={'/'}
                   style={{backgroundColor : '#00dfb5' ,marginRight : '10px'}}
                   variant='contained'>View<FaEye style={{marginLeft: '8px'}}></FaEye></Button>
                  <Button calssName='Btn' variant="outlined"
                   href={'https://github.com/hassankarrach/MyPortfolio'}
                   target={'_blank'}
                  >
                  Source <FaGithubSquare size={26} style={{marginLeft:'10px'}}></FaGithubSquare>
                  </Button>
              </div>   
              </div>  

                  <div className='Work'
                  data-aos="fade-up" data-aos-delay="250"
                  >
              <img className='img' src={work2} alt='Work Preview'></img>
              <div className='infos'>
                  <h1 className='infosTitle'>To Do List</h1>
                  <p className='pg'> technologies used in project :</p>
                  <div className='techList'>
                  <FaHtml5 className='icon' size={30}></FaHtml5>
                  <FaCss3 className='icon' size={30}></FaCss3>
                  <FaJs className='icon' size={30}></FaJs>
                  </div>
                  <Button 
                   href={'https://clever-hawking-5944fa.netlify.app/'}
                   target={'black_'}
                   style={{backgroundColor : '#00dfb5' ,marginRight : '10px'}}
                   variant='contained'>View<FaEye style={{marginLeft: '8px'}}></FaEye></Button>
                  <Button calssName='Btn' variant="outlined"
                   href={'https://github.com/hassankarrach'}
                   target={'_blank'}
                   disabled
                  >
                  Source <FaGithubSquare size={26} style={{marginLeft:'10px'}}></FaGithubSquare>
                  </Button>
              </div>   
              </div>  

              <div className='Work'
              data-aos="fade-up" data-aos-delay="250"
              >
              <img className='img' src={work3} alt='Work Preview'></img>
              <div className='infos'>
                  <h1 className='infosTitle'>Agency Website</h1>
                  <p className='pg'> technologies used in project :</p>
                  <div className='techList'>
                  <FaHtml5 className='icon' size={30}></FaHtml5>
                  <FaCss3 className='icon' size={30}></FaCss3>
                  <FaJs className='icon' size={30}></FaJs>
                  </div>
                  <Button 
                   href={'https://angry-galileo-7874c5.netlify.app/'}
                   target= {'_blank'}
                   style={{backgroundColor : '#00dfb5' ,marginRight : '10px'}}
                   variant='contained'>View<FaEye style={{marginLeft: '8px'}}></FaEye></Button>
                  <Button calssName='Btn' variant="outlined"
                  href={'https://github.com/hassankarrach'}
                  target={'_blank'}
                  disabled
                  >
                   Source <FaGithubSquare size={26} style={{marginLeft:'10px'}}></FaGithubSquare>
                  </Button>
              </div>   
              </div>  
            </div>
            <div style={{display:'flex', justifyContent :'center'}}>
            <Link to='/About' style={{textDecoration :'none'}}>
            <Button variant="outlined"
            style={{borderColor :'#00dfb5', color :'#00dfb5', margin:'25px'}}
            >
            About Me
            </Button>
            </Link>
            </div>
        </StyledSection>
        </motion.div>
    )
}

export default Coding