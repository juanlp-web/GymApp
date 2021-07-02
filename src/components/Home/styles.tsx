import styled from "styled-components"
import{ PageText as MenuText} from "../helpers/PageText"
import{ PageItemWrapper as MenuItemWrapper} from "../helpers/ItemWrapper"
import {PageText} from "../helpers/PageText"
import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({

slide:{
    display:'flex',
  textAlign:"center",
  alignItems:"center",
  justifyContent:"center",
  height: '60px',
  color: 'white'
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
export const ContainerForm = styled.div`
width: 70%;
height: 80%;
display:flex;
flex-direction:column;
justify-items:start;
`


export const Container = styled.div`
background-color: #ffffff;
  border-style: solid;
    display: grid;
    width: 100%;
    height: 100%;
    grid-template-columns: 150px 1fr 1fr;
    grid-template-rows: 0.120fr 1fr 0.2fr;
    grid-gap: 1rem;
    grid-template-areas:
        "headers headers headers"
        "sidebar main main"
        "sidebar footer footer";
        @media(max-width:600px){
    grid-template-columns: 0px 1fr 1fr;
    grid-template-rows: 0.120fr 1fr 0.2fr;
        justify-content: center; 
     }
`
export const ContainerLogin = styled.div`
background-color:#ffffff;
border-radius:10px;
  grid-area: login;
  display: flex;
  flex-direction:column;
  align-items: center;
  justify-content: center;
  `


export const ContainerMain = styled.div`
  grid-area: main;
  display: flex;
  flex-direction:column;
  align-items: center;
  justify-content: center;

  `

  export const SideBar = styled.div`
  background-color: #0e0606;
    grid-area: sidebar;
    display: flex;
    flex-direction:column;
    align-items: center;
    justify-content: flex-start;

     @media(max-width:600px){
        display:none;
     } 

    `

export const Header = styled.div`
background-color: #0e0606;
  grid-area: headers;
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
    margin-top: 1em;
    width:90%;
    padding: 0.5em .1em;
    cursor:pointer;
    align-content:center;
    text-align:center;

    &:hover{
        border:1px solid #ffffff;
        border-radius: .2em;
    }

`

export const Wrapper = styled(MenuItemWrapper)`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-right: 1em;
`

export const Input = styled.input`
    background-color: #ffffff;
    padding: .78em;
    width: 60%;
    border-radius: .4em;
    @media(max-width:850px){
       border-radius: .2em;
       margin: .3em 0;
    }
`

export const Button = styled.button`
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