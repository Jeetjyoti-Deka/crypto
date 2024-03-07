import Chart from "./Chart";

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

  return (
    <div className="bg-white rounded-[6px] p-6">
      <h2>Bitcoin</h2>
      <p className="font-bold text-2xl">$ {coinData.bitcoin.usd}</p>
      <p className="font-medium">₹ {coinData.bitcoin.inr}</p>
      <Chart />
    </div>
  );
};
export default BitcoinSection;
