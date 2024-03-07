type PerformanceBarProps = {
  lowValue: number;
  highValue: number;
  lowTitle: string;
  highTitle: string;
};

const PerformanceBar = ({
  lowValue,
  highValue,
  lowTitle,
  highTitle,
}: PerformanceBarProps) => {
  return (
    <div className="flex items-center">
      <div className="flex flex-col w-[90px] gap-y-1">
        <h3 className="text-sm">{lowTitle}</h3>
        <p className="font-semibold">{lowValue}</p>
      </div>
      <div className="flex-1 flex items-center justify-center">
        <div className="w-[90%] bg-performancebar h-2 rounded-[4px]" />
      </div>
      <div className="flex w-[90px] flex-col gap-y-1">
        <h3 className="text-sm">{highTitle}</h3>
        <p className="font-semibold">{highValue}</p>
      </div>
    </div>
  );
};
export default PerformanceBar;
