import styled from "styled-components"


export const StyledHeader = styled.div`
    height: 90vh;
//    border-bottom-left-radius: 15px;
//    border-bottom-right-radius: 15px;
    overflow: hidden;
    margin :0px 9%;
    background-Position: center;
    background-Size: cover;
    background-Repeat: no-repeat;
    display:flex;

    @media(max-width: 612px){
        height:100vh;
    }
`

export const StyledElement = styled.div`
    color:white;
    margin:15px;
    display:flex;
    flex-direction:column;
    justify-content:center;
    .texts{
    }
    .SocialLinks .icon{
        color:white;
        margin-right: 3px;
    }



    .SocialLinks{
        position: absolute;
        bottom: 10px;
        display : ${props => props.icon === 'non' && 'none'};
    }
    .title{
    font-size: 32px;
    ${props => {
        if (props.Styled === 'yes') return `
            font-family: 'Dancing Script', cursive;
            font-size :40px;
        `
    }}
    
}
.p_{
    font-size: 17px;
    color: white;
}

button{
    padding: 8px 16px;
    border-width: 1px;
    border-radius: 2px;
    font-size: 16px;
    font-weight: 400;
    display: inline-block;
    background-color: transparent;
    color : white;
    border: 1px solid white;
    cursor: pointer;
    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out;
    margin-top :10px;
    &:hover {
       color :#00dfb5;
       background-color: white;  
    }
}

`