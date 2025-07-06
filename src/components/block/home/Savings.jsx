import boxa from "../../../assets/images/PB 18 Small.png"
import boxb from "../../../assets/images/SL 22 Small.png"
import boxc from "../../../assets/images/iphonw.avif"
import boxd from "../../../assets/images/iPhone 14.avif"
import boxe from "../../../assets/images/iphone12.avif"
import boxg from "../../../assets/images/iPhone 14 - 1.png"

const data = [
  {
    title: 'Automated Savings',
    text: 'Build a dedicated savings faster on your terms, automatically or manually.',
    label: 'Piggybank',
    image: boxa,
    color: 'from-blue-700 to-blue-500 text-blue-800'
  },
  {
    title: 'Fixed Savings',
    text: "Lock money away for a fixed duration without having access to it until maturity. It's like having a custom fixed deposit.",
    label: 'Safelock',
    image: boxb,
    color: 'from-blue-400 to-blue-300 text-blue-500'
  },
  {
    title: 'Goal-Oriented Savings',
    text: 'Reach all your savings goals faster. Save towards multiple goals on your own or with a group.',
    label: 'Target Savings',
    image: boxc,
    color: 'from-green-600 to-green-400 text-green-700'
  },
  {
    title: 'Flex Naira',
    text: 'Save, transfer, manage, organise, and withdraw your money at any time.',
    label: 'Flex Naira',
    image: boxd,
    color: 'from-pink-500 to-pink-300 text-pink-600'
  },
  {
    title: 'Flex Dollar',
    text: 'Save and grow your money in foreign currencies such as Dollars.',
    label: 'Flex Dollar',
    image: boxe,
    color: 'from-gray-900 to-gray-700 text-gray-900'
  },
  {
    title: 'HouseMoney',
    text: 'Plan for your rent and household expenses',
    label: 'HouseMoney',
    image: boxg,
    color: 'from-orange-500 to-orange-300 text-orange-600'
  },
];

const SavingsPlans = () => (
  <>
    <section className="flex flex-col items-center justify-center max-w-[1280px] h-full px-16 mx-auto">
      <div className="text-center my-8 mb-20">
        <h1 className="text-4xl font-bold text-slate-900">Many ways to build your savings</h1>
        <p className="text-xl text-slate-600 mt-4">Earn 12%-22% when you save with any of these PiggyVest plans.</p>
      </div>
    </section>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-12  max-w-[1280px] h-full px-16 mx-auto" >
      {data.map((plan, idx) => (
        <div
          key={idx}
          className="relative rounded-2xl shadow-lg overflow-hidden group bg-white cursor-pointer transition-transform duration-300 hover:scale-105 min-h-[420px] flex flex-col"
        >
          <div className="relative z-10 p-8 flex flex-col h-full">
            <h1 className={`text-2xl font-bold mb-2 mt-3 ${plan.color.split(' ').pop()}`}>{plan.title}</h1>
            <p className="text-slate-700 mb-40 w-70">{plan.text}</p>
            <h5 className={`font-semibold ${plan.color.split(' ').pop()}`}>{plan.label}</h5>
          </div>
          <div className={`absolute inset-0 bg-gradient-to-br ${plan.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 flex flex-col justify-center p-8`}>
            
          <div className="text-white flex flex-col h-full">
      <h1 className="text-2xl font-bold mt-6">{plan.title}</h1>
      <p className="mt-4 mb-6 w-[70%]">{plan.text}</p>
        <div className="flex-1" />
         <div className="flex flex-row items-end justify-between">
         <h5 className="font-semibold">{plan.label}</h5>
         <img
      src={plan.image}
      alt={plan.title}
      className="w-50 h-50 object-contain ml-4 mb-0"
    />
  </div>
</div>
          </div>
        </div>
      ))}

    </div>
  </>
);

export default SavingsPlans;