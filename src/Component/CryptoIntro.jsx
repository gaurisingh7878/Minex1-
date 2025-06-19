import { CheckCircle } from "lucide-react";

const CryptoIntro = () => {
  return (
    <div className="w-full bg-white text-[#1a1a1a] py-16 px-4">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 items-center">
        {/* Left Content */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <span className="bg-[#0d1b2a] text-white px-3 py-1 text-xs font-bold rounded">
              MINEX NETWORK
            </span>
            <span className="bg-yellow-400 text-white px-4 py-2 font-bold text-sm rounded">
              DECENTRALIZED BLOCKCHAIN PLATFORM
            </span>
          </div>
          <p className="text-gray-600 text-base max-w-xl">
            Minex Network is a high-performance blockchain built to empower decentralized finance (DeFi), NFT infrastructure, and secure global transactions — offering unmatched transparency, scalability, and control.
          </p>

          {/* Bottom Section */}
          <div className="grid md:grid-cols-2 gap-8 pt-8">
            {/* What is Minex Network */}
            <div>
              <h3 className="text-lg font-bold mb-2">WHAT IS MINEX NETWORK?</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Minex is a next-gen blockchain ecosystem that supports smart contracts, tokenization, and cross-border DeFi systems. With lightning-fast transactions and low fees, it's ideal for scalable dApps and institutional-grade finance.
              </p>
              <button className="mt-4 bg-yellow-400 text-white font-bold px-6 py-2 text-sm rounded hover:bg-yellow-500 transition">
                LEARN MORE
              </button>
            </div>

            {/* Why Choose Minex */}
            <div>
              <h3 className="text-lg font-bold mb-2">WHY CHOOSE MINEX?</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-yellow-500 w-5 h-5 mt-0.5" />
                  Lightning-fast and cost-efficient transactions.
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-yellow-500 w-5 h-5 mt-0.5" />
                  Scalable ecosystem for DeFi, NFTs, and tokenization.
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-yellow-500 w-5 h-5 mt-0.5" />
                  Developer-friendly tools & open-source smart contracts.
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-yellow-500 w-5 h-5 mt-0.5" />
                  Proven reliability and global community trust.
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex justify-center">
          <img
            src="https://media.istockphoto.com/id/1400583164/vector/airdrop-concept-with-colorful-parachutes-and-free-golden-coins-dollar-usd-on-dark-digital.jpg?s=612x612&w=0&k=20&c=leI-aaG9Lu5tsTRbyoe3H6TjaQ-SFlgfiheLwbX1EFw="
            alt="Minex Airdrop"
            className="rounded-3xl object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default CryptoIntro;
