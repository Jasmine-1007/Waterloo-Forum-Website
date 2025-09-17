import React, { useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import "./OurTeam.css";

const teamMembers = [
  {
    name: "Jordan Bauman",
    role: "President",
    bio: "Jordan Bauman is a Psychology student who loves to get people talking. His research and thinking is about meaning, theology, and psychological/linguistic methods. He’s given large lectures on campus and serves on the UW Senate and Board of Governors. His goal is to shape the future through conversation and debate",
    image: "/team/Jordan.jpg"
  },
  {
    name: "Emily Cheng",
    role: "Chief of Staff",
    bio: "Emily Cheng enjoys strategic planning and speaking persuasively, a love she nourishes through her study of business at Laurier. As the chapter Co-President of the case-study competition, DECA, she presides over 100 students and recently won 1st place in her marketing event at Internationals. She looks forward to raising and discussing interesting questions.",
    image: "/team/Emily.jpg"
  },
  {
    name: "Stephen Fedy",
    role: "Member",
    bio: "Stephen embraces free speech as a foundation for open, respectful dialogue. He’s drawn to conversations where opposing views can be explored in good faith—not to win, but to better understand complex issues and engage thoughtfully with one another.",
    image: "/team/Jordan.jpg"
  },
  {
    name: "Jasmine Charis",
    role: "Member",
    bio: "Jasmine Charis works for ISMC in Waterloo. Her longing for truth cultivated a long-term fascination in philosophy, religion, and theology. She helped restart the UW Conservative Club as event-coordinator and has spoken at multiple events. She values the courage to challenge ideas, especially in an age of conformity.",
    image: "/team/Jasmine.jpg"
  },
  {
    name: "Nyx Kucharski",
    role: "Member",
    bio: "I am a second-year biology student at Waterloo originally from Nova Scotia. I am the Vice President of the University of Waterloo Debate Society and the President of CUSID, the governing body for all of university debate in Canada! Looking forward to having some open-minded and interesting discussions with everyone.",
    image: "/team/Nyx.png"
  },
  {
    name: "Ted Ren",
    role: "Member",
    bio: "Ted Ren was President of the UW Debate Society for two years, and its current Open Training Director. He is also currently the Treasurer of CUSID. He ranked 5th best debater at the 2025 Canadian Parliamentary National Championship and has Tournament Directed or Chief Adjudicated over a dozen debate competitions.",
    image: "/team/Ted.jpg"
  },
  {
    name: "Skylar Duggan",
    role: "Member",
    bio: "Skyler Duggan is a Political Science student specializing in international trade and diplomacy. He founded Waterloo’s Moot Court, serves on WUSA’s Board of Directors, and has held roles at Global Affairs Canada and CIGI. Skyler brings extensive experience in public policy, advocacy, and competitive debate to the team.",
    image: "/team/Skyler.jpg"
  },
  {
    name: "Spencer Robinson",
    role: "Member",
    bio: "Spencer is a grade 12 student who will be attending WLU for Business Administration and Financial Math in the fall. He has experience coordinating venues for hackathons and fostering connections with local politicians to better enfranchise youth. He looks forward to helping build a more intellectual university culture and community",
    image: "/team/person.jpg"
  },
  {
    name: "Ryan Charis",
    role: "Member",
    bio: "Ryan Charis recently graduated from Computer Science at UWaterloo. He and his wife Jasmine love to engage people in thoughtful dialogue, often over a nice homemade meal. He also co-hosts Deep Dive - weekly theme discussions amongst students to discuss the deeper questions in life. He is excited to see respectful debates within universities and demonstrate how we can be united in the midst of the diversity of perspectives in our student body.",
    image: "/team/Ryan Photo.jpg"
  },
  {
    name: "Asha Cox",
    role: "Member",
    bio: "Asha Cox is a classically educated student who has studied everything from ancient Greek to formal logic. His academic passions are mathematics and the Western philosophical and literary canons. Asha exercises his interests by hosting monthly conversation circles on philosophy. His rich interpretations of Nietzsche, Plato and others provide the foundation for spirited conversations.Manages funds and club expenses.",
    image: "/team/Asha.jpg"
  }
];



function TeamCard({member}) {


 
    const [flipped, setFlipped] = useState(false);
    const handleClick = (e)=> {
        if (e && e.stopPropagation) e.stopPropagation();
        setFlipped((f)=> !f);
    }

    const onKeyDown = (e) => {
  if (e.key === "Enter" || e.key === " ") {
    e.preventDefault();
    handleClick(e);
  }
};


  return (
    <div onClick={handleClick} 
    onKeyDown={onKeyDown}
    className={`teamcard ${flipped ? "is-flipped" : "not-flipped"}`}>
                        <div
                        className="front-page">
                        <img style={{width: '50%', height: '180px'}} src={member.image}></img>
                        <h3>{member.name}</h3>
                        <p>{member.role}</p>
                        </div>
                        <div className="back-page">
                            <p>{member.bio}</p>
                        </div>
                    </div>
  )
}


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
                    <TeamCard member={m}></TeamCard>
                </SwiperSlide>
           ) )}
        </Swiper>
      </div>
    </section>
  );
}
