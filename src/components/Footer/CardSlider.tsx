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
  const styles = {
    left: "translate-x-[-50px]",
    right: "translate-x-[50px]",
  };

  return (
    <div className={`flex justify-center gap-6 w-fit ${styles[mode]}`}>
      <Card isEmpty={true} className="bg-white-gradient-1" />
      {CardData.map((item) => (
        <Card
          header={item.header}
          content={item.content}
          name={item.name}
          positon={item.positon}
          avatar={item.avatar}
        />
      ))}
      <Card isEmpty={true} className="bg-white-gradient-2" />
    </div>
  );
}
