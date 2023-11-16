export const settings = {
  dots: false,
  infinite: true,
  speed: 700,
  slidesToShow: 4, // Hier werden mindestens 3 Elemente nebeneinander angezeigt
  slidesToScroll: 2, // 3 Elemente gleichzeitig scrollen
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 2,
      },
    },
  ],
};
