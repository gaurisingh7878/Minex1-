import { motion } from "framer-motion";

const services = [
  {
    title: "Defi Smart Contracts",
    img: "https://html.dynamiclayers.net/dl/cryptocoin/img/icon-1.png",
    desc: "Deploy and manage decentralized financial contracts with seamless integration and low gas fees.",
  },
  {
    title: "Instant Token Swaps",
    img: "https://html.dynamiclayers.net/dl/cryptocoin/img/icon-2.png",
    desc: "Trade tokens instantly across supported chains with high liquidity and minimal slippage.",
  },
  {
    title: "Secure Blockchain Layer",
    img: "https://html.dynamiclayers.net/dl/cryptocoin/img/icon-3.png",
    desc: "Minex Network’s core protocol offers robust consensus mechanisms and attack resistance.",
  },
  {
    title: "Cross-Chain Interoperability",
    img: "https://html.dynamiclayers.net/dl/cryptocoin/img/icon-4.png",
    desc: "Bridge assets and data between different blockchains efficiently using Minex cross-chain tools.",
  },
  {
    title: "Institutional-Grade Infrastructure",
    img: "https://html.dynamiclayers.net/dl/cryptocoin/img/icon-5.png",
    desc: "Built for scale, speed, and compliance—Minex powers both retail and institutional solutions.",
  },
  {
    title: "User-Friendly Wallets",
    img: "https://html.dynamiclayers.net/dl/cryptocoin/img/icon-6.png",
    desc: "Access all Minex features securely through intuitive mobile and desktop wallet interfaces.",
  },
];

const ServicesSection = () => {
  return (
    <section className="w-full bg-gray-50 py-16 px-4 text-center">
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 3 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl font-bold">
          MINEX <span className="text-yellow-500">NETWORK SERVICES</span>
        </h2>
        <p className="text-gray-600 max-w-xl mx-auto mt-4">
          Powering the future of decentralized finance with secure, scalable, and efficient blockchain infrastructure.
        </p>
      </motion.div>

      {/* Grid of Services */}
      <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-white rounded-lg shadow hover:shadow-md transition p-6"
          >
            <div className="mb-4 flex justify-center">
              <img
                src={service.img}
                alt={service.title}
                className="w-20 h-20 p-2 border-2 border-dashed border-gray-300 hover:bg-amber-300 rounded"
              />
            </div>
            <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
            <p className="text-sm text-gray-600">{service.desc}</p>
            <button className="mt-4 text-yellow-500 font-bold text-sm hover:underline">
              READ MORE
            </button>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
