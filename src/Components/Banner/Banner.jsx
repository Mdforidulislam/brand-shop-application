import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import '../Button/style.css'


const Banner = () => {
    return (
        <div>
            <Swiper
      // install Swiper modules
       effect='Coverflow'
      modules={[Navigation, Pagination, Scrollbar, A11y,EffectFade]}
      slidesPerView={1}
      pagination={{ clickable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
      
    >
      <SwiperSlide>
           <div style={{backgroundImage:'url(https://images.unsplash.com/photo-1515940279136-2f419eea8051?auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&w=1914)',width:'100%',height:'100vh',backgroundSize:'cover',backgroundPosition:'center'}}>
            <div className=' bg-black w-full h-full bg-opacity-80 flex justify-center items-center'>
                    <div className=' w-3/4 text-center space-y-4 md:space-y-10'>
                        <h1 className=' text-3xl md:text-6xl font-bold text-white'>Samsung Galaxy  Elevate Your Mobile Experience</h1>
                        <p className=' md:w-3/4 mx-auto text-base text-white'>Experience the future of mobile technology with the Samsung Galaxy This cutting-edge device is packed with innovative features, from its stunning display to its powerful performance.</p>
                        <div className=' flex gap-4 justify-center'>
                            <button className=' btn '>BUY NOW</button>
                            <button className=' btn'>Get Discount</button>
                        </div>
                    </div>
            </div>
           </div>
      </SwiperSlide>
      <SwiperSlide>
      <div style={{backgroundImage:'url(https://images.unsplash.com/photo-1525004351186-bdc426f3efaa?auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&w=2070)',width:'100%',height:'100vh',backgroundSize:'cover',backgroundPosition:'center'}}>
            <div className=' bg-black w-full h-full bg-opacity-80 flex justify-center items-center'>
                    <div className=' w-3/4 text-center space-y-4 md:space-y-10'>
                        <h1 className=' text-3xl md:text-6xl font-bold text-white'>Your Gateway to Information and Innovation</h1>
                        <p className='md:w-3/4 mx-auto text-base text-white'>Google, the search engine giant, has transformed the way we access information, connect with the world, and innovate. With a myriad of services, including the worlds most popular search engine, Google Maps, Gmail, and more</p>
                        <div className=' flex gap-4 justify-center'>
                            <button className=' btn '>BUY NOW</button>
                            <button className=' btn'>Get Discount</button>
                        </div>
                    </div>
            </div>
           </div>
      </SwiperSlide>
      <SwiperSlide>
      <div style={{backgroundImage:'url(https://images.unsplash.com/photo-1524656855800-59465ebcec69?auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&w=2069)',width:'100%',height:'100vh',backgroundSize:'cover',backgroundPosition:'center'}}>
            <div className=' bg-black w-full h-full bg-opacity-80 flex justify-center items-center'>
                    <div className=' w-3/4 text-center space-y-4 md:space-y-10'>
                        <h1 className=' text-3xl md:text-6xl font-bold text-white'>Unleash Limitless Possibilities with the New Apple</h1>
                        <p className='md:w-3/4 mx-auto text-base text-white'>Discover the extraordinary with the all-new Apple. Designed to redefine your digital experience, this sleek and powerful device seamlessly combines cutting-edge technology with unmatched elegance. Immerse yourself in stunning visuals, fast</p>
                        <div className=' flex gap-4 justify-center'>
                            <button className=' btn '>BUY NOW</button>
                            <button className=' btn'>Get Discount</button>
                        </div>
                    </div>
            </div>
           </div>
      </SwiperSlide>
      <SwiperSlide> 
        <div style={{backgroundImage:'url(https://images.unsplash.com/photo-1680598810629-8ddc88c90901?auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&w=1932)',width:'100%',height:'100vh',backgroundSize:'cover',backgroundPosition:'center'}}>
            <div className=' bg-black w-full h-full bg-opacity-80 flex justify-center items-center'>
                    <div className=' w-3/4 text-center space-y-4 md:space-y-10'>
                        <h1 className=' text-3xl md:text-6xl font-bold text-white'> Pioneering Tomorrows Technology Today</h1>
                        <p className='md:w-3/4 mx-auto text-base text-white'>Intel, a global technology leader, is at the forefront of innovation, shaping the future of computing and data-driven solutions. With a legacy of breakthroughs and a commitment to excellence, Intel powers the devices and technologies that drive our world forward</p>
                        <div className=' flex gap-4 justify-center'>
                            <button className=' btn '>BUY NOW</button>
                            <button className=' btn'>Get Discount</button>
                        </div>
                    </div>
            </div>
           </div>
      </SwiperSlide>
    </Swiper>
        </div>
    );
};

export default Banner;