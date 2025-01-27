import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


import slide1 from './../../assets/Home/slide1.jpg'
import slide2 from './../../assets/Home/slide2.jpg'
import slide3 from './../../assets/Home/slide3.jpg'
import slide4 from './../../assets/Home/slide4.jpg'
import slide5 from './../../assets/Home/slide5.jpg'
import SectionTitle from './../SectionTitle/SectionTitle';

const Catagory = () => {
    return (

        <section>

            <SectionTitle
            subheading={"---From 11:00am to 10:00pm---"}
            heading={"order Online"}
            >
            
            </SectionTitle>


            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                centeredSlides={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper mb-24"
            >
                <SwiperSlide>
                    <img src={slide1} className='w-full max-h-[450px]' alt="" />
                    <h3 className='uppercase text-white -mt-24 mb-8 text-center text-4xl'>Salads</h3>
                </SwiperSlide>

                <SwiperSlide>
                    <img src={slide2} className='w-full max-h-[450px]' alt="" />
                    <h3 className='uppercase text-white -mt-24 text-center text-4xl'>Pizza</h3>
                </SwiperSlide>

                <SwiperSlide>
                    <img src={slide3} className='w-full max-h-[450px]' alt="" />
                    <h3 className='uppercase text-white -mt-24 text-center text-4xl'>Soups</h3>
                </SwiperSlide>

                <SwiperSlide>
                    <img src={slide4} className='w-full max-h-[450px]' alt="" />
                    <h3 className='uppercase text-white -mt-24 text-center text-4xl '>desserts</h3>
                </SwiperSlide>

                <SwiperSlide>
                    <img src={slide5} className='w-full max-h-[450px]' alt="" />
                    <h3 className='uppercase text-white -mt-24 text-center text-4xl'>Salads</h3>
                </SwiperSlide>
            </Swiper>

        </section>
    );
};

export default Catagory;