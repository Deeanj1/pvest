const SaverOfMonth = () => (
  <section className="flex flex-col items-center pt-12 pb-12 max-w-[1280px] h-full px-16 mx-auto">
    <div className="flex flex-col items-center w-full">
      <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 text-center">Meet Our Saver of the Month</h1>
      <p className="text-xl md:text-2xl text-slate-700 leading-8 w-full md:w-1/2 text-center mb-8">
        Every month, we shine a spotlight on one saver, asking them about their
        savings culture and how Piggyvest has helped them.
      </p>
      <div className="flex justify-center w-full">
        <iframe
          width="100%"
          height="444"
          src="https://www.youtube.com/embed/2EnGMGxKuII?si=FheL7xtBxdsvMS0h"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="rounded-2xl border-[11px] border-white w-full md:w-[790px] h-[250px] md:h-[444px]"
        ></iframe>
      </div>
    </div>
  </section>
);

export default SaverOfMonth;