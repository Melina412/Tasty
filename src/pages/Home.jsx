import { useEffect, useState } from "react";
import FetchAPI from "../functions/FetchAPI";
import AreasSlider from "../components/sliders/AreasSlider";

const Home = () => {
  const [apiData, setApiData] = useState();
  useEffect(() => {
    async function fetchData() {
      // You can await here
      const response = await FetchAPI("random.php");
      console.log("Von Home==> ", response);
      // ...
    }
    fetchData();
  }, []);
  return (
    <>
      <AreasSlider />
      <p></p>
    </>
  );
};

export default Home;
