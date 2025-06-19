import React from "react";

const pricingData = [
  {
    title: "GET 01 BITCOIN",
    price: "$49",
    image: "/path-to-your/bitcoin-icon.png",
  },
  {
    title: "GET 49 BITCOIN",
    price: "$99",
    image: "/path-to-your/bitcoin-icon.png",
  },
  {
    title: "GET 99 BITCOIN",
    price: "$149",
    image: "/path-to-your/bitcoin-icon.png",
  },
];

const PricingSection = () => {
  return (
    <section className="py-16 px-6 bg-white text-center">
      <h2 className="text-3xl font-bold text-gray-900">
        CRYPTOCURRENCY <span className="text-yellow-500">PACKAGES</span>
      </h2>
      <p className="mt-2 text-gray-600 max-w-xl mx-auto">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. It has survived not only five centuries.
      </p>

      {/* Centered grid */}
      <div className="mt-12 max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
        {pricingData.map((item, idx) => (
          <div
            key={idx}
            className="relative bg-white border-2 border-dashed border-gray-500 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 p-6 w-full max-w-sm group"
          >
            {/* Bitcoin icon */}
            <div className="absolute -top-10 left-1/2 transform -translate-x-1/2">
              <img
                src={item.image}
                alt="Bitcoin"
                className="w-20 h-20 mx-auto rounded-full bg-white shadow-lg"
              />
            </div>

            <div className="mt-12">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">
                {item.title}
              </h3>
              <div className="text-2xl font-bold text-yellow-500 mb-2">
                {item.price}{" "}
                <span className="text-sm text-white bg-yellow-500 px-2 py-1 rounded">
                  PER PACKAGE
                </span>
              </div>

              <ul className="text-gray-700 space-y-1 text-sm mt-4">
                <li>1 GB PHOTOS</li>
                <li>SECURE ONLINE TRANSFER</li>
                <li>UNLIMITED STYLES</li>
                <li>MANUAL BACKUP</li>
              </ul>

              <button className="mt-6 w-full bg-yellow-500 hover:bg-yellow-400 text-white font-semibold py-2 rounded transition-all duration-200">
                PURCHASE
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PricingSection;
