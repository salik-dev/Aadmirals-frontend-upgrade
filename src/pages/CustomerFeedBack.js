import { Swiper,Pagination, SwiperSlide } from 'swiper/react';
import CustomerCard from '../component/CustomerCard';
import 'swiper/css';
function CustomerFeedBack (){
    return(
        <Swiper
                spaceBetween={20}
                slidesPerView={3}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                >
            <SwiperSlide> 
                    <CustomerCard/>
            </SwiperSlide>
            <SwiperSlide> 
                    <CustomerCard/>
            </SwiperSlide>
            <SwiperSlide> 
                    <CustomerCard/>
            </SwiperSlide>
            <SwiperSlide> 
                    <CustomerCard/>
            </SwiperSlide>
            
               
           
        </Swiper>

    );
}
export default CustomerFeedBack;