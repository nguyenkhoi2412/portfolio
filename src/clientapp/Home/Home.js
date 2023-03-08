import "./_home.less";
import { Button, Typography  } from 'antd';
const { Text, Link } = Typography;

const Home = () => {
  return <>
    <Button type="primary" size={`large`}>
      Primary
    </Button>
    <Link href="https://ant.design" target="_blank">
      Ant Design (Link)
    </Link>
  </>
};

export default Home;
