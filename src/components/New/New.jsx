import { Button } from 'antd';
import { useNavigate } from "react-router-dom";

export function New() {
  const navigate = useNavigate();

  return <>
    <div>Hello world!</div>
    <Button type="primary" onClick={() => navigate(-1)}>Назад</Button>
  </>
}
