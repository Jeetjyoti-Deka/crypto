import FundamentalBar from "./FundamentalBar";
import PerformanceBar from "./PerformanceBar";

const PerformancesSection = () => {
  return (
    <section className="bg-white p-6 rounded-[6px]">
      <h2 className="font-semibold text-xl mb-4">Performance</h2>
      <div className="flex flex-col gap-y-3">
        <PerformanceBar
          lowTitle={"Today's Low"}
          lowValue={46930.22}
          highTitle={"Today's High"}
          highValue={49343.83}
        />
        <PerformanceBar
          lowTitle={"52W Low"}
          lowValue={16930.22}
          highTitle={"52W High"}
          highValue={49743.83}
        />
      </div>
      <h4 className="font-semibold text-lg mt-6">Fundamentals</h4>
      <div className="flex flex-col sm:flex-row items-center sm:gap-x-20 w-full">
        <div className="w-full">
          <FundamentalBar title="Bitcoin Price" value="$16,815.46" />
          <FundamentalBar
            title="24h Low / 24h High"
            value="$16,382.07 / $16,874.12"
          />
          <FundamentalBar
            title="7d Low / 7d High"
            value="$16,382.07 / $16,874.12"
          />
          <FundamentalBar title="Trading Volume" value="$23,249,202,782" />
          <FundamentalBar title="Market Cap Rank" value="#1" />
        </div>
        <div className="w-full">
          <FundamentalBar title="Market Cap" value="$323,507,290,047" />
          <FundamentalBar title="Market Cap Dominance" value="38.343%" />
          <FundamentalBar title="Volume / Market Cap" value="0.0718" />
          <FundamentalBar
            title="All-Time High"
            value="$69,044.77"
            percent="-75.6%"
          />
          <FundamentalBar
            title="All-Time Low"
            value="$67.81"
            percent="24729.1%"
          />
        </div>
      </div>
    </section>
  );
};
export default PerformancesSection;
