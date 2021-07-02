import 'antd/dist/antd.css';
import { Layout, Menu, Breadcrumb } from 'antd';
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
  SettingFilled
} from '@ant-design/icons';
import { useEffect, useState } from 'react';
import { useStyles } from "./styles"
import DataTable from './Tabla';
import Dashboard from '../dashboards/dashboard';
import { TablaSocios } from '../Socios/TablaSocios';
const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

const Home: React.FC = () => {

  const classes = useStyles();
  const [state, setstate] = useState(true)
  const [menu, setMenu] = useState({ key: "" })

  const onCollapse = (collapsed: boolean) => {
    console.log(collapsed);
    setstate(collapsed);
  };

  const handleMenu = (e: any) => {
    console.log(e);
    setMenu({ key: e.key });
  };

  useEffect(() => {
    console.log("test")
    setMenu({ key: "1" });
    return () => {
    }
  }, [])

  const getComponent = (item: { key: string }) => {
    switch (item.key) {
      case '1':
        return <Dashboard />
      case '2':
        return <TablaSocios />
        case '2':
        return <div style={{display: "flex", alignItems: "center",justifyContent:"center"}}>Configuracion</div>
    }
  }

  return (

    <Layout style={{ minHeight: '100vh' }}>
      <Sider collapsible collapsed={state} onCollapse={onCollapse}>

        <div className={classes.slide}>Gymnos</div>
        <Menu onSelect={(e) => { handleMenu(e) }} theme="dark" defaultSelectedKeys={['1']} mode="inline">
          <Menu.Item key="1" icon={<PieChartOutlined />}  >
            Dashboard
          </Menu.Item>
          <Menu.Item key="2" icon={<TeamOutlined />}>
            Socios
          </Menu.Item>
          <Menu.Item key="3" icon={<SettingFilled />}>
            Ajustes
          </Menu.Item>

          {/* <SubMenu key="sub1" icon={<TeamOutlined />} title="Team">
            <Menu.Item key="4">Team 1</Menu.Item>
            <Menu.Item key="5">Team 2</Menu.Item>
          </SubMenu> */}

        </Menu>
      </Sider>
      <Layout >
        {/* <Header  style={{ padding: 0 }} /> */}
        <Content style={{ margin: '0 16px' }}>

          <div  >
            {getComponent(menu)}
          </div>

        </Content>


        <Footer style={{ textAlign: 'center' }}>Juan Carlos Almanzar ©2021</Footer>
      </Layout>
    </Layout>
  )
}

export default Home;