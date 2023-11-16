export const returnSettings = (_typeData, name) => {
  name = `${name.charAt(0).toUpperCase()}${name.slice(1)}`;
  let index = 0;

  _typeData.forEach((type, i) => {
    if (type === name) {
      index = i + 1;
      return;
    }
  });

  let currentIndex = index % 3 === 1 ? Math.round(index / 3) : Math.round(index / 3) - 1;

  return {
    rows: 1,
    slidesPerRow: 3,
    centerPadding: '10px',
    centerMode: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: currentIndex !== -1 ? currentIndex : 0,
    slickGoTo: currentIndex !== -1 ? currentIndex : 0,
    touchMove: true,
    accessibility: false,
    arrows: window.innerWidth > 768 ? true : false,
  };
};
