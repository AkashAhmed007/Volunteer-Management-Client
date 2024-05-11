import { Swiper, SwiperSlide } from 'swiper/react';
// import required modules
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import '../Components/banner.css'
const Banner = () => {
  return (
    <div>
   <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        autoplay={{ delay: 2000 }}
        modules={[Pagination,Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
            <div className="slide1 slider">
              <h1>Slide1</h1>
            </div>
            </SwiperSlide>
        <SwiperSlide>
          <div className="slide2 slider">
              <h1>Slide1</h1>
            </div>
            </SwiperSlide>
        <SwiperSlide>
          <div className="slide3 slider">
              <h1>Slide1</h1>
            </div>
            </SwiperSlide>
        <SwiperSlide>
          <div className="slide4 slider">
              <h1>Slide1</h1>
            </div>
            </SwiperSlide>
        <SwiperSlide>
          <div className="slide5 slider">
              <h1>Slide1</h1>
            </div>
            </SwiperSlide>
        <SwiperSlide>
          <div className="slide6 slider">
              <h1>Slide1</h1>
            </div>
            </SwiperSlide>
        <SwiperSlide>
          <div className="slide7 slider">
              <h1>Slide1</h1>
            </div>
            </SwiperSlide>
        <SwiperSlide>
          <div className="slide8 slider">
              <h1>Slide1</h1>
            </div>
            </SwiperSlide>
        <SwiperSlide>
          <div className="slide9 slider">
              <h1>Slide1</h1>
            </div>
            </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
