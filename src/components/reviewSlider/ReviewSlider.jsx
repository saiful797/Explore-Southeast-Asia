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
                
                <div className="card-body card-compact w-full bg-black text-white">
                    <div className='mx-auto'>
                        <figure><img className='w-20 rounded-full' src="https://i.ibb.co/Jq10C13/user.png" alt="spot" /></figure>
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
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-white"/>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="card-body card-compact w-full bg-black text-white text-white">
                    <div className='mx-auto'>
                        <figure><img className='w-20 rounded-full' src="https://i.ibb.co/Jq10C13/user.png" alt="spot" /></figure>
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
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-white"/>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="card-body card-compact w-full bg-black text-white text-white">
                    <div className='mx-auto'>
                        <figure><img className='w-20 rounded-full' src="https://i.ibb.co/Jq10C13/user.png" alt="spot" /></figure>
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
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-white"/>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="card-body card-compact w-full bg-black text-white text-white">
                    <div className='mx-auto'>
                        <figure><img className='w-20 rounded-full' src="https://i.ibb.co/Jq10C13/user.png" alt="spot" /></figure>
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
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-white"/>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
        </Swiper>
    );
};

export default ReviewSlider;