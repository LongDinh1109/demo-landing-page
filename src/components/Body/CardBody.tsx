
type CardProps = {
  size?: "medium" | "large";
  icon?: string;
  header: string;
  content: string;
  img: string;
  className?: string;
};

export default function CardBody({
  size = "medium",
  icon,
  header,
  content,
  img,
  className
}: CardProps) {
  const CardStyles = {
    medium: {
      size: "w-[283px]",
      header: "text-sm",
      content: "text-xs",
      bg: "bg-white",
    },
    large: {
      size: "w-[356px]",
      header: "text-lg font-bold pb-2",
      content: "text-md",
      bg: "backdrop-blur-32 bg-white/60",

    },
  };
  const styles = CardStyles[size];

  return (
    <div
      className={`rounded-xl border-transparent overflow-hidden ${styles.size} ${className}`}
    >
      <div className={`flex justify-between px-4 py-3 gap-8 ${styles.bg}`}>
        <div>
          <h1 className={`${styles.header} font-bold`}>{header}</h1>
          <p className={`${styles.content} font-semibold text-gray`}>
            {content}
          </p>
        </div>
        <img src={icon}></img>
      </div>
      <img src={img} />
    </div>
  );
}
