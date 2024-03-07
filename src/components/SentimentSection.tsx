import { KEY_EVENT_CARDS, PROGRESS } from "@/lib/constants";
import ProgressBar from "./ProgressBar";
import PercentageShow from "./PercentageShow";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import KeyEventCard from "./KeyEventCard";

const SentimentSection = () => {
  return (
    <section className="p-6 bg-white rounded-[6px]">
      <h2 className="font-semibold text-2xl mb-4">Sentiment</h2>
      <h4 className="font-semibold text-lg text-black/60 mb-4">Key Events</h4>
      <div className="flex items-center justify-center">
        <Carousel className="w-full sm:max-w-full max-w-[250px]">
          <CarouselContent>
            {KEY_EVENT_CARDS.map((card, i) => (
              <KeyEventCard
                key={i}
                iconBgColor={card.iconBgColor}
                cardBgColor={card.cardBgColor}
                img={card.img}
              />
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>

      <h4 className="font-semibold text-lg text-black/60 my-4">
        Analyst Estimates
      </h4>
      <div className="flex items-center gap-x-2 sm:gap-x-10">
        <PercentageShow value={76} />
        <div className="flex flex-1 flex-col gap-y-4">
          {PROGRESS.map((bar, i) => (
            <div className="relative w-full" key={i}>
              <ProgressBar
                key={i}
                title={bar.title}
                value={bar.value}
                indicatorColor={bar.color}
              />

              {/* <p
                style={{
                  position: "absolute",
                  marginLeft: `${bar.value}%`,
                  top: 0,
                }}
              >
                {bar.value}
              </p> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default SentimentSection;
