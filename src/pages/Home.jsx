import {React} from 'react'
import {Swiper, SwiperSlide} from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'
// import Swiper and modules styles
import 'swiper/css/bundle'

export default function Home() {

  return (
    <div className="main-container">
        <div className='header'>
          <div className='header-text-light'> Now Showing</div>
          <div className="underline-long"></div>
        </div>

      <div className="section-1">
            <div className="contact-card">
                    <img src="src\images\m1.jpg"/>
                <div className="info-group">
                    <p>Mission Possible 2</p>
                    <p>Genre: Action</p>
                </div>
                <div className="btn-container">
                <button className="btn-ticket"> Get Tickets</button>
                </div>
            </div>

            <div className="contact-card">
                    <img src="src\images\m1.jpg"/>
                <div className="info-group">
                    <p>Mission Possible 2</p>
                    <p>Genre: Action</p>
                </div>
                <div className="btn-container">
                <button className="btn-ticket"> Get Tickets</button>
                </div>
            </div>


            <div className="contact-card">
                    <img src="src\images\m1.jpg"/>
                <div className="info-group">
                    <p>Mission Possible 2</p>
                    <p>Genre: Action</p>
                </div>
                <div className="btn-container">
                <button className="btn-ticket"> Get Tickets</button>
                </div>
            </div>

      </div>
      <div className='header'>
          <div className='header-text-light'> Coming Soon</div>
          <div className="underline-long"></div>
        </div>
      <div className="section-1">

            <div className="contact-card">
                <img src="src\images\m2.jpg"/>
                <h3>Mr. Whiskerson</h3>
                <div className="info-group">
                    
                    <p>(212) 555-1234</p>
                </div>
                <div className="info-group">
                    
                    <p>mr.whiskaz@catnap.meow</p>
                </div>
            </div>

            <div className="contact-card">
                <img src="src\images\m2.jpg"/>
                <h3>Mr. Whiskerson</h3>
                <div className="info-group">
                    
                    <p>(212) 555-1234</p>
                </div>
                <div className="info-group">
                    
                    <p>mr.whiskaz@catnap.meow</p>
                </div>
            </div>

            <div className="contact-card">
                <img src="src\images\m2.jpg"/>
                <h3>Mr. Whiskerson</h3>
                <div className="info-group">
                    
                    <p>(212) 555-1234</p>
                </div>
                <div className="info-group">
                    
                    <p>mr.whiskaz@catnap.meow</p>
                </div>
            </div>            
      </div>
    
      <Swiper
        modules={[Pagination, Navigation]}
        slidesPerView={3}
        spaceBetween={30}
        loop={true}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        className="mySwiper"
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>

    </div>
  )
}
