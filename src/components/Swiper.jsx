import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";



import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import img1 from '../assets/home1.jpg'
import img2 from '../assets/home2.jpg'
import img3 from '../assets/home3.jpg'
import img4 from '../assets/home4.jpg'
import img5 from '../assets/home5.jpg'

const MySwiper = () => {
  return (
    <Swiper
  modules={[Navigation, Pagination, Autoplay]}
  spaceBetween={0}
  slidesPerView={1}
  navigation
  pagination={{ clickable: true }}
  autoplay={{ delay: 2000 }}
  loop
>

      <SwiperSlide>
        <img src={img1} alt="Slide 1" className="slide-img" />
      </SwiperSlide>

      <SwiperSlide>
        <img src={img2} alt="Slide 2" className="slide-img" />
      </SwiperSlide>

      <SwiperSlide>
        <img src={img3} alt="Slide 3" className="slide-img" />
      </SwiperSlide>

      <SwiperSlide>
        <img src={img4} alt="Slide 4" className="slide-img" />
      </SwiperSlide>

      <SwiperSlide>
        <img src={img5} alt="Slide 5" className="slide-img" />
      </SwiperSlide>
     
    </Swiper>
  );
};

export default MySwiper;
