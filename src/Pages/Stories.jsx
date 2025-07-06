import React from "react";
import blackApple from '../assets/images/blackapple-icon.svg';
import googlePlay from '../assets/images/googleplay-icon.svg';
import investImg from '../assets/images/sto.png';
import fallbackImg from '../assets/images/stor.png'

const Stories = () => {
  return (
    <div>
           <section className="  flex flex-col md:flex-row items-center px-6 md:px-14 py-14">
              <div className="max-w-[1280px] mx-auto flex flex-col md:flex-row items-center gap-10">
        <div className="flex flex-col justify-center items-start w-full md:w-[50%] mb-10 md:mb-0">
          <h1 className="text-3xl md:text-5xl font-bold w-100">Loved by our Customers</h1>
          <p className="text-base md:text-xl bg-[#eff5fe] text-gray-500 p-2 rounded-full mt-4 mb-4 w-fit">Stories of happy savers who Piggyvest has helped or is helping save for what truly matters to them</p>
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <button className="flex items-center gap-2 bg-[#122233] px-4 py-3 text-sm rounded-lg cursor-pointer hover:border-gray-700 transition font-bold justify-center text-white">
               Add your story
            </button>
          </div>
        </div>
        <div className="w-full md:w-[50%] flex justify-center">
          <img src={investImg} alt="Investment" className="w-[80%] md:w-[80%]" />
        </div></div>
      </section>
        <section className="flex flex-col md:flex-row items-center w-full max-w-5xl mx-auto px-4 mt-20 mb-28">
          <div className="flex-1 flex justify-center md:justify-start mb-8 md:mb-0">
            <img src={fallbackImg} alt="Join" className="w-3/4 md:w-4/4 max-w-xs md:max-w-md" />
          </div>
          <div className="flex-1 flex flex-col items-center md:items-start mt-0 md:mt-10">
            <h1 className="text-2xl md:text-3xl font-bold text-[#142132] mb-6 text-center md:text-left">
              Join 5+ million people who save and invest with us
            </h1>
            <div className="flex gap-4 mt-4">
              <button className="flex items-center gap-2 border border-gray-300 px-4 py-2 text-sm rounded-lg cursor-pointer hover:border-gray-700 transition">
                <img src={blackApple} alt="Apple" className="w-5 h-5" /> Get on iPhone
              </button>
              <button className="flex items-center gap-2 border border-gray-300 px-4 py-2 text-sm rounded-lg cursor-pointer hover:border-gray-700 transition">
                <img src={googlePlay} alt="Android" className="w-5 h-5" /> Get on Android
              </button>
            </div>
          </div>
        </section>
    </div>
  );
};

export default Stories;