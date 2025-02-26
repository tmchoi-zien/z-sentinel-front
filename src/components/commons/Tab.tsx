interface Props {
  items: string[];
  tab: number;
  setTab: (res: number) => void;
  className?: string;
}

export default function Tab({ items, tab, setTab, className, ...rest }: Props) {
  return (
    <div
      className={`flex flex-row gap-[30px] mt-[45px] ${className}`}
      {...rest}
    >
      {items.map((item, index) => {
        return (
          <div
            key={item}
            className={`
              felx justify-center items-center min-h-[40px] font-bold cursor-pointer
              ${tab === index ? "text-main-color border-main-color border-b" : ""}
            `}
            onClick={() => setTab(index)}
          >
            {item}
          </div>
        );
      })}
    </div>
  );
}
