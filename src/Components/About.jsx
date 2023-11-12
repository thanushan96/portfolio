import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-slate-100  to-gray-400 text-black pb-[35rem]  pt-[36rem]  sm:pt-[26rem] lg:pt-[22rem]"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full ">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-base text-justify">
          I'm an enthusiastic software engineering student, awaiting the final
          marks for my BSc in Software Engineering Research Project from ICBT
          CAMPUS (CMU - UK). With a strong foundation in programming languages
          like HTML, CSS, JavaScript, and other backend technologies like C#,
          Java, Python, I've applied my knowledge to projects, including a
          Phishing URL Detection System and an E-commerce site etc. Beyond
          coding, I've delved into machine learning with tools like TensorFlow
          and Keras. My passion for software development, practical experience,
          and machine learning expertise make me a promising candidate for
          innovative software engineering roles.
        </p>

        <br />

        <p className="text-base text-justify">
          My journey in the tech world has also been complemented by practical
          experience. I've spent one year as a Junior Security Analyst at
          CryptoGen Pvt Ltd, where I honed my skills in monitoring SIEM/EDR
          systems around the clock, escalating security threats and incidents,
          and crafting Cyber Threat Intelligence reports. Additionally, I've
          spent six months as an IT Support Trainee at Eureka Technology
          Partners, providing comprehensive client support, managing incidents,
          conducting firewall and server maintenance, and excelling in desktop
          and laptop repair and maintenance. These professional experiences have
          broadened my horizons and further fueled my passion for the
          ever-evolving field of software engineering. I'm now eager to leverage
          my unique blend of education and practical knowledge to contribute to
          dynamic teams and make a meaningful impact in the software engineering
          realm.
        </p>
      </div>
    </div>
  );
};

export default About;
