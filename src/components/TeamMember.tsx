import Image from "next/image";

type TeamMemberProps = {
  name: string;
  img: string;
};

const TeamMember = ({ name, img }: TeamMemberProps) => {
  return (
    <div className="flex flex-col md:flex-row items-center md:items-start gap-x-6 bg-secondary-blue py-3 px-4 rounded-[8px]">
      <div className="flex flex-col items-center gap-y-1 min-w-[120px]">
        <Image
          src={img}
          alt="team_member"
          width={150}
          height={150}
          className="rounded-[8px] w-24"
        />
        <h4 className="font-semibold mt-1">{name}</h4>
        <p className="text-sm text-slate-400">Designation here</p>
      </div>
      <p className="pt-3">
        Lorem ipsum dolor sit amet consectetur. In justo rutrum sit sit
        fermentum ut libero hendrerit id. Tellus sit ornare netus sagittis in
        nunc convallis mattis maecenas. Tempus arcu leo sociis laoreet nec neque
        sed pellentesque viverra. Consectetur proin amet ut id facilisi quis
        consectetur. Tellus gravida ultricies feugiat sed eu egestas dolor est
        ipsum. Malesuada etiam mi gravida praesent interdu
      </p>
    </div>
  );
};
export default TeamMember;
