import { Card, Col, Row } from 'antd';
import React from 'react'
import DemoPie from './pie';
import { useStyles } from "./styles"

const { Meta } = Card;



const Dashboard = () => {
    const classes = useStyles();
 console.log("Dashboard")
    return (
        <>
    <Row  className={classes.rowcards} justify="space-around" gutter={24}>

    <Col className={classes.columncards}  xs={20} sm={16} md={12} lg={8} xl={4}>
        <Card size='small'
        bodyStyle={{ fontWeight:"bold", fontSize: '25px', textAlign:'center'}} 
        headStyle={{ fontWeight:"bold",backgroundColor:' #1387aa', textAlign:'center'}} title="Socios Activos" bordered={true} >
          824
        </Card>
      </Col>

      <Col className={classes.columncards}  xs={20} sm={16} md={12} lg={8} xl={4}>
        <Card size='small'
        bodyStyle={{ fontWeight:"bold", fontSize: '25px', textAlign:'center'}} 
        headStyle={{ fontWeight:"bold",backgroundColor:' #e94747', textAlign:'center'}} title="Socios Inactivos" bordered={true} >
          824
        </Card>
      </Col>

    <Col className={classes.columncards}  xs={20} sm={16} md={12} lg={8} xl={4}>
        <Card size='small'
        bodyStyle={{ fontWeight:"bold", fontSize: '25px', textAlign:'center'}} 
        headStyle={{ fontWeight:"bold",backgroundColor:' #d32358', textAlign:'center'}} title="Socios de Membresias" bordered={true} >
         824
        </Card>
      </Col>

      <Col className={classes.columncards}  xs={20} sm={16} md={12} lg={8} xl={4}>
        <Card size='small'
        bodyStyle={{ fontWeight:"bold", fontSize: '25px', textAlign:'center'}} 
        headStyle={{ fontWeight:"bold",backgroundColor:' #3bcc67', textAlign:'center'}} title="Ventas de Productos" bordered={true} >
                   824
        </Card>
      </Col>
    </Row>

    <Row justify="space-around" gutter={24}>
    <Col xs={20} sm={16} md={12} lg={8} xl={8}>
    <DemoPie />
    </Col>

    <Col xs={20} sm={16} md={12} lg={8} xl={8}>
    <DemoPie />
    </Col>
    </Row>

    </>
    )
}

export default Dashboard
