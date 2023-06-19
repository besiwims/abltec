import React, { useMemo } from "react";
import Image from "next/image";
import ButtonPrimary from "./misc/ButtonPrimary";
import {motion} from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";
import ReactPlayer from 'react-player';

const Hero = ({
  listUser = [
    {
      name: "Total Websites Done",
      number: "120",
      icon: "/assets/Icon/heroicons_sm-user.svg",
    },
    {
      name: "Web Apps",
      number: "93",
      icon: "/assets/Icon/gridicons_location.svg",
    },
    {
      name: "Total Hosted Accounts",
      number: "110",
      icon: "/assets/Icon/bx_bxs-server.svg",
    },
  ],
}) => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  ReactPlayer.playing = "false"
 
  return (
    <div
      className="max-w-screen-xl mt-40 px-8 xl:px-16 mx-auto"
      id="about"
    >
      <div  style={{fontSize:"2em",color:"#ad8105",textAlign:"center"}}>
          <h1 className="text-3xl lg:text-4xl xl:text-5xl font-medium text-black-600 leading-normal">
            Get world class <strong style={{color:'#ad8105'}}> IT Services and Products  </strong> from 
            <strong style={{color:'#04c87c'}}> ABL Tech.</strong>
          </h1>
        </div>
        <div style={{width:"100%",textAlign:"center"}}>
             <div className='player-wrapper' id="container">
              <ReactPlayer
                className='react-player'
                url='https://youtu.be/MX79n1kjb58'
                width='100%'
                height='450px'
                
              />
            </div>
            </div>
            <div className=" flex flex-col  items-start row-start-2 sm:row-start-1" 
            style={{verticalAlign:"top"}}>
              <p className="text-black-500 mt-4 mb-6">
              We create systems such as websites or web apps that adhere to your needs: speed, responsive designs, professional 
              and attractive. 
              <br/><br/>
              ABL Tech uses Artificial Intelligence to automate many tasks. Unlike many agencies that force their
              tools on customers, we say 'Bring Your Own Tools'(BYOT), be it Blockchain, IoT, AI, ML, pytthon, C++, c#, PHP, Mysql, HTML 5, Tailwindcss/CSS, 
              Javascript, Frameworks: Laravel, reactjs or custom tools. 
              <br/><br/>
              We work 24/7 remotely and locally to get your job done quickly, communicating 
              with you via Zoom, Google Meet, Microsoft Teams etc.<br/><br/>
              Stop losing on service providers forcing you to pay for what you did not ask for.
              Our flexibility comes from our usage of 'Agile' development approach which requires that we do sprints and involve customers at 
              in every cycle of software production.
              </p>
              <ButtonPrimary>Get Started</ButtonPrimary>
            </div>
      <div  style={{fontSize:"2em",color:"#ad8105",textAlign:"center"}}>
        <strong>Stats on Projects and Hosting</strong></div>
      <div className="relative w-full flex"> 
        <ScrollAnimationWrapper
          className="rounded-lg w-full grid grid-flow-row sm:grid-flow-row grid-cols-1 sm:grid-cols-3 py-9 divide-y-2 sm:divide-y-0 sm:divide-x-2 divide-gray-100 bg-white-500 z-10">
         
          {listUser.map((listUsers, index) => (
            <motion.div
              className="flex items-center justify-start sm:justify-center py-4 sm:py-6 w-8/12 px-4 sm:w-auto mx-auto sm:mx-0"
              key={index}
              custom={{duration: 2 + index}}
              variants={scrollAnimation}
            >
              <div className="flex mx-auto w-40 sm:w-auto">
                <div className="flex items-center justify-center bg-orange-100 w-12 h-12 mr-6 rounded-full">
                  <img src={listUsers.icon} className="h-6 w-6" />
                </div>
                <div className="flex flex-col">
                  <p className="text-xl text-black-600 font-bold">
                    {listUsers.number}+
                  </p>
                  <p className="text-lg text-black-500">{listUsers.name}</p>
                </div>
              </div>
            </motion.div>
          ))}
       </ScrollAnimationWrapper>
       <div
          className="absolute bg-black-600 opacity-5 w-11/12 roudned-lg h-12 sm:h-48 top-0 mt-8 mx-auto left-0 right-0"
          style={{ filter: "blur(114px)" }}
       >fff</div>
      </div>
    </div>
  );
};

export default Hero;
