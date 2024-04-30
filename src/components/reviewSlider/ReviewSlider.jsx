import { Pagination, A11y, Autoplay} from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import 'swiper/css/effect-cube';

const ReviewSlider = () => {
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
            centeredSlides={true}
            autoplay={{delay: 3000}}
            pagination={{ clickable: true }}
        >
            <SwiperSlide>
                
                <div className="card-body card-compact bg-amber-100 w-full ">
                    <div className='mx-auto'>
                        <figure><img className='w-20 h-20 rounded-full' src="https://i.postimg.cc/bJfBjqLy/profile-1.jpg" alt="spot" /></figure>
                    </div>
                    <div className="space-y-3 mx-auto">
                        <h2 className="card-title">Adam Smith</h2>
                        <p>
                            <strong>Review: </strong>The product works as described, but it didn't quite meet my expectations. It's just okay.
                        </p>
                        <div className="rating">
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-slate-400" checked/>
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-slate-400"/>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="card-body card-compact bg-amber-100 w-full">
                    <div className='mx-auto'>
                        <figure><img className='w-20 h-20 rounded-full' src="https://i.postimg.cc/wT44jXFb/profile-2.jpg" alt="spot" /></figure>
                    </div>
                    <div className="space-y-3 mx-auto">
                        <h2 className="card-title">Adam Smith</h2>
                        <p>
                            <strong>Review: </strong>The product works as described, but it didn't quite meet my expectations. It's just okay.
                        </p>
                        <div className="rating">
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked/>
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-slate-400"/>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="card-body card-compact bg-amber-100 w-ful">
                    <div className='mx-auto'>
                        <figure><img className='w-20 h-20 rounded-full' src="https://i.postimg.cc/76PSzcZ1/profile-3.jpg" alt="spot" /></figure>
                    </div>
                    <div className="space-y-3 mx-auto">
                        <h2 className="card-title">Adam Smith</h2>
                        <p>
                            <strong>Review: </strong>The product works as described, but it didn't quite meet my expectations. It's just okay.
                        </p>
                        <div className="rating">
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked/>
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-slate-400"/>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="card-body card-compact bg-amber-100">
                    <div className='mx-auto'>
                        <figure><img className='w-20 h-20 rounded-full' src="https://i.postimg.cc/NML5Bw0n/profile-4.jpg" alt="spot" /></figure>
                    </div>
                    <div className="space-y-3 mx-auto">
                        <h2 className="card-title">Adam Smith</h2>
                        <p>
                            <strong>Review: </strong>The product works as described, but it didn't quite meet my expectations. It's just okay.
                        </p>
                        <div className="rating">
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400"/>
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400"/>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
        </Swiper>
    );
};

export default ReviewSlider;