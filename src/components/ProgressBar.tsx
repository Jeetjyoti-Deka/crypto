import { Progress } from "@/components/ui/progress";
import React from "react";

type ProgressBarProps = {
  value: number;
  title: string;
  indicatorColor: string;
};

const ProgressBar = ({ value, title, indicatorColor }: ProgressBarProps) => {
  return (
    <div className="flex max-w-[500px] items-center gap-x-4">
      <p className="w-8 font-normal text-black/70">{title}</p>
      <Progress
        value={value}
        className="bg-slate-100"
        indicatorColor={indicatorColor}
      />
    </div>
  );
};
export default ProgressBar;
