import React from 'react'
import {Container ,Wrap,SideBar,Header,Text, ContainerMain,ContainerForm} from "./styles"
import {Menu} from '@material-ui/icons';
import logo from "../assets/logo.png"
import DataTable from './Tabla';

const Home1:React.FC = () => {
    return (

        <Wrap>
        <Container>
            <Header>
            <Text> Home</Text>
            </Header>
          <SideBar>
           <Text> Home</Text>
           <Text> Socios</Text>
           <Text> Membresias</Text>
           <Text> Configuracion</Text>
          </SideBar>
          <ContainerMain>
       
          <ContainerForm>
          <Text color='black'>Cedula</Text>
          <Text color='black'>Nombre</Text>
          <Text color='black'>Apellido</Text>
          <Text color='black'>Fecha Nacimiento</Text>
          <Text color='black'>Direccion</Text>
          <Text color='black'>Comentario</Text>
          </ContainerForm>

          {/* <DataTable /> */}
          </ContainerMain>
        </Container>
        </Wrap>
    )
}

export default Home1
