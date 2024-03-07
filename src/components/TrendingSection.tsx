import Image from "next/image";
import { Badge } from "./ui/badge";
import { cn } from "@/lib/utils";

const TrendingSection = async () => {
  const res = await fetch("https://api.coingecko.com/api/v3/search/trending");
  const data = await res.json();
  const coins = data.coins.slice(0, 3);

  return (
    <div className="bg-white w-full max-w-[420px] flex flex-col pr-4 gap-y-3 p-6 rounded-[8px]">
      <h2 className="text-xl font-semibold">Trending Coins (24h)</h2>
      {coins.map((coin: any) => {
        const percent =
          coin.item.data.price_change_percentage_24h.usd.toFixed(2);
        return (
          <div key={coin.item.id} className="flex items-center justify-between">
            <div className="flex items-center gap-x-2">
              <Image
                src={coin.item.thumb}
                alt={coin.name}
                width={20}
                height={20}
              />
              <p>
                {coin.item.name} ({coin.item.slug})
              </p>
            </div>
            <Badge
              className={cn(
                "w-14 rounded-[4px] flex items-center justify-center",
                percent.includes("-")
                  ? "bg-red-100 text-red-500"
                  : "bg-green-100 text-green-500"
              )}
            >
              {percent}%
            </Badge>
          </div>
        );
      })}
    </div>
  );
};
export default TrendingSection;
