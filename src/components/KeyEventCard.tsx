import Image from "next/image";
import { CarouselItem } from "./ui/carousel";

type KeyEventCardProps = {
  iconBgColor: string;
  cardBgColor: string;
  img: string;
};

const KeyEventCard = ({ iconBgColor, cardBgColor, img }: KeyEventCardProps) => {
  return (
    <CarouselItem className={`basis-full lg:basis-1/2`}>
      <div className={`p-6 rounded-[8px] bg-${cardBgColor}`}>
        <div className="flex items-start justify-start gap-x-4">
          <div
            className={`p-4 mt-2 w-32 flex items-center justify-center rounded-full bg-${iconBgColor}`}
          >
            <Image
              src={img}
              alt="icon"
              width={40}
              height={40}
              className="invert w-full"
            />
          </div>
          <div>
            <h3 className="font-semibold mb-2">
              Lorem ipsum dolor sit amet consectetur. Dui vel quis dignissim
              mattis enim tincidunt.
            </h3>
            <p className="text-sm text-black/60">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
              doloribus commodi fuga sed eos! Ut quidem aliquam quae recusandae,
              ex praesentium quod,
            </p>
          </div>
        </div>
      </div>
    </CarouselItem>
  );
};
export default KeyEventCard;
