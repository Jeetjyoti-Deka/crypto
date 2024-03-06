import { CALCULATE_LINKS } from "@/lib/constants";
import CalculateLink from "./CalculateLink";
import { Separator } from "@/components/ui/separator";

const AboutBitcoinSection = () => {
  return (
    <section className="bg-white rounded-[4px]flex flex-col items-start w-full p-7 pt-4">
      <h2 className="font-semibold text-2xl">About Bitcoin</h2>
      <h3 className="font-bold mb-2 mt-5">What is Bitcoin?</h3>
      <p className="font-medium text-black/75">
        Bitcoin&apos;s price today is US$16,951.82, with a 24-hour trading
        volume of $19.14 B. BTC is +0.36% in the last 24 hours. It is currently
        -7.70% from its 7-day all-time high of $18,366.66, and 3.40% from its
        7-day all-time low of $16,394.75. BTC has a circulating supply of 19.24
        M BTC and a max supply of 21 M BTC.
      </p>
      <Separator className="w-full h-[2px] my-3" />
      <h3 className="font-bold mb-2">Lorem ipsum dolor sit amet</h3>
      <p className="font-medium text-black/75">
        Lorem ipsum dolor sit amet consectetur. Aliquam placerat sit lobortis
        tristique pharetra. Diam id et lectus urna et tellus aliquam dictum at.
        Viverra diam suspendisse enim facilisi diam ut sed. Quam scelerisque
        fermentum sapien morbi sodales odio sed rhoncus. Ultricies urna volutpat
        pendisse enim facilisi diam ut sed. Quam scelerisque fermentum sapien
        morbi sodales odio sed rhoncus.
      </p>
      <p className="font-medium text-black/75 my-4">
        Diam praesent massa dapibus magna aliquam a dictumst volutpat. Egestas
        vitae pellentesque auctor amet. Nunc sagittis libero adipiscing cursus
        felis pellentesque interdum. Odio cursus phasellus velit in senectus
        enim dui. Turpis tristique placerat interdum sed volutpat. ld imperdiet
        magna eget eros donec cursus nunc. Mauris faucibus diam mi nunc praesent
        massa turpis a. Integer dignissim augue viverra nulla et quis lobortis
        phasellus. Integer pellentesque enim convallis ultricies at.
      </p>
      <p className="font-medium text-black/75">
        Fermentum hendrerit imperdiet nulla viverra faucibus. Sit aliquam massa
        vel convallis duis ac. Mi adipiscing semper scelerisque porttitor
        pulvinar nunc risus. Fermentum potenti iaculis lacinia congue ipsum
        fames amet dui. Purus ultrices tincidunt volutpat in eget. Ullamcorper
        dui
      </p>
      <Separator className="w-full h-[2px] my-3" />
      <h3 className="font-semibold text-2xl mt-6 mb-3">
        Already Holding Bitcoin?
      </h3>
      <div className="flex items-center justify-between">
        {CALCULATE_LINKS.map((link, i) => (
          <CalculateLink
            key={i}
            title={link.title}
            img={link.img}
            className={link.className}
          />
        ))}
      </div>
      <Separator className="w-full h-[2px] my-3" />
      <p className="font-medium text-black/75">
        Fermentum hendrerit imperdiet nulla viverra faucibus. Sit aliquam massa
        vel convallis duis ac. Mi adipiscing semper scelerisque porttitor
        pulvinar nunc risus. Fermentum potenti iaculis lacinia congue ipsum
        fames amet dui. Purus ultrices tincidunt volutpat in eget. Ullamcorper
        dui
      </p>
    </section>
  );
};
export default AboutBitcoinSection;
