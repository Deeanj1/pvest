import lock from "../../../assets/images/securitylock.svg"

const SecuritySection = () => (
  <section className="py-8 mt-30 mb-30 max-w-[1280px] h-full px-16 mx-auto">
    <div className="flex items-center w-4/5 mx-auto">
      <img src={lock} alt="Security" className="w-24 h-24 md:w-32 md:h-32" />
      <div className="ml-8">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">Your security is our priority</h1>
        <p className="text-base text-slate-700 leading-7 mb-2 max-w-xl">
          PiggyVest uses the highest level of Internet Security and it is secured
          by 256 bits SSL security encryption to ensure that your information is
          completely protected from fraud.
        </p>
        <h4 className="text-lg text-slate-900 font-semibold">More on our security measures</h4>
      </div>
    </div>
  </section>
);

export default SecuritySection;