import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { useDispatch, useSelector } from "react-redux";
import { getAllTestimonial } from "../ReduxSlicers/testimonialSlice";
import RatingStar from "./RatingStar";
const Testimonials = () => {
  const testimonials = useSelector((state) => state.testimonial.testimonials);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllTestimonial({ limit: 5, status: true }));
  }, []);
  console.log(testimonials);
  return (
    <div className="p-16 max-md:p-2 space-y-9">

        <div>
            <h1 className="text-4xl font-semibold ">Testimonials</h1>
        </div>
      <Swiper
        slidesPerView={2}
        spaceBetween={10}
        loop={true}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
            480: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            800:{
                slidesPerView:2,
                spaceBetween:30
            }
        }}
      >
        {testimonials &&
          testimonials.map((item) => (
            <SwiperSlide key={item._id} className=" ">
              <div className="w-full h-full bg-third custom-border-radius border border-blue-800 flex p-5 gap-5">
                <div className="w-1/4 flex justify-center items-center">
                  <img src={item.productId.primaryImage} alt="" />
                </div>

                <div className="flex flex-col gap-4 w-full ">
                  <h1 className="text-2xl font-bold text-[#111111]">
                    {item.title}
                  </h1>
                  <p className="text-muted">{item.comment}</p>

                  <div className="flex justify-between">
              <div className="flex items-center gap-10">

  <div className="w-12 h-12 rounded-full">

                    <img src={item.userId.image} alt="" className="w-full h-full rounded-full object-cover " />
                    </div>
                    <div>
                      <h2 className="text-orange-900"> username <span className=" font-bold">{item.userId.name}</span></h2>
                      <h2 className="text-orange-950">name <span className="font-bold">{item.userId.username}</span></h2>
                    </div>

              </div>
                  

                    <div className="flex items-center gap-7">

                    <RatingStar rating={item.rating} />


                    <p className="text-blue-900">
                      {item.rating}
                      <span className="text-black">/5</span>
                    </p>
                    </div>

                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};

export default Testimonials;
