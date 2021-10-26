import React from 'react';
import {Link} from 'react-router-dom'
//import Style
import { StyledHeader,StyledElement } from '../Styles/Header.Styled';
//Swiper
import SwiperCore,{ Navigation, Pagination,Autoplay,Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide  } from 'swiper/react';
import 'swiper/swiper-bundle.css';  
//import icons
import { FaGithub ,FaFacebookF,FaLinkedin,FaInstagramSquare,FaBehanceSquare } from 'react-icons/fa';
//Headers
import Header1 from '../../Media/Header/Header1.png';
import Header2 from '../../Media/Header/Header2.png';
import Header3 from '../../Media/Header/Header3.png';
// install Swiper modules
SwiperCore.use([Pagination,Navigation,Autoplay]);

function Header() {
    return (
        <>
        <Swiper 
        slidesPerView={1} 
        spaceBetween={10} 
        loop={true} 
        autoplay={{
            delay: 4000,
            disableOnInteraction: false
        }}
        navigation={true} 
        className="mySwiper">
          
          <SwiperSlide>
            <StyledHeader 
            style={
              {backgroundImage: `url(${Header1})`}
              }
            >
              <HeaderElement
              button ='yes'
              title="I'M Hassan Karrach"
              desc = 'A graphic Designer and web Devloper'
              buttonTitle = 'About Me'
              ></HeaderElement>
            </StyledHeader>
          </SwiperSlide>

          <SwiperSlide>
            <StyledHeader 
            style={
              {backgroundImage: `url(${Header2})`}
            }
            >
              <HeaderElement 
              title='A Graphic Designer'
              desc = 'i can make your ideas more and more attractive.'
              icons='non'
              Styledtitle='yes'
              buttonTitle = 'Read More'
              ></HeaderElement>
            </StyledHeader>
          </SwiperSlide>
          <SwiperSlide>
            <StyledHeader 
            style={
              {backgroundImage: `url(${Header3})`}
            }
            >
              <HeaderElement 
              title='A Full Stack Web Devloper'
              desc = 'Responsive Web Design always plays an important role whenever going to promote your website.'
              icons='non'
              buttonTitle = 'Read More'
              ></HeaderElement>
            </StyledHeader>
          </SwiperSlide>
        </Swiper>
        </>
    )
}

function HeaderElement(props){
  return(
    <StyledElement icon={props.icons} Styled={props.Styledtitle} btn={props.button}>
      <div className='texts'>
        <h1 className='title'> {props.title} </h1>
        <p  className='p_'>{props.desc}</p>
        <Link to={props.title==='A Graphic Designer'? '/GraphicDesign' :props.desc === 'A graphic Designer and web Devloper'? '/About' : '/Coding'}>
        <button style={{textTransform : 'uppercase'}} variant="outlined">{props.buttonTitle}</button>
        </Link>
      </div>
      <div className='SocialLinks'>
        <a className='icon' href='https://github.com/hassankarrach' target='_blank'><FaGithub size={27}/></a>
        <a className='icon' href='https://www.linkedin.com/in/hassan-karrach-3b8187185/' target='_blank'><FaLinkedin size={27}/></a>
        <a className='icon' href='https://www.instagram.com/hassankarach/' target='_blank'><FaInstagramSquare size={27}/></a>
        <a className='icon' href='https://www.behance.net/hassankarrach' target='_blank'><FaBehanceSquare size={27}/></a>
      </div>
    </StyledElement>
  )
}
export default Header;