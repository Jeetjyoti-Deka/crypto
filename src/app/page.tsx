import AboutBitcoinSection from "@/components/AboutBitcoinSection";
import Chart from "@/components/Chart";
import GetStartedSection from "@/components/GetStartedSection";
import TeamMember from "@/components/TeamMember";
import TeamSection from "@/components/TeamSection";

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
        <div className="justify-self-center flex flex-col gap-y-4 pl-12">
          <AboutBitcoinSection />
          <TeamSection />
        </div>
        <div className="justify-self-center">
          <GetStartedSection />
        </div>
      </div>
    </main>
  );
}
