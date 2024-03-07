import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

const GraphCarousel = ({ data }: { data: any }) => {
  return (
    <div className="flex items-center justify-center px-2">
      <Carousel className="w-full max-w-[1300px]">
        <CarouselContent className="flex items-center h-[210px] -ml-4">
          {data?.coins &&
            data.coins.map((coin: any, index: number) => {
              const indexOfBrace = coin.item.data.price.indexOf("<");

              const price = indexOfBrace
                ? coin.item.data.price.slice(0, indexOfBrace)
                : coin.item.price;

              const percent =
                coin.item.data.price_change_percentage_24h.usd.toFixed(2);

              return (
                <CarouselItem
                  key={index}
                  className="pl-4 basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/5"
                >
                  <div className="p-4 flex flex-col items-start border-2 border-slate-300 rounded-[8px]">
                    <div className="flex items-center gap-x-2">
                      <Image
                        src={coin.item.small}
                        alt="img"
                        width={30}
                        height={30}
                      />
                      <h4>{coin.item.name}</h4>
                      <Badge
                        className={cn(
                          "rounded-[4px] py-1 font-normal",
                          percent.includes("-")
                            ? "bg-red-100 text-red-500"
                            : "bg-green-100 text-green-500"
                        )}
                      >
                        {percent.includes("-") ? `${percent}%` : `+${percent}%`}
                      </Badge>
                    </div>
                    <p className="font-medium text-lg">{price}</p>
                    <Image
                      src={coin.item?.data?.sparkline}
                      alt="img"
                      width={100}
                      height={100}
                      className="w-full"
                    />
                  </div>
                </CarouselItem>
              );
            })}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};
export default GraphCarousel;
