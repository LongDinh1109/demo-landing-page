import Card from "./Card";
type CardSliderProps = {
  CardData: {
    header: string;
    content: string;
    name: string;
    positon: string;
    avatar: string;
  }[];
  mode: "left" | "right";
};
export default function CardSlider({ CardData, mode }: CardSliderProps) {
  const animation = {
    left: "animate-infinite-scroll-left",
    right: "animate-infinite-scroll-right",
  };

  return (
    <div className="w-full inline-flex flex-nowrap gap-6">
      <div className={`flex justify-center gap-6 w-fit ${animation[mode]}`}>
        {CardData.map((item) => (
          <Card
            header={item.header}
            content={item.content}
            name={item.name}
            positon={item.positon}
            avatar={item.avatar}
          />
        ))}
      </div>
      <div className={`flex justify-center gap-6 w-fit ${animation[mode]}`} aria-hidden="true">
        {CardData.map((item) => (
          <Card
            header={item.header}
            content={item.content}
            name={item.name}
            positon={item.positon}
            avatar={item.avatar}
          />
        ))}
      </div>
    </div>
  );
}
