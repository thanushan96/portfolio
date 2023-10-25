import React from "react";
import HeroImage from "../assets/heroImage.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";
import "../style.css";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-slate-100  to-gray-400 pt-[34rem] sm:pt-[40rem] md:pt-0 pb-[20rem] md:pb-0"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row ">
        <div className="flex flex-col justify-center h-full ">
          <h2 className="text-4xl sm:text-7xl font-bold text-black">
            I'm Full stack Developer
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis
            ex fugit, beatae nobis, deserunt a aperiam aut expedita iusto
            dolorum voluptatem. Veniam sapiente, nesciunt maiores tenetur eos
            iste vitae mollitia! Nesciunt, quibusdam soluta voluptas quas fuga
            vero enim, necessitatibus illo dolore cum doloribus excepturi atque
          </p>

          <div>
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer "
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>
        <div className="mt-[14rem] sm:mt-[10rem] md:mt-[0rem] ">
          <img
            src={HeroImage}
            alt="my profile"
            className="rounded-2xl mx-auto  w-2/3 md:w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
