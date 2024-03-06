import { TEAM_MEMBERS } from "@/lib/constants";
import TeamMember from "./TeamMember";

const TeamSection = () => {
  return (
    <section className="bg-white rounded-[6px] flex flex-col items-start gap-y-4 w-full p-7 pt-4">
      <h3 className="font-semibold text-2xl">Team</h3>
      <p className="font-medium text-black/75">
        Lorem ipsum dolor sit amet consectetur. ld consequat adipiscing arcu
        nibh. Eget mattis in mi integer sit egestas. Proin tempor id pretium
        quam. Facilisis purus convallis quam augue.
      </p>
      <div className="flex flex-col gap-y-6 mt-6">
        {TEAM_MEMBERS.map((member, i) => (
          <TeamMember name={member.name} img={member.img} key={i} />
        ))}
      </div>
    </section>
  );
};
export default TeamSection;
