import AboutBitcoinSection from "@/components/AboutBitcoinSection";
import BitcoinSection from "@/components/BitcoinSection";
import Chart from "@/components/Chart";
import GetStartedSection from "@/components/GetStartedSection";
import TeamMember from "@/components/TeamMember";
import TeamSection from "@/components/TeamSection";
import TrendingSection from "@/components/TrendingSection";
import YouMayAlsoLikeSection from "@/components/YouMayAlsoLikeSection";

export default async function Home() {
  return (
    <main>
      {/* <Chart /> */}
      <div className="grid grid-cols-1 xl:grid-cols-body">
        <div className="justify-self-center flex flex-col gap-y-4 px-6 2xl:pl-12">
          <BitcoinSection />
          <AboutBitcoinSection />
          <TeamSection />
        </div>
        <div className="justify-self-center w-full pr-6 hidden xl:flex flex-col items-center gap-y-4 mt-6">
          <GetStartedSection />
          <TrendingSection />
        </div>
      </div>
      <div className="bg-white md:mt-16 mx-6 md:mx-0 p-10 py-16 overflow-hidden flex items-center justify-center">
        <YouMayAlsoLikeSection />
      </div>
    </main>
  );
}
