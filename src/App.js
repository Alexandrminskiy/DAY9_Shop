import { Button } from 'antd';
import { useNavigate, Link, Outlet } from "react-router-dom";
import { Table, Input, Form, useForm } from 'antd';
import { useEffect } from 'react'

const data = [
  {
    id: '123457',
    name: 'John Brown',
  },
  {
    id: '123456',
    name: 'Jim Green',
  },
  {
    id: '12345',
    name: 'Joe Black',
  },
];

function App() {
  const navigate = useNavigate();
  // const form = useForm()

  const handleClick = () => {
    return navigate("new");
  }

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

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('https://api.react-learning.ru/v2/9-gr/users/me', {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + localStorage.getItem('token'),
        }
      })
      const responce = await res.json()

      console.log(responce);
    }

    fetchData()

  }, [])

  const columns = [
    {
      title: 'Name',
      key: 'name',
      render: (record) => <p >{record.name}</p>,
    },
    {
      title: 'Action',
      key: 'action',
      render: (record) => (
        <div key={record.id} size="middle">
          <Link to={`users/${record.id}/petr/${record.id}?search=${record.name}`}>Подробнее о {record.name}</Link>
        </div>
      ),
    },
  ];

  return (
    <div className="App">
      <Outlet />
      <div>Hello world its main page!</div>
      <div>Client Side Rendering</div>
      <Button type="primary" onClick={handleClick}>go to new page</Button>

      <Table pagination={false} columns={columns} dataSource={data} />

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
