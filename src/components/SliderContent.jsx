import { Slider, Card } from ".";

const SliderContent = ({ title, data }) => {
  const responsive = [
    {
      breakpoint: 2000,
      settings: {
        slidesToShow: 6,
        slidesToScroll: 6,
        infinite: true,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 3,
      },
    },
    {
      breakpoint: 568,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
  ];
  return (
    <div className="my-5 text-whiteSmoke w-[96%] mx-auto">
      <h1 className="text-lg mb-2">{title}</h1>
      <Slider
        slidesToShow={5}
        slidesToScroll={5}
        swipeToSlide={true}
        responsive={responsive}
        autoplay={true}
      >
        {data?.map((item) => (
          <Card data={item} key={item.id} />
        ))}
      </Slider>
    </div>
  );
};

export default SliderContent;
