const FoodCarousel = (props) => {
  const { foodData } = props;
  const { image, alt, cuisine } = foodData ?? {};
  return (
    <div className="flex flex-col items-center gap-2 cursor-pointer flex-none mr-5">
      <img src={image} alt={alt} className="w-[200px] h-[200px] object-cover rounded-[20%] border-2 border-gray-600 mt-5 transform transition-transform duration-200 hover:scale-110 " />
      <p>{cuisine}</p>
    </div>
  );
};

export default FoodCarousel;