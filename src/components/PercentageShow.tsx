type PercentageShowProps = {
  value: number;
};

const PercentageShow = ({ value }: PercentageShowProps) => {
  return (
    <div className="w-20 sm:w-32 h-20 sm:h-32 rounded-full bg-green-100 text-green-500 flex items-center justify-center text-lg sm:text-2xl font-semibold">
      {value}%
    </div>
  );
};
export default PercentageShow;
