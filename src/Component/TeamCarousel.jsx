import { ArrowUp, ArrowDown } from "lucide-react";

const cryptoData = [
  {
    icon: "https://html.dynamiclayers.net/dl/cryptocoin/img/c-1.png",
    name: "Bitcoin",
    price: "7,290.06 $",
    change: "+14.44%",
    up: true,
    volume: "258,087 BTC",
    supply: "923,629",
  },
  {
    icon: "https://html.dynamiclayers.net/dl/cryptocoin/img/c-2.png",
    name: "Ethereum",
    price: "307.13 $",
    change: "+16.17%",
    up: true,
    volume: "1,223,367 ETH",
    supply: "663,133",
  },
  {
    icon: "https://html.dynamiclayers.net/dl/cryptocoin/img/c-3.png",
    name: "Exchange Union",
    price: "8.57 $",
    change: "-1.09%",
    up: false,
    volume: "4,352 XUC",
    supply: "427,132",
  },
  {
    icon: "https://html.dynamiclayers.net/dl/cryptocoin/img/c-4.png",
    name: "Ripple",
    price: "0.20 $",
    change: "+22.80%",
    up: true,
    volume: "222,418,219 XRP",
    supply: "719,280",
  },
  {
    icon: "https://html.dynamiclayers.net/dl/cryptocoin/img/c-4.png",
    name: "DigitalCash",
    price: "87.22 $",
    change: "-14.56%",
    up: false,
    volume: "35 VERI",
    supply: "268,887",
  },
  {
    icon: "https://html.dynamiclayers.net/dl/cryptocoin/img/c-6.png",
    name: "Exchange Union",
    price: "709.31 $",
    change: "-2.18%",
    up: false,
    volume: "125,361 DASH",
    supply: "527,132",
  },
  {
    icon: "https://html.dynamiclayers.net/dl/cryptocoin/img/c-7.png",
    name: "Monero",
    price: "78.97 $",
    change: "+20.55%",
    up: true,
    volume: "2,281,288 LTC",
    supply: "719,280",
  },
  {
    icon: "https://html.dynamiclayers.net/dl/cryptocoin/img/c-7.png",
    name: "Veritaseum",
    price: "156.32 $",
    change: "+1.18%",
    up: true,
    volume: "255,226 XMR",
    supply: "847,1938",
  },
  {
    icon: "https://html.dynamiclayers.net/dl/cryptocoin/img/c-9.png",
    name: "Litecoin",
    price: "156.32 $",
    change: "+1.18%",
    up: true,
    volume: "255,226 XMR",
    supply: "847,1938",
  },
  {
    icon: "https://html.dynamiclayers.net/dl/cryptocoin/img/c-10.png",
    name: "Monero",
    price: "156.32 $",
    change: "+1.18%",
    up: true,
    volume: "255,226 XMR",
    supply: "847,1938",
  },
];

const CryptoTable = () => {
  return (
    <section className="py-12 px-4 bg-white">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold">
          CRYPTOCURRENCY <span className="text-yellow-500">PRICES</span>
        </h2>
        <p className="text-gray-600 mt-2 mb-8 text-sm sm:text-base">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. <br />
          It has survived not only five centuries.
        </p>

        <div className="overflow-x-auto shadow-lg rounded-lg">
          <table className="min-w-full divide-y divide-gray-200 text-sm sm:text-base">
            <thead className="bg-yellow-500 text-white uppercase text-xs sm:text-sm sticky top-0 z-10">
              <tr>
                <th className="px-4 py-3 text-left">Cryptocurrency</th>
                <th className="px-4 py-3 text-left">Price</th>
                <th className="px-4 py-3 text-left">24H % Change</th>
                <th className="px-4 py-3 text-left">24H Volume</th>
                <th className="px-4 py-3 text-left">Supply</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {cryptoData.map((crypto, index) => (
                <tr
                  key={index}
                  className="hover:bg-gray-50 transition duration-300 ease-in-out"
                >
                  <td className="px-4 py-4 flex items-center gap-3">
                    <img
                      src={crypto.icon}
                      alt={crypto.name}
                      className="w-6 h-6 shrink-0"
                    />
                    <span className="whitespace-nowrap">{crypto.name}</span>
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap">{crypto.price}</td>
                  <td className="px-4 py-4 whitespace-nowrap">
                    <span
                      className={`flex items-center gap-1 ${
                        crypto.up ? "text-green-600" : "text-red-500"
                      }`}
                    >
                      {crypto.up ? (
                        <ArrowUp className="w-4 h-4" />
                      ) : (
                        <ArrowDown className="w-4 h-4" />
                      )}
                      {crypto.change}
                    </span>
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap">{crypto.volume}</td>
                  <td className="px-4 py-4 whitespace-nowrap">{crypto.supply}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default CryptoTable;
