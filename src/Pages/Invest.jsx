import React from "react";
import blackApple from '../assets/images/blackapple-icon.svg';
import googlePlay from '../assets/images/googleplay-icon.svg';
import investImg from '../assets/images/inv.png';
import img1 from '../assets/images/inv2.png';
import img3 from '../assets/images/inv3.png';
import img4 from '../assets/images/inv4.png';
import img5 from '../assets/images/imgi51.png';
import img21 from '../assets/images/imgi21.jpg';
import img22 from '../assets/images/imgi22.jpg';
import img23 from '../assets/images/imgi23.jpg';
import img24 from '../assets/images/imgi24.jpg';
import img25 from '../assets/images/imgi25.jpg';
import img26 from '../assets/images/imgi26.jpg';

const Invest = () => {
  return (
    <>
      <section className="bg-[#7912e5] text-white flex flex-col md:flex-row items-center px-6 md:px-12 py-12">
        <div className="max-w-[1280px] mx-auto flex flex-col md:flex-row items-center gap-10">
  <div className="flex flex-col justify-center items-start w-full md:w-[50%] mb-10 md:mb-0">
    <h1 className="text-3xl md:text-5xl font-bold">Invest on the go</h1>
    <p className="text-base md:text-xl bg-[#eff5fe] text-[#7912e5] p-2 rounded-full mt-4 mb-4 w-fit">Up to 35% returns</p>
    <p className="text-base md:text-xl mb-6 w-full md:w-[80%]">Invest securely and confidently on the go. Up to 35% returns, 6–12 month duration.</p>
    <div className="flex flex-col sm:flex-row gap-4 mt-4 w-full sm:w-auto">
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
    <h1 className="text-3xl md:text-5xl font-bold text-slate-900">Simple investments with great returns</h1>
    <p className="text-base md:text-xl text-slate-600 mt-4">Investments are made readily accessible to everyone</p>
  </div>
  <main className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
    <div className="flex flex-col bg-white p-6 rounded-2xl">
      <h1 className="text-[#7912e5] font-bold text-2xl md:text-3xl mb-3">Investments simplified</h1>
      <p className="mb-4 text-sm md:text-base">With minimum investments starting as low as N5,000, investment is no longer out of reach. Everyone is welcome.</p>
      <img src={img1} alt="Investments simplified" className="mt-auto" />
    </div>
    <div className="flex flex-col bg-white p-6 rounded-2xl">
      <h1 className="text-[#7912e5] font-bold text-2xl md:text-3xl mb-3">Invest confidently</h1>
      <p className="mb-4 text-sm md:text-base">We work with leading licensed investment houses such as ARM, AIICO and Stanbic.</p>
      <img src={img3} alt="Invest confidently" className="mt-auto" />
    </div>
    <div className="flex flex-col bg-white p-6 rounded-2xl">
      <h1 className="text-[#7912e5] font-bold text-2xl md:text-3xl mb-3">Diversify your portfolio</h1>
      <p className="mb-4 text-sm md:text-base">Invest in various industries such as fixed income instruments, agriculture, transportation, etc..</p>
      <img src={img4} alt="Diversify your portfolio" className="mt-auto" />
    </div>
  </main>
</section>

     <section className="bg-[#7912e5] text-white py-16 px-6 md:px-16">
  <div className="max-w-[1280px] mx-auto flex flex-col md:flex-row items-center gap-10">
    <div className="w-full md:w-1/2">
      <h1 className="text-3xl md:text-5xl font-bold mb-5">We’ve made it easier for anyone to get started.</h1>
      <p className="text-base md:text-lg leading-relaxed">
        Finally, you can access pre-vetted low-medium risk primary and secondary investment opportunities easily with any amount you have.
        No hidden fees/charges. Thorough due diligence and pre-vetting on all investments are carried out for maximum safety.
      </p>
    </div>
    <div className="w-full md:w-1/2 mt-10 md:mt-0">
      <img src={img5} alt="Getting started" className="w-full h-auto" />
    </div>
  </div>
</section>

      <section>
        <div className="text-center my-8 mb-20 mt-20">
          <h1 className="text-5xl font-bold text-slate-900">Recent Opportunities on Investify</h1>
        </div>

        <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-12  max-w-[1280px] h-full px-16 mx-auto">
        <div className="w-85 bg-white rounded-t-3xl mb-20 rounded-b-3xl">
          <img src={img21} className="rounded-t-3xl" />
          <h1 className="text-xl font-bold m-3" >CORPORATE DEBT NOTES SERIES XLVII</h1>
          
          <div className="flex justify-between m-7 font-bold text-gray-600">
            <p>₦5,000 <br />
              per unit</p>
            <p>578 <br />
             Investors</p>
          </div >
          <div>
            <h1 className="bg-pink-100 text-pink-700 w-[30%] mx-15 mb-5 rounded-full p-1 font-bold">Sold Out</h1></div>
        </div>
        <div className="w-85 bg-white rounded-t-3xl mb-20 rounded-b-3xl">
          <img src={img22} className="rounded-t-3xl" />
          <h1 className="text-xl font-bold m-3" >CORPORATE DEBT NOTES SERIES XLVI</h1>
          
          <div className="flex justify-between m-7 font-bold text-gray-600">
            <p>₦5,000 <br />
              per unit</p>
            <p>745 <br />
             Investors</p>
          </div >
          <div>
            <h1 className="bg-pink-100 text-pink-700 w-[30%] mx-15 mb-5 rounded-full p-1 font-bold">Sold Out</h1></div>
        </div>
        <div className="w-85 bg-white rounded-t-3xl mb-20 rounded-b-3xl">
          <img src={img23} className="rounded-t-3xl" />
          <h1 className="text-xl font-bold m-3" >CORPORATE DEBT NOTES SERIES XLV</h1>
          
          <div className="flex justify-between m-7 font-bold text-gray-600">
            <p>₦5,000 <br />
              per unit</p>
            <p>470 <br />
             Investors</p>
          </div >
          <div>
            <h1 className="bg-pink-100 text-pink-700 w-[30%] mx-15 mb-5 rounded-full p-1 font-bold">Sold Out</h1></div>
        </div>
        <div className="w-85 bg-white rounded-t-3xl mb-20 rounded-b-3xl">
          <img src={img24} className="rounded-t-3xl" />
          <h1 className="text-xl font-bold m-3" >CORPORATE DEBT NOTES SERIES XLIV</h1>
          
          <div className="flex justify-between m-7 font-bold text-gray-600">
            <p>₦5,000 <br />
              per unit</p>
            <p>860 <br />
             Investors</p>
          </div >
          <div>
            <h1 className="bg-pink-100 text-pink-700 w-[30%] mx-15 mb-5 rounded-full p-1 font-bold">Sold Out</h1></div>
        </div>
        <div className="w-85 bg-white rounded-t-3xl mb-20 rounded-b-3xl">
          <img src={img25} className="rounded-t-3xl" />
          <h1 className="text-xl font-bold m-3" >CORPORATE DEBT NOTES SERIES XLIII</h1>
          
          <div className="flex justify-between m-7 font-bold text-gray-600">
            <p>₦5,000 <br />
              per unit</p>
            <p>373 <br />
             Investors</p>
          </div >
          <div>
            <h1 className="bg-pink-100 text-pink-700 w-[30%] mx-15 mb-5 rounded-full p-1 font-bold">Sold Out</h1></div>
        </div>
        <div className="w-85 bg-white rounded-t-3xl mb-20 rounded-b-3xl">
          <img src={img26} className="rounded-t-3xl" />
          <h1 className="text-xl font-bold m-3" >CORPORATE DEBT NOTES SERIES XLII</h1>
          
          <div className="flex justify-between m-7 font-bold text-gray-600">
            <p>₦5,000 <br />
              per unit</p>
            <p>1270 <br />
             Investors</p>
          </div >
          <div>
            <h1 className="bg-pink-100 text-pink-700 w-[30%] mx-15 mb-5 rounded-full p-1 font-bold">Sold Out</h1></div>
        </div>
        </main>

      </section>
      </>
  );
};

export default Invest;