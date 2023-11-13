import { useParams } from "react-router-dom";
const CategoryAreaList = () => {
  const { area } = useParams();
  console.log("von CategoryAreaList==> ", area);
  return <></>;
};

export default CategoryAreaList;
