import styled from "styled-components"

export const Nav = styled.nav`
    background-color:white;
    height:55px;
    // box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
    display: flex;
    align-items:center;
    position: fixed;
    justify-content:space-between;
    padding:0px 9%;
    width: 100%;
    z-index: 999;


    /* Icon 3 */

#nav-icon3{
  width: 40px;
  height:30px;
  position: relative;
  -webkit-transform: rotate(0deg);
  -moz-transform: rotate(0deg);
  -o-transform: rotate(0deg);
  transform: rotate(0deg);
  -webkit-transition: .5s ease-in-out;
  -moz-transition: .5s ease-in-out;
  -o-transition: .5s ease-in-out;
  transition: .5s ease-in-out;
  cursor: pointer;
  z-index : 999;
}
#nav-icon3 span{
    display: block;
  position: absolute;
  height: 4px;
  width: 100%;
  background: #00dfb5;
  opacity: 1;
  left: 0;
  -webkit-transform: rotate(0deg);
  -moz-transform: rotate(0deg);
  -o-transform: rotate(0deg);
  transform: rotate(0deg);
  -webkit-transition: .25s ease-in-out;
  -moz-transition: .25s ease-in-out;
  -o-transition: .25s ease-in-out;
  transition: .25s ease-in-out;
}
#nav-icon3 span:nth-child(1) {
  top: 0px;
}

#nav-icon3 span:nth-child(2),#nav-icon3 span:nth-child(3) {
  top: 13px;
}

#nav-icon3 span:nth-child(4) {
  top: 26px;
}

#nav-icon3.open span:nth-child(1) {
  top: 18px;
  width: 0%;
  left: 50%;
}

#nav-icon3.open span:nth-child(2) {
  -webkit-transform: rotate(45deg);
  -moz-transform: rotate(45deg);
  -o-transform: rotate(45deg);
  transform: rotate(45deg);
}

#nav-icon3.open span:nth-child(3) {
  -webkit-transform: rotate(-45deg);
  -moz-transform: rotate(-45deg);
  -o-transform: rotate(-45deg);
  transform: rotate(-45deg);
}

#nav-icon3.open span:nth-child(4) {
  width: 0%;
  left: 50%;
}   
`


export const Logo = styled.img`
display: inline-block;
width : 43px;
height: 43px;
cursor: pointer;
`

export const StyledMenu = styled.div`
  height: 100%;
  width : 100%;
  position :fixed;
  background: rgba(255,255,255,0.92);
  z-index : 998;
  


.OverlayContent{
  width:100%;
  height: 100%;
  display : flex;
  justify-content : center;
  flex-direction : column;
  align-items : center;
}

.OverlayContent a{
  color : black;
  text-decoration :none;
  text-transform : uppercase;
  font-size: 25px;
  margin-bottom : 15px
}
`
