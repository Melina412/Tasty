const FetchAPI = async (fetchParameter) => {
  const url = `https://www.themealdb.com/api/json/v1/1/${fetchParameter}`;
  return await fetch(url)
    .then((res) => res.json())
    .then((data) => {
      return data;
    })
    .catch((error) => {
      console.error("Ops! Fehler beim Abrufen der Daten: ", error);
      return null;
    });
};
export default FetchAPI;
