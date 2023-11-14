import { useEffect, useState } from 'react';
import FetchAPI from '../functions/FetchAPI';

const Home = () => {
  const [apiData, setApiData] = useState();

  useEffect(() => {
    async function fetchData() {
      // You can await here
      const response = await FetchAPI('random.php');
      console.log(response);
    }
    fetchData();
  }, []);
  return (
    <>
      <p></p>
    </>
  );
};

export default Home;
