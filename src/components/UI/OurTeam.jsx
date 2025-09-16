import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import "./Ourteam.css";

const teamMembers = [
  {
    name: "Jordan Bauman",
    role: "President",
    bio: "Leads the club and organizes debates.",
    image: "https://via.placeholder.com/150"
  },
  {
    name: "Ben Carter",
    role: "Member",
    bio: "Supports members and handles training.",
    image: "https://via.placeholder.com/150"
  },
  {
    name: "Sophia Lee",
    role: "Member",
    bio: "Keeps records and schedules events.",
    image: "https://via.placeholder.com/150"
  },
  {
    name: "Daniel Smith",
    role: "Member",
    bio: "Manages funds and club expenses.",
    image: "https://via.placeholder.com/150"
  }
];

export default function TeamSection() {

 



  return (
    <section className="team-section">
      <h2>Meet Our Team</h2>

      <div className="team-container">
        <Swiper
         modules={[Navigation, Pagination]}
        spaceBetween={30}
        slidesPerView={1}
        breakpoints={{
          768: { slidesPerView: 2 },  // desktop: 3 cards
          1200: { slidesPerView: 4 }, // large desktop: 4 cards
        }}
        navigation
      pagination={{ clickable: true }}
    >
            {teamMembers.map((m, index)=> (
               
                <SwiperSlide key={index}>
                    <div className="teamcard">
                        {/* <img src={m.image}></img> */}
                        <h3>{m.name}</h3>
                        <p>{m.role}</p>
                    </div>
                </SwiperSlide>
           ) )}
        </Swiper>
      </div>
    </section>
  );
}
