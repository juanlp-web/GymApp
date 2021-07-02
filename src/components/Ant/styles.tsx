import styled from "styled-components"
import{ PageText as MenuText} from "../helpers/PageText"
import{ PageItemWrapper as MenuItemWrapper} from "../helpers/ItemWrapper"
import {PageText} from "../helpers/PageText"
import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({

container:{
    position: 'fixed',
    height: '100%',
    width: '100%',
    backgroundColor: 'red',
    display: 'grid',
    gridTemplateColumns: "'1fr 1fr 1fr'",
    gridTemplateRows: "'0.3fr 0.2fr 3.6fr 0.2fr 0.7fr'",
    gap: "0px 0px",
    gridTemplateAreas: 
    `"Header Header Header"
    "Nav Nav Nav"
    "Articles Articles Articles"
    "SocialFooter SocialFooter SocialFooter"
    "Footer Footer Footer"`,  
},

    button: {
        border: 0,
        borderRadius: 3,
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        color: 'white',
        height: 48,
        padding: '0 30px',
    },

    header: {
        
        gridArea: 'Header',
        backgroundColor: '#c050674c',
        
    },

    nav: {
        gridArea: 'Nav',
        backgroundColor: '#44519b4b',
    },

    article: {
        gridArea: 'Articles',
        backgroundColor: '#3e83584a',
    },

    socialFooter: {
        gridArea: 'SocialFooter',
        backgroundColor: '#7f8a1c49',
    },
    
    footer: {
        gridArea: 'Footer',
        backgroundColor: '#992d5f48',
    },
    

  });



export const Wrap = styled.div`
position: absolute;
width: 100%;
height: 100%;
inset:0;
background-color:black;

`
export const Container = styled.div`
    display: grid;
    width: 100%;
    height: 600px;


    
    grid-template-columns: 400px 1fr 1fr;
    grid-template-rows: 0.2fr 1fr 0.2fr;
    grid-gap: 1rem;
    grid-template-areas:
        "header header header"
        ". login ."
        "footer footer footer";

        @media(max-width:750px){
        grid-template-columns: repeat(auto-fit, 70em);     
        justify-content: center;
    }
`
export const ContainerLogin = styled.div`

border-radius:10px;
  grid-area: login;
  display: flex;
  flex-direction:column;
  align-items: center;
  justify-content: center;
  `

export const ContainerUser = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin-bottom: 13px;

  `

export const Text = styled(MenuText)`
    color:${(props)=>props.color ? props.color :"#ffffff" };
    font-size: ${(props)=>props.fontSize ? props.fontSize  : ".9em"};
    margin-right: 1em;
  background-color:red;
    padding: .5em .1em ;
    cursor:pointer;

    &:hover{
        border:1px solid #ffffff;
        border-radius: .2em;
    }

`

export const InputLogin = styled.input`
    background-color: #ffffff;
    padding: .78em;
    width: 60%;
    border-radius: .4em;
    @media(max-width:850px){
       border-radius: .2em;
       margin: .3em 0;
    }
`


export const Wrapper = styled(MenuItemWrapper)`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-right: 1em;
`


export const LoginButton = styled.button`
font-size:.9em;
font-weight:bold;
    background-color:#fabd60;
    color: #131A22;
    width: 6em;
    height: 3em;
    margin-left: -1em;
    border-radius: 0em .2em .2em 0em ;
    padding: .32em .5em;
    cursor: pointer;
    transition: all 250ms ease;
    border-radius: 0.4em;
    margin-top:20px;

    &:hover{
        background-color:#ff9900;
    }

` 

export const Logo = styled.img`
    width: 6em;
  
    padding: .2em .1em ;
    cursor:pointer;
    margin-bottom:30px;

    &:hover{
        border:1px solid #ffffff;
        border-radius: .2em;
    }
`