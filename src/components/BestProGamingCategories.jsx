import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProdcutByCategory, getLastCategory } from "../ReduxSlicers/productByCategorySlice";
import ProductCart2 from "./ProductCart2";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from 'swiper/modules';

const BestProGamingCategories = () => {
  const allCategories = useSelector((state) => state.categoryProduct.categories);
  const getAllProductsDataByCategories = useSelector((state) => state.categoryProduct.products);
  
  const [active, setActive] = useState(0);
  const [queryS, setQuery] = useState({});

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getLastCategory());
  }, [dispatch]);

  useEffect(() => {
    if (allCategories.length > 0 && !queryS.category) {
      const firstCategoryId = allCategories[0]._id;
      setQuery({ category: firstCategoryId });
      setActive(0);
    }
  }, [allCategories]);

  useEffect(() => {
    if (queryS.category) {
      dispatch(getAllProdcutByCategory(queryS));
    }
  }, [queryS, dispatch]);

  const handleProductByCategory = (e) => {
    const value = e.target.value;
    const query = { category: value };
    setQuery(query);
    setActive(allCategories.findIndex((cat) => cat._id === value));
  };

  return (
    <section className="p-16 max-md:p-4">
      <div className="main h-[70vh] max-sm:h-auto flex max-sm:flex-wrap gap-5">
        <div className="basis-1/4 flex-auto">
          <h1 className="text-white text-3xl font-bold">
            Best <br />
            <span className="linear-text"> Pro Gaming</span>
            <br />
            Categories
          </h1>

          <div className="flex flex-col gap-2 text-center mt-4">
            {allCategories &&
              allCategories.map((category, index) => (
                <React.Fragment key={category._id}>
                  <label
                    htmlFor={category._id}
                    className={`min-w-12 rounded-bl-3xl rounded-tr-3xl p-2 cursor-pointer ${
                      active === index
                        ? "bg-blue-900 text-white"
                        : "bg-white text-muted border border-muted"
                    }`}
                    onClick={() => setActive(index)}
                  >
                    {category.name}
                  </label>
                  <input
                    type="radio"
                    value={category._id}
                    id={category._id}
                    name="category"
                    onClick={(e) => handleProductByCategory(e)}
                    className="hidden"
                  />
                </React.Fragment>
              ))}
          </div>
        </div>

        <div className="basis-3/4 max-md:basis-full max-sm:h-[80vh] overflow-hidden relative">
          <Swiper
            slidesPerView={3}
            spaceBetween={30}
            loop={true}
            breakpoints={{
              0: { slidesPerView: 1, spaceBetween: 20 },
              500: { slidesPerView: 2, spaceBetween: 20 },
              768: { slidesPerView: 2, spaceBetween: 40 },
              1024: { slidesPerView: 3, spaceBetween: 50 },
            }}
            pagination={{ clickable: true }}
            modules={[Navigation]}
          >
            {getAllProductsDataByCategories &&
              getAllProductsDataByCategories.map((product) => (
                <SwiperSlide
                  className="w-full bg-third border border-blue-600 custom-border-radius"
                  key={product._id}
                >
                  <div className="card-container  h-[400px] flex flex-col justify-around">
                    <ProductCart2 product={product} />
                  </div>
                </SwiperSlide>
              ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default BestProGamingCategories;
