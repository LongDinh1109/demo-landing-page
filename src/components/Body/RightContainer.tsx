import CardBody from "./CardBody";
import cardImg1 from "../../assets/Card-img-1.png";
import cardImg2 from "../../assets/Card-img-2.png";
import medalIcon from "../../assets/medal-star.svg";
import discountIcon from "../../assets/discount-shape.svg";
import starIcon from "../../assets/magic-star.svg";
import LocationIcon from "../../assets/location.svg";
import BubbleIcon from "../../assets/bubble.svg";
import ArrowIcon from "../../assets/arrow-right.svg";
import Badge from "./Badge";

const ActionPanel = () => {
  return (
    <div className="flex gap-3 p-3 absolute bottom-[50px] left-[100px] backdrop-blur-32 bg-white-gradient w-[511px] rounded-xl overflow-hidden">
      <img src={BubbleIcon} className="w-[52px] h-[52px] bg-white rounded-full p-2" />
      <div>
        I want to find an apartment in Arizona with 2 bedrooms and close to
        school
      </div>
      <img src={ArrowIcon} />
    </div>
  );
};

export default function RightContainer() {
  return (
    <div className="hidden md:block md:w-1/2 relative h-[573px]">
      <CardBody
        className="absolute top-0 right-[50px]"
        icon={discountIcon}
        header="$355,000 → 255,000"
        content="6000 E Camelback Rd Unit 7707, Scottsdale, AZ 85251"
        img={cardImg1}
      />
      <CardBody
        className="absolute bottom-0 left-[50px]"
        size="large"
        icon={medalIcon}
        header="$455,000"
        content="15902 N 170th Ln, Surprise, AZ 85388"
        img={cardImg2}
      />
      <Badge icon={starIcon} className="absolute bottom-1/2 left-0">
        2 Bedrooms
      </Badge>
      <Badge icon={starIcon} className="absolute top-1/3 right-0">
        Best Choice
      </Badge>
      <div className="flex flex-col gap-2 absolute bottom-1/4 right-[100px]">
        <img src={LocationIcon} />
        <Badge>Arizona</Badge>
      </div>
      <ActionPanel />
    </div>
  );
}
