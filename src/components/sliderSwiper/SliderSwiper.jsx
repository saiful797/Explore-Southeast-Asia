import { Pagination, A11y, Autoplay} from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import 'swiper/css/effect-cube';

const SliderSwiper = () => {
    return (
        <Swiper
            modules={[ Pagination, A11y, Autoplay]}
            cubeEffect={{
                shadow: true,
                slideShadows: true,
                shadowOffset: 20,
                shadowScale: 0.94,
            }}
            spaceBetween={50}
            slidesPerView={1}
            autoplay={{delay: 3000}}
            pagination={{ clickable: true }}
        >
            <SwiperSlide>
                <div className='grid grid-cols-2'>
                    <div className='flex flex-col justify-center items-center md:space-y-4'>
                        <h1 className='text-cyan-300 font-Tangerine text-4xl font-bold'>Sajek</h1> 
                        <h4 className='text-orange-400 font-Tangerine text-3xl'>is a popular tourist destination</h4>
                        <p className='text-balance text-center'>It's located in the Rangamati Hill District, part of the Chittagong Hill Tracts.</p>
                        <p className='text-3xl font-bold text-green-600'>Bangladesh</p>
                    </div>
                    <div className=' h-full '>
                        <img className='w-full h-[200px] md:h-[280px] lg:h-[450px]' src="https://i.postimg.cc/44vqLRkP/sajek.jpg" alt=""/>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='grid grid-cols-2'>
                    <div className='flex flex-col justify-center items-center md:space-y-4'>
                        <h1 className='text-cyan-300 font-Tangerine text-4xl font-bold'>Bali</h1> 
                        <h4 className='text-orange-400 font-Tangerine text-3xl text-center'> an Indonesian paradise.</h4>
                        <p className='text-balance text-center'>Where culture meets coastline and adventure awaits at every turn.</p>
                        <p className='text-3xl font-bold text-red-600 text-center'>Indonesia</p>
                    </div>
                    <div className=' h-full '>
                        <img className='w-full h-[200px] md:h-[280px] lg:h-[450px]' src="https://i.postimg.cc/ZnGDsmFP/bali.jpg" alt=""/>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='grid grid-cols-2'>
                    <div className='flex flex-col justify-center items-center md:space-y-4'>
                        <h1 className='text-cyan-300 font-Tangerine text-4xl font-bold'>Chiang Mai</h1> 
                        <h4 className='text-orange-400 font-Tangerine text-3xl text-center'> an Thailand paradise.</h4>
                        <p className='text-balance text-center'>Where Culture Blossoms Amidst Nature's Splendor.</p>
                        <p className='text-3xl font-bold text-blue-950 text-center'>Thailand</p>
                    </div>
                    <div className=' h-full '>
                        <img className='w-full h-[200px] md:h-[280px] lg:h-[450px]' src="https://i.postimg.cc/PJDk52S4/Chiang-Mai.jpg" alt=""/>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='grid grid-cols-2'>
                    <div className='flex flex-col justify-center items-center md:space-y-4'>
                        <h1 className='text-cyan-300 font-Tangerine text-3xl font-bold'>Bokor National Park</h1> 
                        <h4 className='text-orange-400 font-Tangerine text-3xl text-center'> a Cambodian park.</h4>
                        <p className='text-balance text-center'>Where Nature's Majesty Reveals Itself in Cambodia's Heart</p>
                        <p className='text-3xl font-bold text-amber-500 text-center'>Cambodia</p>
                    </div>
                    <div className=' h-full '>
                        <img className='w-full h-[200px] md:h-[280px] lg:h-[450px]' src="https://i.postimg.cc/Hs0fvJRV/Bokor-National.jpg" alt=""/>
                    </div>
                </div>
            </SwiperSlide>
        </Swiper>
    );
};

export default SliderSwiper;