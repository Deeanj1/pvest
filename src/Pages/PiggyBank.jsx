import React from "react";
import blackApple from '../assets/images/blackapple-icon.svg';
import googlePlay from '../assets/images/googleplay-icon.svg';
import investImg from '../assets/images/pig.png';
import img1 from '../assets/images/pig1.png';
import img3 from '../assets/images/pig2.png';
import img4 from '../assets/images/pig3.png';
import img5 from '../assets/images/pig4.png';


const Piggybank = () => {
  return (
    <>
      <section className="bg-[#0d60d8] text-white flex flex-col md:flex-row items-center px-6 md:px-12 py-12">
        <div className="max-w-[1280px] mx-auto flex flex-col md:flex-row items-center gap-10">
  <div className="flex flex-col justify-center items-start w-full md:w-[50%] mb-10 md:mb-0">
    <h1 className="text-3xl md:text-5xl font-bold">Piggybank</h1>
    <p className="text-base md:text-xl bg-[#eff5fe] text-[#0d60d8] p-2 rounded-full mt-4 mb-4 w-fit">Automated savings</p>
    <p className="text-base md:text-xl mb-6 w-full md:w-[80%]">
      Strict daily, weekly or monthly automatic savings. Earn up to 18% p.a..
    </p>
    <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
      <button className="flex items-center gap-2 bg-black px-4 py-3 text-sm rounded-lg cursor-pointer hover:border-gray-700 transition font-bold justify-center">
        <img src={blackApple} alt="Apple" className="w-5 h-5" /> Get on iPhone
      </button>
      <button className="flex items-center gap-2 bg-black px-4 py-3 text-sm rounded-lg cursor-pointer hover:border-gray-700 transition font-bold justify-center">
        <img src={googlePlay} alt="Android" className="w-5 h-5" /> Get on Android
      </button>
    </div>
  </div>
  <div className="w-full md:w-[50%] flex justify-center">
    <img src={investImg} alt="Investment" className="w-[80%] md:w-[55%]" />
  </div></div>
</section>

     <section className="max-w-[1280px] w-full px-6 md:px-16 mx-auto my-20">
  <div className="text-center mb-16">
    <h1 className="text-3xl md:text-5xl font-bold text-slate-900">Save without thinking about it.</h1>
    <p className="text-base md:text-xl text-slate-600 mt-4">
      Enjoy automated savings, quick manual savings top up and competitive interest rates.
    </p>
  </div>
  <main className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
    <div className="flex flex-col bg-white p-6 rounded-2xl h-full">
      <h1 className="text-[#0d60d8] font-bold text-2xl md:text-3xl mb-3">Save automatically</h1>
      <p className="mb-4 text-sm md:text-base">
        Choose between automatic daily, weekly or monthly savings. Once you choose, our system does the rest for you.
        You’re in control, and can always change your settings anytime.
      </p>
      <img src={img1} alt="Save automatically" className="mt-auto" />
    </div>
    <div className="flex flex-col bg-white p-6 rounded-2xl h-full">
      <h1 className="text-[#0d60d8] font-bold text-2xl md:text-3xl mb-3">Save on the go</h1>
      <p className="mb-4 text-sm md:text-base">
        Don’t fancy automatic savings? No problem, you can manually top up your Piggybank savings at anytime, anywhere.
      </p>
      <img src={img3} alt="Save on the go" className="mt-auto" />
    </div>
    <div className="flex flex-col bg-white p-6 rounded-2xl h-full">
      <h1 className="text-[#0d60d8] font-bold text-2xl md:text-3xl mb-3">Build discipline</h1>
      <p className="mb-4 text-sm md:text-base">
        With four free withdrawal days in the year, you are less tempted to spend your savings and meet your savings goals faster.
      </p>
      <img src={img4} alt="Build discipline" className="mt-auto" />
    </div>
  </main>
</section>

      <section className="bg-[#0d60d8] text-white py-16 px-6 md:px-16">
  <div className="max-w-[1280px] mx-auto flex flex-col md:flex-row items-center gap-10">
    <div className="w-full md:w-1/2">
      <h1 className="text-3xl md:text-5xl font-bold mb-5">Build your savings small small!</h1>
      <p className="text-base md:text-lg leading-relaxed">
        With Piggybank, you can save periodically, automatically or manually. You can also save as you go, on your own terms. 
        You’re the boss of your savings, choose how you want to save.
      </p>
    </div>
    <div className="w-full md:w-1/2 mt-10 md:mt-0">
      <img src={img5} alt="Build savings" className="w-full h-auto" />
    </div>
  </div>
</section>

     
      </>
  );
};

export default Piggybank;