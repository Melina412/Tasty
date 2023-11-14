import { useParams } from "react-router-dom";
const CategoryAreaList = () => {
  const { param } = useParams();
  console.log("von CategoryAreaList==> ", param);
  return <></>;
};

export default CategoryAreaList;
