import React from 'react'
import {Container ,ContainerLogin , Text, ContainerUser,InputLogin,LoginButton,Wrap,Logo} from "./styles"
import {Menu} from '@material-ui/icons';
import logo from "../assets/logo.png"
import { useHistory } from 'react-router';

const Login:React.FC = () => {
    const history = useHistory();

const handleLogin = () =>{
    history.push('/Home');
}
    return (

        <Wrap>
        <Container>
          
             <ContainerLogin>
             <Logo src={logo}/>
                 <ContainerUser>       
                 <Text  >Usuario</Text>
                 <InputLogin placeholder='Digite su usuario'/>
                 </ContainerUser>

                 <ContainerUser>
                 <Text  >Contraseña</Text>
                 <InputLogin placeholder='Digite su contraseña'/>
                 </ContainerUser>

                 <LoginButton onClick={handleLogin}>Login</LoginButton>
             </ContainerLogin>
        
           
        </Container>
        </Wrap>
    )
}

export default Login
