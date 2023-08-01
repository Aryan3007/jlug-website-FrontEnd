import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import MemberCard from "./MemberCard";

import {SamvegSir , KlevinSir , AshwinSir , MustkeemSir , SaketSir} from '../assets/members_Landing'

import React from "react";

const PresentTeamCarousel = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    
      
      <Carousel responsive={responsive}>
      {/* <h1 className="heading text-6xl text-white md:text-4xl md:text-white md:text-center"><span className="italic text-3xl md:text-sm">meet</span>Our Team</h1> */}
        <div>
          <MemberCard name = "Samveg Sir" profile = {SamvegSir} designation = "Former-President" info = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, debitis dolores? Provident sit tempora nobis accusamus dolores error molestiae repellat?"/>
        </div>
        <div>
          <MemberCard name = "MustKeem Sir" profile = {MustkeemSir} designation = "President" info = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, debitis dolores? Provident sit tempora nobis accusamus dolores error molestiae repellat?"/>
        </div>
        <div>
          <MemberCard name = "Klevin Sir" profile = {KlevinSir} designation = "Graphics Head" info = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, debitis dolores? Provident sit tempora nobis accusamus dolores error molestiae repellat?"/>
        </div>
        <div>
          <MemberCard name = "Ashwin Sir" profile = {AshwinSir} designation = "Operation Head" info = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, debitis dolores? Provident sit tempora nobis accusamus dolores error molestiae repellat?"/>
        </div>
        <div>
          <MemberCard name = "Saket Sir" profile = {SaketSir} designation = "Management Head" info = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, debitis dolores? Provident sit tempora nobis accusamus dolores error molestiae repellat?"/>
        </div>
      </Carousel>
   
  );
};

export default PresentTeamCarousel;