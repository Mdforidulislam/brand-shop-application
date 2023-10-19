import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import '../Button/style.css'


const Banner = ({banner}) => {
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

        {
            banner?.map(item => (
                <SwiperSlide key={item._id}>
                <div style={{backgroundImage:`url(${item.img})`,width:'100%',height:'70vh',backgroundSize:'cover',backgroundPosition:'center'}}>
                 <div className=' bg-black w-full h-full bg-opacity-80 flex justify-center items-center'>
                         <div className=' w-3/4 text-center space-y-4 md:space-y-10'>
                             <h1 className=' text-3xl md:text-6xl font-bold text-white'>{item?.title}</h1>
                             <p className=' md:w-3/4 mx-auto text-base text-white'>{item.description}</p>
                             <div className=' flex gap-4 justify-center'>
                                 <button className=' btn '>BUY NOW</button>
                                 <button className=' btn'>Get Discount</button>
                             </div>
                         </div>
                 </div>
                </div>
           </SwiperSlide>
            ))
        }
   
      
    </Swiper>
        </div>
    );
};

export default Banner;