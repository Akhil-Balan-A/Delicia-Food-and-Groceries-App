import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useDispatch } from "react-redux";
import { addItem } from "../redux/cartSlice.js";


const RestCategory = ({ dishData, menuData }) => {
  const [openCategoryId, setOpenCategoryId] = useState(null);

  const dispatch = useDispatch();

    const handleAddToCart = (dish) => {
    dispatch(addItem(dish));
  };

  const getDishesByIds = (dishIds) => {
    return dishData.filter((dish) => dishIds.includes(dish.dishId));
  };


  // Variants for staggered animation
  const containerVariants = {
    hidden: { height: 0, opacity: 0 },
    visible: {
      height: "auto",
      opacity: 1,
      transition: {
        duration: 0.4, // faster container expansion
      ease: "easeInOut",
      // Remove staggerChildren for instant appearance
      },
    },
    exit: { height: 0, opacity: 0, transition: { duration: 0.3 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  };

  return (
  <div className="flex flex-col gap-4">
    {(!menuData || menuData.length === 0) ? (
      <p className="text-center text-red-600 text-xl font-medium py-10">
        🍽️ No menu added by this hotel yet.
      </p>
    ) : (
      menuData.map((category) => {
        const { categoryId, category: categoryName, availableTime, dishIds } = category;
        const dishes = getDishesByIds(dishIds);
        const isOpen = openCategoryId === categoryId;

        const getCategoryEmoji = (categoryName) => {
          switch (categoryName) {
            case "Starters": return "🍤 ";
            case "Breakfast": return "🍳 ";
            case "Lunch": return "🥗 ";
            case "Dinner": return "🍽️ ";
            case "Snacks": return "🍟 ";
            case "Special": return "✨ ";
            case "Beverages & Deserts": return "🥤 ";
            default: return "";
          }
        };

        return (
          <div key={categoryId} className="border rounded-lg overflow-hidden shadow-sm">
            {/* Header */}
            <div
              className="flex justify-between items-center bg-red-100 px-4 py-3 cursor-pointer hover:bg-red-300 transition duration-300"
              onClick={() => setOpenCategoryId(isOpen ? null : categoryId)}
            >
              <div>
                <h4 className="font-semibold text-lg">
                  {getCategoryEmoji(categoryName)}{categoryName}{" "}
                  <span className="text-gray-800 text-sm">({dishIds.length})</span>
                </h4>
                <p className="text-sm text-gray-500">
                  {availableTime.map((t, i) => (
                    <span key={i}>
                      {t.start} - {t.end}
                      {i !== availableTime.length - 1 && ", "}
                    </span>
                  ))}
                </p>
              </div>
              <span className="text-gray-600 text-xl">{isOpen ? "−" : "+"}</span>
            </div>

            {/* Body */}
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  key="content"
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="overflow-hidden bg-white border-t"
                >
                  {dishes.length > 0 ? (
                    dishes.map((dish) => (
                      <motion.div
                        key={dish.dishId}
                        variants={itemVariants}
                        className="flex items-center gap-4 p-4 border-b last:border-none"
                      >
                        <img
                          src={dish.image}
                          alt={dish.name}
                          className="w-[150px] h-[150px] object-cover rounded-md"
                        />
                        <div className="flex flex-col gap-1">
                          <h5 className="font-semibold text-lg">{dish.name}</h5>
                          <p className="text-gray-600 text-sm">{dish.description}</p>
                          <p className="font-semibold text-gray-800">₹{dish.price}</p>
                          <button
                            className="cursor-pointer mt-2 w-18 px-2 py-2  text-center bg-red-500 text-white rounded hover:bg-red-700 transition"
                            onClick={() => handleAddToCart(dish)}
                            
                          >
                            Add+
                          </button>
                        </div>
                      </motion.div>
                    ))
                  ) : (
                    <p className="text-gray-500 p-4">No dishes in this category.</p>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })
    )}
  </div>
);

};

export default RestCategory;
