import {createGlobalStyle} from 'styled-components'


const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@600&display=swap');

h1, h2, h3, h4, h5, h6,p, button {
  font-family: 'Montserrat', sans-serif;
  font-size: 32px;
}

p{
  font-size: 17px;
}

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

`

export default GlobalStyles;