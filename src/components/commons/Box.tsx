interface BoxProps {
  title?: string;
  className?: string;
  children: React.ReactNode;
}

export default function Box({ title, className, children, ...rest }: BoxProps) {
  return (
    <div
      className={`w-full h-full bg-box-color rounded-[10px] 
        ${title ? "py-[23px] px-[20px]" : "py-[30px] px-[25px]"}  
        ${className ? className : ""}`}
      {...rest}
    >
      {title && <div className="font-bold mb-[25px]">{title}</div>}
      {children}
    </div>
  );
}
