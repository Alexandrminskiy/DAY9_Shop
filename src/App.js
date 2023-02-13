import { Button } from 'antd';
import { useNavigate, Link, Outlet } from "react-router-dom";
import { Input, Form } from 'antd';
import { useEffect, useState } from 'react';

 function App() {
  const navigate = useNavigate();
  const [state, setstate] = useState();
  // const form = useForm()

  const onFinish = async (values) => {
    console.log(values);

    const res = await fetch('https://api.react-learning.ru/signin', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(values)
    })

    //проверки на res.ok

    const responce = await res.json();

    localStorage.setItem('token', responce.token)
  }

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const res = await fetch('https://api.react-learning.ru/v2/9-gr/users/me', {
  //       method: 'GET',
  //       headers: {
  //         'Accept': 'application/json',
  //         'Content-Type': 'application/json',
  //         'Authorization': 'Bearer ' + localStorage.getItem('token'),
  //       }
  //     })
  //     const responce = await res.json()

  //     console.log(responce);
  //   }

  //   fetchData()

  // }, [])

  return (
    <div className="App">
      <Form
        name="basic"
        onFinish={onFinish}
        autoComplete="off"
      >
        <Form.Item
          label="Username"
          name="email"
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


        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    
    </div >
  );
}

export default App;
