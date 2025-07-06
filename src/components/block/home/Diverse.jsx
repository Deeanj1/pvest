import investImg from '../../../assets/images/iphoneInvest.avif';

const InvestmentSection = () => (
  <>
    <section className="bg-white pt-10 mt-6 mb-0 max-w-[1280px] h-full px-16 mx-auto">
      <div className="text-center md:text-left max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-2 md:ml-32">Diverse ways to Invest</h1>
        <p className="text-xl text-slate-600 pb-10 md:ml-28">Grow your money and invest for your future confidently.</p>
      </div>
    </section>
    <section className="flex justify-center items-center bg-white mb-30 pb-10  max-w-[1280px] h-full px-16 mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-center w-full max-w-5xl bg-[#7912e5] rounded-2xl px-6 md:px-10 py-10 gap-10 md:gap-16">
        <div className="flex-1 text-white max-w-lg">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Earn Up to 35% returns</h1>
          <p className="text-lg md:text-xl leading-relaxed mb-6 max-w-md">
            Invest securely and confidently on the go. Grow your money confidently
            by investing in pre-vetted investment opportunities.
          </p>
          <h5 className="text-base md:text-lg font-semibold cursor-pointer mt-10 mb-4 hover:underline transition">Learn about Investments</h5>
        </div>
        <div className="flex-1 flex justify-center">
          <img src={investImg} alt="Investment" className="w-4/5 md:w-3/4 object-contain mt-4 md:mt-0" />
        </div>
      </div>
    </section>
  </>
);

export default InvestmentSection;