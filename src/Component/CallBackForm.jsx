import React from "react";

const CallBackForm = () => {
  return (
    <section className="relative bg-black text-white">
       {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0 "
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/src/Imges/5561380-hd_1920_1080_25fps.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute  inset-0 bg-black  bg-cover bg-center opacity-60 z-0" />
<div className=""></div>
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 items-center gap-8">
        {/* Left Image */}
        <div className="hidden md:block">
          <img
            src="https://media.istockphoto.com/id/1849014268/photo/ai-helping-predict-posibility-in-high-frequency-trading-robot-trade-in-crypto-stockmarket.jpg?s=612x612&w=0&k=20&c=1j6la9Kf3tHBooUNHeM9_euNlkzoEVzgcn0V8OOAZ9g="
            alt="Person"
            className="w-full  rounded-4xl h-auto object-contain"
          />
        </div>

        {/* Right Form Box */}
        <div className=" bg-opacity-50 p-8 rounded-md shadow-lg">
          <h2 className="text-2xl md:text-3xl font-bold mb-2">
            REQUEST A <span className="text-yellow-500">CALL BACK</span>
          </h2>
          <p className="text-gray-300 mb-6">
            Please don’t hesitate to chat with me, just drop a line.
          </p>

          <form className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Name"
                className="w-full p-3 bg-transparent border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-all"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full p-3 bg-transparent border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-all"
              />
            </div>

            <textarea
              placeholder="Message"
              rows="4"
              className="w-full p-3 bg-transparent border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-all"
            ></textarea>

            <button
              type="submit"
              className="bg-yellow-500 text-black px-6 py-3 rounded-md font-bold hover:bg-yellow-400 transition-all"
            >
              SUBMIT NOW
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default CallBackForm;
