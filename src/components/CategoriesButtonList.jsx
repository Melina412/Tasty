import { useLocation } from "react-router-dom";
const CategoriesButtonList = () => {
  const location = useLocation();
  const areas = location.state?.areas;
  const categorys = location.state?.categorys;
  console.log("location.state", location.state);
  console.log("Von CategoriesButtonList Areas==> ", areas);
  console.log("Von CategoriesButtonList Categorys==> ", categorys);
  return (
    <>
      {/* Info für Melina */}
      {/* {areas && (
        <div>
          {areas.map((area, index) => (
            <p key={index}>{area.description}</p>
          ))}
        </div>
      )} */}
    </>
  );
};

export default CategoriesButtonList;
