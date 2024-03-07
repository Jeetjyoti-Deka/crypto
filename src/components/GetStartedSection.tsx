import Image from "next/image";
import { Button } from "./ui/button";

const GetStartedSection = () => {
  return (
    <div className="bg-primary-blue hidden 2xl:flex flex-col items-center gap-y-4 max-w-[420px] rounded-[16px] justify-self-center text-white p-10">
      <h1 className="text-2xl font-bold text-center max-w-[310px] tracking-wide leading-9">
        Get Started with KoinX for FREE
      </h1>
      <p className="text-center text-sm text-white/90 tracking-wide leading-6">
        With our range of features that you can equip for free, KoinX allows you
        to be more educated and aware of your tax reports.
      </p>
      <Image
        src="/images/get_started_img.svg"
        alt="img"
        width={200}
        height={200}
        className="my-4 ml-4"
      />
      <Button
        variant="secondary"
        className="font-semibold text-lg p-6 flex items-center justify-between gap-x-2"
      >
        Get Started for FREE
        <Image
          src="/icons/arrow_right.svg"
          alt="arrow_right"
          width={16}
          height={16}
        />
      </Button>
    </div>
  );
};
export default GetStartedSection;
