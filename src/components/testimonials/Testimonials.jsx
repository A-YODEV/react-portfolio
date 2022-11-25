import "./testimonials.css"
import avatar1 from "../../assets/avatar1.jpg"


// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const data = [
  {
    avatar: avatar1,
    name: "Larry Gasper",
    review: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui assumenda similique sunt, repudiandae voluptatem odit! Animi explicabo atque modi id laboriosam sed cum minima repudiandae, veritatis maiores ipsam recusandae non."
  },
  {
    avatar: avatar1,
    name: "Tomy Angela",
    review: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui assumenda similique sunt, repudiandae voluptatem odit! Animi explicabo atque modi id laboriosam sed cum minima repudiandae, veritatis maiores ipsam recusandae non."
  },
  {
    avatar: avatar1,
    name: "Mike Shawn",
    review: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui assumenda similique sunt, repudiandae voluptatem odit! Animi explicabo atque modi id laboriosam sed cum minima repudiandae, veritatis maiores ipsam recusandae non."
  },
  {
    avatar: avatar1,
    name: "James Woodrich",
    review: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui assumenda similique sunt, repudiandae voluptatem odit! Animi explicabo atque modi id laboriosam sed cum minima repudiandae, veritatis maiores ipsam recusandae non."
  }
]

export default function Testimonials() {
  return (
    <section id="testimonials">
        <h5>Review From Clients</h5>
        <h2>Testimonials</h2>

        <Swiper className="container testimonials_container" 
        // install Swiper modules
      modules={[ Pagination ]}
      slidesPerView={1}
      pagination={{ clickable: true }}
      >
            {
              data.map(({avatar, name, review}, index) => {
                return (
                  <SwiperSlide key={index} className="testimonial">
                    <div className="client_avatar">
                      <img src={avatar1}/>
                    </div>
                    <h5 className="client_name">{name}</h5>
                    <small className="client_review">{review} </small>
                  </SwiperSlide>
                )
              })
            }
        </Swiper>
    </section>
  )
}
