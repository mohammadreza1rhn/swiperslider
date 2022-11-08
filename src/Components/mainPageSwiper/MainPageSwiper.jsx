import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";

import "./styles.css";

// import required modules
import { Pagination, Navigation, Autoplay } from "swiper";
export default function MainPageSwiper() {
  return (
    <div className="max-w-[2000px] mx-auto min-[1100px]:px-12 min-[1700px]:px-20 py-4 ">
      <div className="w-2/3 mx-auto  text-red-700">
        <Swiper
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          navigation={true}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination, Navigation, Autoplay]}
          className="mySwiper   "
        >
          <SwiperSlide>
            <img
              src="https://darafoods.com/wp-content/uploads/2022/10/%D8%B3%D8%A8%D8%AF-%DA%A9%D8%A7%D9%84%D8%A7%DB%8C%DB%8C.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://darafoods.com/wp-content/uploads/2022/06/%D8%A7%D8%B3%D9%84%D8%A7%DB%8C%D8%AF%D8%B1-%D8%AA%D9%85%D8%A7%D8%B3-%D8%AA%D9%84%D9%81%D9%86%DB%8C.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://darafoods.com/wp-content/uploads/2022/09/%D8%AE%D8%B1%DB%8C%D8%AF-%D8%A8%D8%A7%D8%A7%D9%84%D8%A7%DB%8C-650-0%D9%87%D8%B2%D8%A7%D8%B1%D8%AA%D9%88%D9%85%D8%A7%D9%86.jpg"
              alt=""
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
