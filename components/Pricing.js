import React, { useMemo } from "react";
import Image from "next/image";
import Testimoni from "./Testimoni";
import ButtonPrimary from "./misc/ButtonPrimary";
import ButtonOutline from "./misc/ButtonOutline.";
import { motion } from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";

const Pricing = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  return (
    <div
      className="bg-gradient-to-b from-white-300 to-white-500 w-full py-14"
      id="pricing"
    >
      <div className="max-w-screen-xl  px-6 sm:px-8 lg:px-16 mx-auto flex flex-col w-full text-center justify-center">
        <div className="flex flex-col w-full">
          <ScrollAnimationWrapper>
            <motion.h3
              variants={scrollAnimation}             
            >
              <div  style={{fontSize:"2em",color:"#ad8105",textAlign:"center"}}>
              <strong>
              View Pricing Plans
              </strong></div>
            </motion.h3>

          </ScrollAnimationWrapper>
          <div className="grid grid-flow-row sm:grid-flow-col grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-12 py-8 lg:py-12 px-6 sm:px-0 lg:px-6">
            
            <div className="flex justify-center">
              <motion.div
                variants={scrollAnimation}
                className="flex flex-col justify-center items-center border-2 border-gray-500 rounded-xl py-4 px-6 lg:px-12 xl:px-20"
                whileHover={{
                  scale : 1.1,
                  transition: {
                    duration: .2
                  }
                }}
              >
                <div className="p-4 lg:p-0 mt-6 lg:mt-16">
                  <Image
                    src="/assets/basic.png"
                    width={145}
                    height={165}
                    alt="Basic Package"
                  />
                </div>

<p className="text-lg text-black-600 font-medium capitalize my-1 sm:my-3">
Basic Package $350
</p>
<ul className="flex flex-col list-inside pl-6 xl:pl-0 items-start justify-start text-left text-black-500 flex-grow">

<li className="relative check custom-list my-2">
Domain registration and 12 months free hosting
</li>
<li className="relative check custom-list my-2">
5000MB Disk Space
</li>
<li className="relative check custom-list my-2">
1m Gigabits/s Bandwith 
</li>
<li className="relative check custom-list my-2">
Unlimited Emails, 1 Control Panel, 5 FTP, 20 Mysql Databases
</li>
<li className="relative check custom-list my-2">
Free SSL and Free Backup
</li>
<li className="relative check custom-list my-2">
SPA Single Page Application Website
</li>
<li className="relative check custom-list my-2">
This package is limited to 5GB space. This covers emails, database, storage spaces. It is upgraded to Standard Package
</li>

</ul>
<div className="flex flex-col w-full justify-center mb-8 flex-none mt-12">
<p className="text-2xl text-black-600 text-center mb-4 ">
  Basic Package
</p>
<ButtonOutline>Select</ButtonOutline>
</div>
              </motion.div>
            </div>

            <div className="flex justify-center">
              <motion.div
                variants={scrollAnimation}
                className="flex flex-col justify-center items-center border-2 border-gray-500 rounded-xl py-4 px-6 lg:px-12 xl:px-20"
                whileHover={{
                  scale : 1.1,
                  transition: {
                    duration: .2
                  }
                }}
              >
              <div className="p-4 lg:p-0 mt-6 lg:mt-16">
                <Image
                  src="/assets/standard.png"
                  width={145}
                  height={165}
                  alt="Standard Package"
                />
              </div>
<p className="text-lg text-black-600 font-medium capitalize my-1 sm:my-3">
Standard Package $550
</p>
<ul className="flex flex-col list-inside pl-6 xl:pl-0 items-start justify-start text-left text-black-500 flex-grow">

<li className="relative check custom-list my-2">
Domain registration and 12 months free hosting
</li>
<li className="relative check custom-list my-2">
10000MB Disk Space
</li>
<li className="relative check custom-list my-2">
5m Gigabits/s Bandwith 
</li>
<li className="relative check custom-list my-2">
Unlimited Emails, 1 Control Panel, 15 FTP, 50 Mysql Databases
</li>
<li className="relative check custom-list my-2">
Free SSL/paid up SSL/DDOS/ransomware protection(seperately charged) and Free Backup
</li>
<li className="relative check custom-list my-2">
Web/Mobile App, CMS, Framework based apps etc
</li>
<li className="relative check custom-list my-2">
This package is limited to 5GB space. This covers emails, database, storage spaces. It is upgraded to Standard Package
</li>

<li>
Nodejs, Reactjs,Nextjs, PHP, Mysql, HTML5, CSS, JS, Larravel,MERN, etc
</li>

<li>
This package is limited to 10GB space and that covers emails, database, storage spaces. This is upgraded to Professional Package
</li>
</ul>
<div className="flex flex-col w-full justify-center mb-8 flex-none mt-12">
<p className="text-2xl text-black-600 text-center mb-4 ">
  Standard Package
</p>
<ButtonOutline>Select</ButtonOutline>
</div>
              </motion.div>
            </div>

            <div className="flex justify-center">
              <motion.div
                variants={scrollAnimation}
                className="flex flex-col justify-center items-center border-2 border-gray-500 rounded-xl py-4 px-6 lg:px-12 xl:px-20"
                whileHover={{
                  scale : 1.1,
                  transition: {
                    duration: .2
                  }
                }}
              >
              <div className="p-4 lg:p-0 mt-6 lg:mt-16">
                <Image
                  src="/assets/professional.png"
                  width={145}
                  height={165}
                  alt="Professional Package"
                />
              </div>
             <p className="text-lg text-black-600 font-medium capitalize my-1 sm:my-3">
Professional Package $550
</p>
<ul className="flex flex-col list-inside pl-6 xl:pl-0 items-start justify-start text-left text-black-500 flex-grow">

<li className="relative check custom-list my-2">
Domain registration and 12 months free hosting
</li>
<li className="relative check custom-list my-2">
15000MB Disk Space
</li>
<li className="relative check custom-list my-2">
15m Gigabits/s Bandwith 
</li>
<li className="relative check custom-list my-2">
Unlimited Emails, 1 Control Panel, 30 FTP, 50 Mysql Databases
</li>
<li className="relative check custom-list my-2">
Free SSL/paid up SSL/DDOS/ransomware protection(seperately charged) and Free Backup
</li>
<li className="relative check custom-list my-2">
Web/Mobile App, CMS, Framework based apps etc
</li>
<li className="relative check custom-list my-2">
This package is limited to 5GB space. This covers emails, database, storage spaces. It is upgraded to Standard Package
</li>

<li>
Nodejs, Reactjs,Nextjs, PHP, Mysql, HTML5, CSS, JS, Larravel,MERN, etc
</li>

<li>
This package is limited to 15GB space and that covers emails, database, storage spaces. This is upgraded to Custom Package where all needed services are not limited by space but by usage need.
</li>
</ul>
<div className="flex flex-col w-full justify-center mb-8 flex-none mt-12">
<p className="text-2xl text-black-600 text-center mb-4 ">
  Professional Package
</p>
<ButtonOutline>Select</ButtonOutline>
</div>

              </motion.div>
            </div>

          </div>
        </div>

        <div style={{width:"100%",textAlign:"left"}}>
        <ScrollAnimationWrapper>
            <motion.h3
              variants={scrollAnimation}             
            >
              <div  style={{fontSize:"2em",color:"#ad8105",textAlign:"center"}}>
              <strong>
              How IT Works
              </strong></div><br/>
            </motion.h3>

          </ScrollAnimationWrapper>
            <motion.p 
            variants={scrollAnimation}>
1. We work 24/7 remotely online and onsite as per need to give the customer(remote and local) good quality service.<br/><br/>

2. Once we approve your budget, we will request for deposit and deliver as per agreed milestone.<br/><br/>

3. Prices for web apps/websites/mobile/etc differ because of many variables athat are at play: server side storage, number of concurrent users, bandwidth consumption, security requirements, aesthetic needs, performance needs<br/><br/>

that is why with software be it web or not it more of consulting, implementation, patching/upgrading than tangible objects.<br/><br/>

4. There is plethora of technologies for producing solutions to problems presented and we have deep architectural insights because of working with these technologies for a long time. There are CMS, frameworks, libraries, templates, web services, APIs, and so on. We use Agile methodology which always makes the customer part and parcel of the development team. This reduces project failure leadin to loss of funds because milestones are delivered withing short periods.<br/><br/>

5. If your project is not delivered as per written and signed(by both service giver and service buyer) specification and on agreed time then you qualify for a refund. Good customer care is one of our core objectives.<br/><br/>

6. Projects developed elsewhere but extended but ABL Tech, only that part we do is our responsibility. These tend to have integration and performance issues but they do save money a lot.<br/><br/>

7. Finally: Once a deposit is paid, the customer will receive a working prototype link to test and consult further in order to refine milestones. We always fight for a win-win project delivery.<br/><br/>

You are welcome to talk to us!
            </motion.p>
         

        </div>

        <div className="flex flex-col w-full my-16">
          <ScrollAnimationWrapper>
     
            <motion.h3
              variants={scrollAnimation}             
            >
              <div  style={{fontSize:"2em",color:"#ad8105",textAlign:"center"}}>
              <strong>
              Our Associates & Partners
              </strong></div>
            </motion.h3>

            <motion.p className="leading-normal  mx-auto my-2 w-10/12 sm:w-7/12 lg:w-6/12" 
            variants={scrollAnimation}>
             Growth through partnerships
            </motion.p>
          </ScrollAnimationWrapper>
          <ScrollAnimationWrapper>
            <motion.div className="w-full flex justify-evenly items-center mt-4 flex-wrap 
            lg:flex-nowrap" variants={scrollAnimation}>
              {/* <Netflix className="h-18 w-auto" /> */}
              <img
                src="/assets/Icon/amazon.png"
                className="h-14 w-auto mt-4 lg:mt-2"
                alt=""
              />
              <img
                src="/assets/Icon/netflix.png"
                className="h-14 w-auto mt-2 lg:mt-0"
                alt=""
              />
              <img
                src="/assets/Icon/reddit.png"
                className="h-12 w-auto mt-2 lg:mt-0"
                alt=""
              />
              <img
                src="/assets/Icon/discord.png"
                className="h-14 w-auto mt-2 lg:mt-0"
                alt=""
              />
              <img
                src="/assets/Icon/spotify.png"
                className="h-12 w-auto mt-2 lg:mt-0"
                alt=""
              />
            </motion.div>
          </ScrollAnimationWrapper>
        </div>


        <div className="flex flex-col w-full my-16" id="testimoni">
          <ScrollAnimationWrapper>

            <motion.h3
              variants={scrollAnimation}             
            >
              <div  style={{fontSize:"2em",color:"#ad8105",textAlign:"center"}}>
              <strong>
              Meet ABL Tech Team
              </strong></div>
            </motion.h3>

            <motion.p
              variants={scrollAnimation}
              className="text-left leading-normal mx-auto mb-2 mt-4 w-10/12 sm:w-7/12 lg:w-6/12"
            >
            ABL Tech has founders with over 10 years in IT and technologies.<br/><br/>
            Founded in Australia by Ambrose(AU) - MBA, Bernard(SA) - BSC, BTech, Lewis(AU)-MBA in 2022, as an IT Consulting private company, ABL Tech has been blessed with very strong academic and business insights. Directors and Founders have been with IT for over 10 years and have high interests in emerging technologies that will save the world.<br/><br/>
            Our main thrust is rolling out IT solutions to the global market with our head quarters in Australia where IT infrastructure is very developed.<br/><br/>
            We aim to grow through productive partnerships, investments, market research and through emerging cutting edge technologies.<br/><br/>
            We are open to your input, talk to us.
            </motion.p>
          </ScrollAnimationWrapper>
          <ScrollAnimationWrapper className="w-full flex flex-col py-12">
            <motion.div variants={scrollAnimation}>
              <Testimoni />
            </motion.div>
          </ScrollAnimationWrapper>
          <ScrollAnimationWrapper className="relative w-full mt-16">
            <motion.div variants={scrollAnimation} custom={{duration: 3}}>
              <div className="absolute rounded-xl  py-8 sm:py-14 px-6 sm:px-12 lg:px-16 w-full flex flex-col sm:flex-row justify-between items-center z-10 bg-white-500">
          
                <ScrollAnimationWrapper>
            <motion.h3
              variants={scrollAnimation}             
            >
              <div  style={{fontSize:"2em",color:"#ad8105",textAlign:"center"}}>
              <strong>
              Subscribe to ABL Tech newsletter
              </strong></div>
            </motion.h3>

          </ScrollAnimationWrapper>
                <ButtonPrimary>Get Started</ButtonPrimary>
              </div>
              <div
                className="absolute bg-black-600 opacity-5 w-11/12 roudned-lg h-60 sm:h-56 top-0 mt-8 mx-auto left-0 right-0"
                style={{ filter: "blur(114px)" }}
                ></div>
            </motion.div>
          </ScrollAnimationWrapper>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
