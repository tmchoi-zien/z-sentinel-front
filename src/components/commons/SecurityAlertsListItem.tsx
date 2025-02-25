interface Props {
  alertName: string;
  edgeInfo: {
    from: string;
    to: string;
  };
  date: string;
}

export default function SecurityAlertsListItem({
  alertName,
  edgeInfo,
  date,
}: Props) {
  return (
    <div className="flex justify-between min-h-[50px] bg-[rgba(225,255,255,0.03)] px-[20px] rounded-[10px]">
      <span className="flex justify-center items-center text-sm">
        {alertName} {edgeInfo.from} {"<->"} {edgeInfo.to}
      </span>
      <span className="flex justify-center items-center text-[13px]">
        {date}
      </span>
    </div>
  );
}
