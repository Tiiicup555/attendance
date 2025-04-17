import React from 'react';
import { Button, Form, Input } from 'antd';
import { Layout } from '../../../layout/layout';
import { ArrowRight, KeyPassword, UserProfile } from '../../../icons/icons';

const LoginAntd = () => {
//   const navigate = useNavigate();

//   const handleLogin = async (values) => {
//     const { username, password } = values;
    
//     const data = { username, password };
    
//     const response = await loginTeacher(data); 

//     if (response.success) {
//       navigate('/home'); 
//     } else {
//       message.error('Ошибка входа. Пожалуйста, проверьте логин и пароль.');
//     }
//   };

  return (
    <Form
      className="login-form"
      name="basic"
      labelCol={{ span: 24 }}
    //   onFinish={handleLogin}
      autoComplete="off"
      labelAlign="top"
      requiredMark={false}
    >
      <Form.Item
        className="login-form-item"
        label="Логин"
        name="username"
        rules={[{ required: true, message: 'Введите логин!' }]}
      >
        <Input
          className="login-input"
          placeholder="Введите номер телефона или почту"
          prefix={<UserProfile />}
        />
      </Form.Item>

      <Form.Item
        className="login-form-item"
        label="Пароль"
        name="password"
        rules={[{ required: true, message: 'Введите пароль!' }]}
      >
        <Input.Password
          className="login-input"
          placeholder="Введите пароль"
          prefix={<KeyPassword />}
        />
      </Form.Item>

      <div className="login-choose">
        <Form.Item label={null}>
          <Button className="login-btn" type="primary" htmlType="submit">
            Войти
            <ArrowRight />
          </Button>
        </Form.Item>
      </div>
    </Form>
  );
};

export const LoginPage = () => {
  return (
    <Layout>
      <div className="left">
        <h1 className="title">Вход</h1>
        <LoginAntd />
      </div>
    </Layout>
  );
};
