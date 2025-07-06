import logoGrey from '../assets/images/greylogo.svg';
import complianceImg from '../assets/images/compliance-378fe121550ceac55d0eeb8c5edac2e7.avif';
import fb from '../assets/images/facebook.svg';
import ig from '../assets/images/instag.svg';
import twitter from '../assets/images/twitter.svg';
import tiktok from '../assets/images/titkok.svg';
import youtube from '../assets/images/youtube.svg';
import techcabal from '../assets/images/techcabal.png';
import cnbc from '../assets/images/cnbc.png';
import techcrunch from '../assets/images/techcrunch.png';
import pymnts from '../assets/images/pymnts.svg';
import fastcomp from '../assets/images/fastcomp.svg';
import cio from '../assets/images/cio.svg';
import React from 'react';
const companies = [
  { src: techcabal, alt: "techcabal" },
  { src: cnbc, alt: "cnbc" },
  { src: techcrunch, alt: "techcrunch" },
  { src: pymnts, alt: "pymnts" },
  { src: fastcomp, alt: "fastcomp" },
  { src: cio, alt: "cio" },
];

const productLinks = [
  "Piggybank", "Invest", "Safelock", "Target Savings", "Flex Naira", "Flex Dollar"
];
const companyLinks = [
  "About", "FAQs", "Blog"
];
const legalLinks = [
  "Terms", "Privacy", "Security"
];

const socials = [
  { src: fb, alt: "Facebook" },
  { src: ig, alt: "Instagram" },
  { src: twitter, alt: "Twitter" },
  { src: tiktok, alt: "TikTok" },
  { src: youtube, alt: "YouTube" },
];

const Footer = () => (
  <>
    <section className="bg-white py-6">
      <div className="text-center">
        <h1 className="text-2xl font-bold">As featured in</h1>
      </div>
    </section>
    <section className="bg-white mb-10">
      <div className="flex flex-wrap justify-center items-center gap-12 py-4">
        {companies.map((c, i) => (
          <img key={i} src={c.src} alt={c.alt} className="w-20 h-auto object-contain" />
        ))}
      </div>
    </section>
    <section className="flex flex-col lg:flex-row justify-between items-start w-full max-w-6xl mx-auto px-4 py-8 gap-8">
      <div className="flex flex-col items-start gap-4 w-full lg:w-1/5">
        <img src={logoGrey} alt="Grey Logo" className="w-32 mb-2" />
        <img src={complianceImg} alt="Compliance" className="w-32" />
      </div>
      <div className="flex flex-wrap gap-8 flex-1">
        <FooterLinks title="Products" links={productLinks} />
        <FooterLinks title="Company" links={companyLinks} />
        <FooterLinks title="Legal" links={legalLinks} />
      </div>
      <div className="flex flex-col items-end gap-2 w-full lg:w-1/4">
        <div className="flex gap-4 mb-2">
          {socials.map((s, i) => (
            <img key={i} src={s.src} alt={s.alt} className="w-6 h-6" />
          ))}
        </div>
        <p className="text-gray-500 text-sm">Tesmot house, Abdulrahman Okene close,</p>
        <p className="text-gray-500 text-sm">Victoria Island, Lagos, Nigeria.</p>
        <p className="text-gray-500 text-sm">contact@piggyvest.com</p>
        <p className="text-gray-500 text-sm">+234 700 933 9339</p>
      </div>
    </section>
    <section className="border-t border-gray-300 w-full max-w-6xl mx-auto px-4 py-6">
      <div className="flex flex-col gap-2">
        <p className="text-xs text-gray-400 max-w-2xl mb-2">
          Piggyvest (formerly piggybank.ng) is the leading online savings &amp; investing platform in Nigeria. For over 9 years, our customers have saved and invested billions of Naira that they would normally be tempted to spend.
        </p>
        <p className="text-xs text-gray-400 max-w-lg mb-1">
          Capital Limited is a fund manager duly licensed by the Securities and Exchange Commission (SEC) of Nigeria.
        </p>
        <p className="text-xs text-gray-400">2016-2025 PiggyTech Global Limited - RC 1405222</p>
      </div>
    </section>
  </>
);

function FooterLinks({ title, links }) {
  return (
    <div className="min-w-[120px]">
      <p className="font-semibold text-gray-700 mb-2">{title}</p>
      {links.map((link, i) => (
        <a
          key={i}
          href="#"
          className="block text-gray-400 text-sm mb-2 hover:text-blue-600 transition-colors"
        >
          {link}
        </a>
      ))}
    </div>
  );
}

export default Footer;