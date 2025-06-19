import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <div
    
      className="w-full relative text-white min-h-screen flex items-center justify-center px-4 gap-10 bg-cover bg-center brightness-110"
     
    >
       {/* Background Video */}
      <video
        className="absolute   top-0 left-0 w-full h-full object-cover   "
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/src/Imges/5561380-hd_1920_1080_25fps.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      <div className="inset-0 bg-black opacity-60 z-0 absolute flex justify-center text-center">
      <div className="  max-w-7xl mx-auto w-full  px-4 py-8 grid grid-cols-1 md:grid-cols-2 items-center gap-12">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 2 }}
          className="space-y-6 text-center md:text-left"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight text-white">
            <span className=" text-white px-2">WELCOME TO MINEX NETWORK</span>
            <br />
            <span className=" text-white px-2">DECENTRALIZED & SECURE BLOCKCHAIN</span>
          </h1>
          <p className="text-gray-300 text-sm md:text-base max-w-md mx-auto md:mx-0">
            Minex Network is a revolutionary blockchain ecosystem designed to empower global transactions, decentralized apps, and seamless crypto integration — built for speed, scalability, and real-world use.
          </p>
          <button className="bg-yellow-500 hover:bg-yellow-600 transition px-6 py-3 rounded text-white font-bold text-sm">
            GET STARTED
          </button>
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 2.5 }}
          className="flex justify-center"
        >
          <img
            src="/src/Imges/Minex.png"
            alt="Minex Bitcoin"
            className="w-full rounded-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg object-contain"
          />
        </motion.div>
      </div>
      </div>
    </div>
  );
};

export default HeroSection;
