import Image from "next/image";
import React, { useMemo } from "react";
import { motion } from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";

const software = [
  "Web Services: move your business to online.",
  "E-commerce: help you sell to global market",
  "Sub Contract: help push your workload",
  "Personal and community needs: grow your community or project."
]

const hardware = [
  "Supply PCs products.",
  "Upgrade your computers.",
  "Repair and support your computer resources",
  "Supply, support laptops, notebooks, etc."
]

const networking = [
  "Design and install wireless network.",
  "Design and install wired network.",
  "Install and maintain network security",
  "Implement Intranets as per need."
]

const Feature = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  return (
    <div
      className="max-w-screen-xl mt-8 mb-6 sm:mt-14 sm:mb-14 px-6 sm:px-8 lg:px-16 mx-auto"
      id="feature"
    >
      <div className="grid grid-flow-row sm:grid-flow-col grid-cols-1 sm:grid-cols-2 gap-8 p  y-8 my-12">
        <ScrollAnimationWrapper className="flex w-full justify-end">
          <motion.div className="h-full w-full p-4" variants={scrollAnimation}>
            <Image
              src="/assets/Illustration2.png"
              alt="VPN Illustrasi"
              layout="responsive"
              quality={100}
              height={414}
              width={508}
            />
          </motion.div>
        </ScrollAnimationWrapper>
        <ScrollAnimationWrapper>

        <motion.div className="flex flex-col   ml-auto w-full lg:w-9/12" variants={scrollAnimation}>
          <div  style={{fontSize:"2em",color:"#ad8105",textAlign:"left"}}>
        <strong>We Provide these IT Services and Products</strong></div>
         <p style={{color:'#ad8105'}}>A: Software </p>           
          
          <ul className="text-black-500 self-start list-inside ml-8">
            {software.map((feature, index) => (
              <motion.li
                className="relative circle-check custom-list"
                custom={{duration: 2 + index}}
                variants={scrollAnimation}
                key={feature}
                whileHover={{
                scale : 1.1,
                transition: {
                  duration: .2
                }
                }}>
                  {feature}
              </motion.li>
              )
            )}
          </ul>
          <p style={{color:'#ad8105'}}>B: Hardware </p> 
          <ul className="text-black-500 self-start list-inside ml-8">
            {hardware.map((feature, index) => (
              <motion.li
                className="relative circle-check custom-list"
                custom={{duration: 2 + index}}
                variants={scrollAnimation}
                key={feature}
                whileHover={{
                scale : 1.1,
                transition: {
                  duration: .2
                }
                }}>
                  {feature}
              </motion.li>
              )
            )}
          </ul>
          <p style={{color:'#ad8105'}}>C: Network </p> 
          <ul className="text-black-500 self-start list-inside ml-8">
            {networking.map((feature, index) => (
              <motion.li
                className="relative circle-check custom-list"
                custom={{duration: 2 + index}}
                variants={scrollAnimation}
                key={feature}
                whileHover={{
                scale : 1.1,
                transition: {
                  duration: .2
                }
                }}>
                  {feature}
              </motion.li>
              )
            )}
          </ul>
        </motion.div>
        </ScrollAnimationWrapper>
      </div>
    </div>
  );
};

export default Feature;
