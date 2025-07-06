import React from 'react'
import { useState } from "react";
import blackApple from '../assets/images/blackapple-icon.svg';
import googlePlay from '../assets/images/googleplay-icon.svg';
import fallbackImg from '../assets/images/stor.png'

const options = [
  { title: "HouseMoney", items: ["What is House Money? This is a Semi-strict wallet that helps you save for your rent, with access to withdraw at your scheduled maturity date (Anytime in the Maturity Month).", "How To Create Your HouseMoney? To create your House Money, log into your Piggyvest account, click on Savings, and select House Money. Click on 'What is your rent', input your preferred amount, and the rent due date and complete the prompts to save and create your own House Money.", "How Can You Fund Your HouseMoney?To fund your House Money wallet, log into your Piggyvest app, click on savings, select HouseMoney, and then copy your account number as shown on the HouseMoney dashboard Go to your banking app, initiate a transfer, and credit the copied account number with your preferred amount. NOTE: You can also top up your HouseMoney from your Flex Naira and Pocket Wallet. Do I Earn Interest? Yes, you do! You earn an interest of 14% per annum on your funds in this wallet. Note that interest are paid on the 1st day of every new month, and you’ll lose your interest for a certain month if you initiate a withdrawal before the 1st of a new month."] },
  { title: "Safelock Dollar", items: ["Hi"] },
  { title: "Next of Kin", items: ["Who is a Next of Kin? Your Next of Kin is the person you designated to manage your funds in the event of your passing. This could be a family member or a trusted individual.e", "Can I update the Next of Kin Information on my account? Yes, you can! This can be done from the account settings option within the app. All you need to do is log into your account >> Click on Account >> Account Settings >> Next of Kin >> Input the necessary details >> Update Next of Kin", "Can my Next of Kin access my Piggyvest account if I pass away? Yes! However, access to a deceased account is not automatic. The Next of Kin must provide valid documentation before any action can be taken. Note: Next of kin can ONLY access your account upon demise, and not otherwise", "What happens if no Next of Kin details are provided on my account? If there are no Next of Kin details on your Piggyvest account, we will rely on the legal documents (Letter of Administration or Grant of Probate) provided by the deceased's estate representatives to determine who has the authority to make decisions regarding the account.", "What documents are required to access a deceased user's account? If the deceased user did not leave a will, the next of kin is required to provide the death certificate and a letter of administration issued by a competent court." ] },
  { title: "Accountability Partner", items: ["Who is an Accountability Partner? An Accountability Partner is someone you trust, like a family member, friend, or financial advisor, who helps you stay committed to your financial goals. They’ll receive gentle alerts when you take certain actions on your PiggyVest account, such as: Breaking a savings target early Missing regular savings commitments Making frequent withdrawals Disabling automatic savings Breaking savings streaks NOTE: Your partner cannot see your savings amounts or make changes to your account.", "What can my Accountability See? Your partner can: View when a savings plan needs attention Encourage you with check-ins Support your financial journe Your partner cannot: Access your savings Make changes to your plans Take action on your behalf See specific amounts in your account", "How do I add an Accountability Partner? To do this, simply log into your Piggyvest account >> Go to the Accountability Partner section >> Click add a Partner >> Fill in your partner’s name, phone number, and select your relationship >> State why you’re choosing this person."] },
  { title: "What is PiggyVest", items: ["What is PiggyVest? PiggyVest helps you save and invest with ease. With PiggyVest, you can stop spending excessively and put away (and grow!) funds that you do not want to touch. You can choose to save little amounts of money periodically (Daily, Weekly or Monthly) towards a specific target OR lock away funds for a specified period of time. We take away the stress by combining simplicity, discipline, convenience, and flexibility to enable you to manage your finances better and achieve financial freedom.", "How do I know what plan is right for me? All of the savings and investment options on Piggyvest are tailored towards a particular need. If you'd like to regularly put away money for your savings and withdraw only once a quarter, then the Piggybank wallet is right for you. You can set it so that money is taken from your account and you don't have to worry about saving manually. If you're saving towards a particular goal such as rent or travel, Target Savings is a great option. You can invite friends and make it a fun challenge to smash all your financial goals. If you're looking for something geared towards the long term, The SafeLock feature is perfect for you. With higher interest rates, you could lock away funds you don't need access to and make even more money by doing so. If you're looking to get started on investments or diversify your portfolio, then pre-vetted, low-risk investment opportunities are regularly available on Investify to help you grow your money.", "How do I start saving on PiggyVest? To start saving on PiggyVest: Visit the website or download the app to create an account.Set up your withdrawal account details; this is the bank account that funds you withdraw will get sent to.Enter your debit card details to activate your account and then make your first deposit. (You may use a MasterCard, Visa or Verve card from any Nigerian bank). You may now proceed to use any of the Savings Plans to start your daily, weekly or monthly savings.", "How much can I start with? You can ONLY autosave between: N50 - N200,000 daily, N800 - N1,000,000 weekly, or N3,000 - N5,000,000 monthly However, you can always top up your savings at any time using the Quicksave option"] },
];
const faqs = () => {
     const [openIndex, setOpenIndex] = useState(null);

  const toggleDropdown = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <div>
        <section className=''>
            <h1 className='text-3xl md:text-5xl font-bold text-slate-900 text-center mb-1 mt-30'>Frequently Asked Questions (FAQs)</h1>
            <div className="p-8 bg-gray-100 min-h-screen">
    
      <input
        type="text"
        placeholder="Search for a question..."
        className="w-[60%] ml-80 px-5 py-3 border border-gray-400 rounded-xl shadow focus:outline-none focus:ring-2 focus:ring-blue-400"
      />

      <div className="mt-10 shadow-md rounded-lg p-6 flex gap-10 max-w-[1280px] mx-auto">
        <div className="w-1/4 bg-white">
          <ul className="space-y-3 bg-white ">
            {options.map((opt, idx) => (
              <li key={idx} className="p-3 font-bold rounded cursor-pointer hover:bg-[#1161d6] bg-white hover:text-white ">
                {opt.title}
              </li>
            ))}
          </ul>
        </div>

        <div className="w-3/4">
          <ul className="space-y-3 text-2xl">
            {options.map((opt, idx) => (
              <li key={idx}>
                <div
                  className="p-3 rounded hover:bg-blue-200 cursor-pointer flex justify-between items-center"
                  onClick={() => toggleDropdown(idx)}
                >
                  {opt.title}
                  <span>{openIndex === idx ? "▲" : "▼"}</span>
                </div>
                {openIndex === idx && (
                  <ul className="mt-2 ml-4 bg-blue-50 rounded p-2 space-y-1 font-normal ">
                    {opt.items.map((word, i) => (
                      <li key={i} className="hover:bg-blue-100 p-1 rounded cursor-pointer ">
                        {word}
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
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
  )
}

export default faqs