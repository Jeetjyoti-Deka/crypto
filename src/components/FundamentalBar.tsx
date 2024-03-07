import { cn } from "@/lib/utils";

type FundamentalBarProps = {
  title: string;
  value: string;
  percent?: string;
};

const FundamentalBar = ({ title, value, percent }: FundamentalBarProps) => {
  return (
    <div className="w-full ">
      <div className="w-full flex items-center justify-between border-b-2 border-b-slate-300 py-4">
        <p className="text-slate-400 text-sm">{title}</p>
        <p className="text-sm text-right">
          {value}{" "}
          <span
            className={cn(
              percent?.includes("-") ? "text-red-500" : "text-green-500"
            )}
          >
            {percent}
          </span>
        </p>
      </div>
    </div>
  );
};
export default FundamentalBar;
