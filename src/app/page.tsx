import AboutBitcoinSection from "@/components/AboutBitcoinSection";
import Chart from "@/components/Chart";
import GetStartedSection from "@/components/GetStartedSection";

export default async function Home() {
  // const queryString = new URLSearchParams({
  //   ids: "bitcoin",
  //   vs_currencies: "inr,usd",
  //   include_24hr_change: "true",
  // }).toString();
  // const res = await fetch(
  //   "https://api.coingecko.com/api/v3/simple/price?" + queryString
  // );
  // const data = await res.json();
  // console.log(data);

  return (
    <main>
      {/* <Chart /> */}
      <div className="grid grid-cols-body">
        <div className="justify-self-center w-full pl-12">
          <AboutBitcoinSection />
        </div>
        <div className="justify-self-center">
          <GetStartedSection />
        </div>
      </div>
    </main>
  );
}
