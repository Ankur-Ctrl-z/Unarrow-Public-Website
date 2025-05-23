import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import { useNavigate } from "react-router";
import CustomTheams from "../customs/CustomTheams";
import img1 from "../../assets/aboutUsImage/image-1.png"
import img2 from "../../assets/aboutUsImage/random.jpg";
import CustomBuildIdea from "../customs/CustomBuildIdea";
import blackBG from '../../assets/aboutUsImage/black_bg.png'
import redBG from '../../assets/aboutUsImage/red_bg.png'

const BuildIdea = () => {
  const navigate = useNavigate();
  function handleCall() {
    navigate("/contact");
  }

  return (
    <div className="w-full relative h-full bg-[#011415] lg:py-14 p-1">
      <div className="sm:w-11/12 mx-auto p-2 flex justify-center items-center">
        {/* cards-section */}
        <div className="grid grid-cols-4 -ml-[10px] md:-ml-5 -mt-3 gap-3 md:gap-10 mb-5">
          <CustomBuildIdea image={blackBG}
            clasName={"border-none"}
            text={"WE"}
          />

          <CustomBuildIdea image={img1} text={"BUILD"} />

          <CustomBuildIdea
            clasName={""} image={redBG}
            icon={
              <FaArrowRight className="group-hover:scale-150 text-2xl md:text-4xl lg:text-7xl  xl:text-[8rem] duration-500 transition-all" />
            }
          />
          <CustomBuildIdea image={img2} text={"IDEAS"} />
        </div>
      </div>

      {/* description-section */}
      <CustomTheams
        onClick={handleCall}
        text={
          <>
            <span className="text-gray-400">
              Your Website is your 24/7 Sales person
            </span>
            . Don’t just settle{" "}
            <span className="text-gray-400"> for an ordinary one</span>. Go
            beyond with{" "}
            <span className="text-[#db4a2b] animate-pulse">“Unarrow”...</span>
          </>
        }
      />
    </div>
  );
};

export default BuildIdea;
