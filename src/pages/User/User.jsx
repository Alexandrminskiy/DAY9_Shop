import { Button } from 'antd';
import { useLocation, useParams, useSearchParams } from "react-router-dom";

export function User() {
  const location = useLocation();
  const params = useParams();
  const [searchParams] = useSearchParams();

  console.log(searchParams.get('search'));

  // const { id, userId } = useParams();

  // пример конкретного использования
  // useEffect(() => {
  // fetch(user/param.id)
  // }, [])

  console.log("params", params);
  // console.log("location", location);

  return <>
    <div>Мы на странице юзера!</div>
    <Button type="primary">какая то кнопка</Button>
  </>
}
