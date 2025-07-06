import fallbackImg from '../../../assets/images/fallbackImg.png';
import blackApple from '../../../assets/images/blackapple-icon.svg';
import googlePlay from '../../../assets/images/googleplay-icon.svg';

const JoinUsSection = () => (
  <section className="flex flex-col md:flex-row items-center w-full max-w-5xl mx-auto px-4 mt-20 mb-28">
    <div className="flex-1 flex justify-center md:justify-start mb-8 md:mb-0">
      <img src={fallbackImg} alt="Join" className="w-3/4 md:w-2/3 max-w-xs md:max-w-md" />
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
);

export default JoinUsSection;