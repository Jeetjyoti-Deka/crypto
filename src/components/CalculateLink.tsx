import Image from "next/image";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

type CalculateLinkProps = {
  title: string;
  img: string;
  className: string;
};

const CalculateLink = ({ title, img, className }: CalculateLinkProps) => {
  return (
    <div
      className={cn(
        "p-4 rounded-[8px] flex items-center gap-x-6 text-white max-w-[350px] md:max-w-[450px]",
        className
      )}
    >
      <Image
        src={img}
        alt="img"
        width={150}
        height={150}
        className="rounded-[8px] w-[70px] sm:w-[100px] md:w-[150px]"
      />
      <div className="flex flex-col gap-y-4">
        <h2 className="font-semibold text-sm md:text-xl tracking-wide md:max-w-[190px]">
          {title}
        </h2>
        <Button
          variant="secondary"
          className="font-semibold text-[12px] sm:text-sm md:text-lg  px-2 py-0 md:p-6 flex items-center justify-between gap-x-2 w-[100px] sm:w-[120px] md:w-[180px]"
        >
          Check Now
          <Image
            src="/icons/arrow_right.svg"
            alt="arrow_right"
            width={16}
            height={16}
          />
        </Button>
      </div>
    </div>
  );
};
export default CalculateLink;
