import { cn } from "@/lib/utils";
import Chart from "./Chart";
import { Badge } from "./ui/badge";
import Image from "next/image";

const BitcoinSection = async () => {
  const queryString = new URLSearchParams({
    ids: "bitcoin",
    vs_currencies: "inr,usd",
    include_24hr_change: "true",
  }).toString();
  const res = await fetch(
    "https://api.coingecko.com/api/v3/simple/price?" + queryString
  );
  const coinData = await res.json();
  //   console.log(coinData);

  //   const coinListRes = await fetch(
  //     "https://api.coingecko.com/api/v3/coins/bitcoin"
  //   );

  //   const coinListData = await coinListRes.json();
  //   console.log(coinListData.tickers[0]);

  //   const btc = coinListData.tickers.filter(
  //     (item) => item.market.name === "BITSTAMP"
  //   );
  //   console.log(btc);
  const percent = coinData.bitcoin.usd_24h_change.toFixed(2);

  return (
    <div>
      <div className="p-6 pb-0 pl-0">
        <div className="mb-6 flex md:hidden items-center gap-x-4">
          <Image
            src="/images/bitcoin.png"
            alt="logo"
            width={30}
            height={30}
            className="-mr-3"
          />
          <h2 className="text-2xl font-semibold">Bitcoin</h2>
          <p className="text-slate-500 font-semibold text-sm">BTC</p>
          <Badge className="rounded-[4px] bg-slate-500 font-semibold text-[14px] py-2">
            Rank #1
          </Badge>
        </div>
      </div>

      <div className="bg-white rounded-[6px] p-6 h-[550px] md:h-[630px]">
        <div className="mb-6 md:flex items-center gap-x-4 hidden">
          <Image
            src="/images/bitcoin.png"
            alt="logo"
            width={30}
            height={30}
            className="-mr-3"
          />
          <h2 className="text-2xl font-semibold">Bitcoin</h2>
          <p className="text-slate-500 font-semibold text-sm">BTC</p>
          <Badge className="rounded-[4px] bg-slate-500 font-semibold text-[14px] py-2">
            Rank #1
          </Badge>
        </div>
        <div className="flex items-center gap-x-6">
          <p className="font-bold text-2xl">$ {coinData.bitcoin.usd}</p>
          <div className="flex items-center gap-x-3">
            <Badge
              className={cn(
                "rounded-[4px]",
                percent.includes("-")
                  ? "bg-red-100 text-red-500"
                  : "bg-green-100 text-green-500"
              )}
            >
              {percent}%
            </Badge>
            <p className="text-[13px] font-normal text-slate-500">(24h)</p>
          </div>
        </div>
        <p className="font-medium mb-4">₹ {coinData.bitcoin.inr}</p>
        <Chart />
      </div>
    </div>
  );
};
export default BitcoinSection;
