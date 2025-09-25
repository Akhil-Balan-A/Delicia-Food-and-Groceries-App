const FoodCarousel = (props) => {
  const { foodData } = props;
  const { image, alt, cuisine } = foodData ?? {};
  return (
    <div className="carousel-item">
      <img src={image} alt={alt} />
      <p>{cuisine}</p>
    </div>
  );
};

export default FoodCarousel;