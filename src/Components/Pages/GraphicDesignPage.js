import React from 'react'
import styled from "styled-components"
import {Row} from 'react-bootstrap'
import {motion} from 'framer-motion'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button,CardActionArea } from '@mui/material';
import {Link} from 'react-router-dom'
import { FaChevronRight } from 'react-icons/fa';
//Swiper.js
import { Swiper, SwiperSlide  } from 'swiper/react';
import 'swiper/swiper-bundle.css';  
//LightBox
import SimpleReactLightbox,{ SRLWrapper } from "simple-react-lightbox";

/*Media*/
//Freelancing Sites Icons
import Fiverr from '../../Media/GraphicDesignPage/fiverr.png'
import DesignCrowd from '../../Media/GraphicDesignPage/designcrowd.png'
//Services Icons
import Flyer from '../../Media/GraphicDesignPage/Services/flyer.png'
import Book from '../../Media/GraphicDesignPage/Services/book.png'
import Web from '../../Media/GraphicDesignPage/Services/web-design.png'
import Ps from '../../Media/GraphicDesignPage/Services/photoshop.png'
import Poster from '../../Media/GraphicDesignPage/Services/poster.png'
import SocialMedia from '../../Media/GraphicDesignPage/Services/social-media.png'
//Banner
import Banner from '../../Media/GraphicDesignPage/banner.jpg'
// Preview
import Edit1 from '../../Media/GraphicDesignPage/Portfolio/Preview/Edit1.jpg'
import Edit2 from '../../Media/GraphicDesignPage/Portfolio/Preview/Edit2.jpg'
import Edit3 from '../../Media/GraphicDesignPage/Portfolio/Preview/Edit3.jpg'
import Edit4 from '../../Media/GraphicDesignPage/Portfolio/Preview/Edit4.jpg'
import Edit5 from '../../Media/GraphicDesignPage/Portfolio/Preview/Edit5.jpg'
import Edit6 from '../../Media/GraphicDesignPage/Portfolio/Preview/Edit6.jpg'
import Edit7 from '../../Media/GraphicDesignPage/Portfolio/Preview/Edit7.jpg'
import Edit8 from '../../Media/GraphicDesignPage/Portfolio/Preview/Edit8.jpg'
import Edit9 from '../../Media/GraphicDesignPage/Portfolio/Preview/Edit9.jpg'
import Edit10 from '../../Media/GraphicDesignPage/Portfolio/Preview/Edit10.jpg'
import Edit11 from '../../Media/GraphicDesignPage/Portfolio/Preview/Edit11.jpg'
import Edit12 from '../../Media/GraphicDesignPage/Portfolio/Preview/Edit12.jpg'
// Url
import Edit1_ from '../../Media/GraphicDesignPage/Portfolio/Url/Edit1.jpg'
import Edit2_ from '../../Media/GraphicDesignPage/Portfolio/Url/Edit2.jpg'
import Edit3_ from '../../Media/GraphicDesignPage/Portfolio/Url/Edit3.jpg'
import Edit4_ from '../../Media/GraphicDesignPage/Portfolio/Url/Edit4.jpg'
import Edit5_ from '../../Media/GraphicDesignPage/Portfolio/Url/Edit5.jpg'
import Edit6_ from '../../Media/GraphicDesignPage/Portfolio/Url/Edit6.jpg'
import Edit7_ from '../../Media/GraphicDesignPage/Portfolio/Url/Edit7.jpg'
import Edit8_ from '../../Media/GraphicDesignPage/Portfolio/Url/Edit8.jpg'
import Edit9_ from '../../Media/GraphicDesignPage/Portfolio/Url/Edit9.jpg'
import Edit10_ from '../../Media/GraphicDesignPage/Portfolio/Url/Edit10.jpg'
import Edit11_ from '../../Media/GraphicDesignPage/Portfolio/Url/Edit11.jpg'
import Edit12_ from '../../Media/GraphicDesignPage/Portfolio/Url/Edit12.jpg'

//LightBox
const options = {
  settings: {
    overlayColor: "rgba(0,223,181,0.9)",
    boxShadow: '0 1px 1px rgba(0, 0, 0, 0.1)',
  },
  caption: {
    captionColor: "white",
    captionTextTransform: "uppercase",
  },
  buttons : {
      backgroundColor: "white",
      iconColor: "rgb(0, 223, 181)",
      showAutoplayButton :false,
      showDownloadButton :false,
  },
  thumbnails :{
      showThumbnails: true,
      thumbnailsOpacity :'0.2'
  }
};

//Data
const Data =[
    {
    id:1,
    Prv :Edit1,
    Url: Edit1_,
    title :'Graphic Design Edit'
    },
    {
      id:2,
      Prv :Edit2,
      Url: Edit2_,
      title :'Graphic Design Edit'
    } ,
    {
      id:3,
      Prv :Edit3,
      Url: Edit3_,
      title :'Graphic Design Edit'
    },
    {
      id:4,
      Prv :Edit4,
      Url: Edit4_,
      title :'Graphic Design Edit'
      },
      {
        id:5,
        Prv :Edit5,
        Url: Edit5_,
        title :'Graphic Design Edit'
      } ,
      {
        id:6,
        Prv :Edit6,
        Url: Edit6_,
        title :'Graphic Design Edit'
      } ,
      {
        id:7,
        Prv :Edit7,
        Url: Edit7_,
        title :'Graphic Design Edit'
        },
        {
          id:8,
          Prv :Edit8,
          Url: Edit8_,
          title :'Graphic Design Edit'
        } ,
        {
          id:9,
          Prv :Edit9,
          Url: Edit9_,
          title :'Graphic Design Edit'
        } ,
        {
          id:10,
          Prv :Edit10,
          Url: Edit10_,
          title :'Graphic Design Edit'
        },
        {
          id:11,
          Prv :Edit11,
          Url: Edit11_,
          title :'Graphic Design Edit'
        },
        {
          id:12,
          Prv :Edit12,
          Url: Edit12_,
          title :'Graphic Design Edit'
        }
]


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
     
     .Intro{
       margin-top: 20px;
       text-align: center;
     }

     //Services
     .Services{
       height: 110px;
       display : flex;
       justify-content: center;
       align-items : center;
     }
     .Service{
       height :65px;
       background-color : #f1f9fe;
       display : flex;
       justify-content : center;
       align-items : center;
       padding :20px;
       border-radius : 5px;
     }
     .Icon{
       width: 45px;

     }
     .Title{
       font-size : 1.4rem;
       margin-left : 10px;
       margin-top : 5px;
       color: #143b6e;
       font-weight : bold;
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
     //EndServices



     .Designs{
      display: flex;
      justify-content :center;
      margin :50px 0%;
     }
     .item{
       width :300px;
       height :300px;
       background-color :grey;
       transition: .25s ease-in-out; 
       overflow: hidden;
       position: relative;
     }
     .itemImg{
      position: absolute;
      right: 0; left: 0;
      filter: brightness(85%);
      transition: transform .5s ease;
     }
     .itemImg:hover{
      transform: scale(1.05);
      filter: brightness(100%);
     }
   
`

function GraphicDesignPage() {
    return (
      <motion.div
        initial ={{opacity:0}}
        animate= {{opacity:1, transition :{delay: 0.1,duration:1.3}}}
        exit={{ opacity:0 ,transition :{delay: 0.1,duration:0.2}}}
      >
        <StyledSection>
            <div className='banner'>
                <h1 style={{color: 'white' , fontSize : '2.7rem', marginTop :'40px', marginLeft:'30px'}}>Graphic Design</h1>
            </div>
            
            <div>
            <div>
              <p className='Intro'>
              I am a Graphic Designer and Professional Photo Manipulation Editor with 10 years of experience working with clients and agencies from around the world.
              I am passionate about brands and visual identities and have been working with clients from lifestyle, property, fashion, hospitality and luxury sectors.
              </p>
            </div>
            <div>
             <h2 className='Title_'>My<span className='SecondTitle'> Services</span></h2>
             </div>
             <div className='Services'> 
              <Swiper 
              data-aos="fade-up" data-aos-delay="150"
              spaceBetween={30}
              speed ={200}
              autoplay= {
                {delay: 2000},
                {disableOnInteraction: false}
              }
              className="mySwiper"

              breakpoints= {
                {
                  209:{
                    slidesPerView :1,
                  },
                  425: {
                    slidesPerView :2,
                  },
                  768: {
                    slidesPerView :4
                  }
                }
              }

              >
                <SwiperSlide>
                <div className='Service'>
                     <img className='Icon' src={Ps}></img>
                     <h6 className='Title'>Photoshop Editing</h6>
                </div>
                </SwiperSlide>
                 <SwiperSlide>
                 <div className='Service'>
                     <img className='Icon' src={Flyer}></img>
                     <h6 className='Title'>Flyer Design</h6>
                   </div>
                </SwiperSlide>
                 <SwiperSlide>
                 <div className='Service'>
                     <img className='Icon' src={Book}></img>
                     <h6 className='Title'>Book Cover</h6>
                   </div>
                </SwiperSlide>
                 <SwiperSlide>
                 <div className='Service'>
                     <img className='Icon' src={Web}></img>
                     <h6 className='Title'>Web Design</h6>
                   </div>
                </SwiperSlide>
                <SwiperSlide>
                 <div className='Service'>
                     <img className='Icon' src={Poster}></img>
                     <h6 className='Title'>Posters</h6>
                   </div>
                </SwiperSlide>
                <SwiperSlide>
                 <div className='Service'>
                     <img className='Icon' src={SocialMedia}></img>
                     <h6 className='Title'>Social Media</h6>
                   </div>
                </SwiperSlide>
              </Swiper>
             </div>

             <div data-aos="fade-up" data-aos-delay="250">
             <h2 className='Title_'>Last <span className='SecondTitle'>Works</span></h2>
             </div>

             <SimpleReactLightbox>
            <SRLWrapper options={options}>
             <Row className='Designs' data-aos="fade-up" data-aos-delay="250">
               {
                 Data.map(item =>{
                   return(
                     
                     <div className='item' key={item.id}>
                       <a href={item.Url}>
                         <img className='itemImg' src={item.Prv} alt={item.title}></img>
                       </a>
                     </div>
                   )
                 })
               }
             </Row>
            </SRLWrapper>
            </SimpleReactLightbox>
            
            <div style={{width: '100%', backgroundColor:'#eef5f7' ,padding: '15px',borderRadius:'10px 10px 0px 0px'}}>
            <div style={{textAlign :'center', display : 'flex', justifyContent :'center', alignItems :'center', flexDirection :'column'}}>
              <h6 style={{fontSize: '1.4rem'}}>Check My live Works here :</h6>
              <div className='Logos' style={{dispkay: 'flex',flexDirection :'column'}}>
                <a style={{ borderRadius :'3px', padding : '5px' ,marginRight :'10px'}}
                href={'https://www.fiverr.com/hassanjomaa/edit-compositing-and-design-anything-in-photoshop'}
                target={'_blank'}
                ><img style={{height: '27px', marginBottom :'15px'}} src={Fiverr}></img></a>
                <a style={{borderRadius :'3px', padding : '5px'}}
                href={'https://www.designcrowd.com/designer/795552/hassan-karrach'}
                target={'_blank'}
                ><img style={{height: '30px', marginBottom :'13px'}} src={DesignCrowd}></img></a>
              </div>
              <div style={{marginTop :'25px'}}>
            <Link style={{textDecoration:'none'}} to='/About'>
            <Button variant="outlined"
            style={{borderColor :'#00dfb5', color :'#00dfb5', marginRight:'10px'}}
            >
            About Me
            </Button>
            </Link>
            <Link style={{textDecoration:'none'}} to='/Coding'>
            <Button variant="contained" 
            style={{backgroundColor :'#00dfb5'}}
            >
            Next <FaChevronRight style={{marginLeft:'5px'}}></FaChevronRight>
            </Button>
            </Link>
              </div>
            </div>

           
            </div>

            </div>
            
        </StyledSection>
        </motion.div>
    )
}

export default GraphicDesignPage
