import GraphCarousel from "./GraphCarousel";

const YouMayAlsoLikeSection = async () => {
  const res = await fetch("https://api.coingecko.com/api/v3/search/trending");
  const data = await res.json();
  // console.log(
  //   data.coins[0].item.data.price_change_percentage_24h.usd.toFixed(2)
  // );

  if (data) {
    return (
      <div className="w-full">
        <h2 className="text-2xl font-semibold">You May Also Like</h2>
        <GraphCarousel data={data} />
        <h2 className="text-2xl font-semibold mt-6">Trending Coins</h2>
        <GraphCarousel data={data} />
      </div>
    );
  } else {
    return <></>;
  }
};
export default YouMayAlsoLikeSection;
