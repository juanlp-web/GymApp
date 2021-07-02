import { Form, Input, Button, Checkbox } from 'antd';
import {useStyles,Container ,ContainerLogin , Text, ContainerUser,InputLogin,LoginButton,Wrap,Logo} from "./styles"



const Demo = () => {
    const classes = useStyles();

  const onFinish = (values: any) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
      <>
    <Container>
     <ContainerLogin>
    <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        label="Username"
        name="username"
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
      <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
      <Input.Password />
      </Form.Item>

      <Form.Item   name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item  wrapperCol={{ offset: 8, span: 16 }}>
        <Button className={classes.button} type="primary" htmlType="submit">
          Iniciar
        </Button>
      </Form.Item>


    </Form>
    </ContainerLogin>
    </Container>
    </>
  );
};

export default Demo;