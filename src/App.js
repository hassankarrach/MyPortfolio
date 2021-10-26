import React, {useEffect} from 'react'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import GlobalStyles from './Components/Styles/Global'
import Main from './Components/Main/Main'

//whatsapp
import FloatingWhatsApp from 'react-floating-whatsapp'
import Profile from './Media/profile.png'

//importPages
import AboutMe from './Components/Pages/AboutMe'
import Coding  from './Components/Pages/Coding'
import GraphicDesignPage from './Components/Pages/GraphicDesignPage'

//React Router
import {Switch, Route,useLocation} from 'react-router-dom'

//IOS || ANIMATE ON SCROLL
import AOS from 'aos';
import 'aos/dist/aos.css';

//Pages Transitions
import {AnimatePresence} from 'framer-motion'


function App() {
   //Global Aos
   useEffect(()=>{
    AOS.init()
   },[])
   
   const location =useLocation()
  return (
      <>
      <GlobalStyles/>
      <Navbar />
      <AnimatePresence exitBeforeEnter>
      <Switch location={location} key={location.key}>
        <Route path='/' exact component={Main} ></Route>
        <Route path="/About" component={AboutMe}></Route>
        <Route path='/GraphicDesign' component={GraphicDesignPage}></Route>
        <Route path='/Coding' component={Coding}></Route>
      </Switch>
      </AnimatePresence>

      <FloatingWhatsApp className='whatsapp' phoneNumber={+212646838512} accountName='Hassan Karrach' avatar={Profile} 
      chatMessage = 'Hi there! How can i help you?' 
      allowClickAway ={true}
      allowEsc ={true}
      height ={300}
      />
      </>
  )
}



export default App
