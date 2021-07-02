import styled from "styled-components"
import{ PageText as MenuText} from "../helpers/PageText"
import{ PageItemWrapper as MenuItemWrapper} from "../helpers/ItemWrapper"
import {PageText} from "../helpers/PageText"



export const Wrap = styled.div`
position: absolute;
width: 100%;
height: 100%;
inset:0;
background-color:black;

`


export const Container = styled.div`

  border-style: solid;

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
background-color: black;
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