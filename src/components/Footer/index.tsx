import avatar from "../../assets/avatar-1.png";
import avatar1 from "../../assets/avatar-2.png";
import avatar2 from "../../assets/avatar-3.png";
import avatar3 from "../../assets/avatar-4.png";
import avatar4 from "../../assets/avatar-5.png";
import avatar5 from "../../assets/avatar-6.png";

import Card from "./Card";
import CardSlider from "./CardSlider";

export default function Footer() {
  const CardData = [
    {
      header: "Fast and accurate!",
      content:
        "“This tool cut down my search time dramatically and made it easier to meet my clients' needs, no matter how complex.”",
      name: "John",
      positon: "Real Estate Agent",
      avatar: avatar,
    },
    {
      header: "Amazing to work with",
      content:
        "“I impressed my clients with how quickly I found matching properties—and how clear the comparisons were.”",
      name: "Sarah",
      positon: "Realtor",
      avatar: avatar1,
    },
    {
      header: "Top-notch experience!",
      content:
        "“I impressed my clients with how quickly I found matching properties—and how clear the comparisons were.”",
      name: "Sarah",
      positon: "Realtor",
      avatar: avatar2,
    },
  ];
  const CardData1 = [
    {
      header: "Top-notch experience!",
      content:
        "“My clients were thrilled by the speed and accuracy of my work. The tool's ability to provide clear and concise comparisons was a huge time-saver for everyone involved.”",
      name: "David Pham",
      positon: "Business Consultant",
      avatar: avatar3,
    },
    {
      header: "Amazing to work with",
      content:
        "“I impressed my clients with how quickly I found matching properties—and how clear the comparisons were.”",
      name: "Sarah Nguyen",
      positon: "Real Estate Agent, New York",
      avatar: avatar4,
    },
    {
      header: "Efficient and professional",
      content:
        "“This tool allowed me to wow my clients by delivering perfect matches in no time. The detailed comparisons were easy to understand and added so much value to the process.”",
      name: "Michael Tran",
      positon: " Financial Advisor, LA",
      avatar: avatar5,
    },
  ];
  return (
    <div className="my-10 px-5 sm:p-0 md:my-56">
      <div className="text-center">
        <h1 className="text-2xl font-semibold">What Agents Are Saying</h1>
        <h2 className="text-base text-gray font-medium md:w-[30%] mx-auto pt-3 pb-6">
          Discover what our satisfied customers have to say about their
          experiences with our services
        </h2>
      </div>
      <div className="lg:flex flex-col gap-6 w-full overflow-hidden hidden">
        <CardSlider CardData={CardData} mode="left" />
        <CardSlider CardData={CardData} mode="right" />
      </div>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(328px,1fr))] gap-1 lg:hidden px-1">
        {CardData.map((item) => (
          <Card
            header={item.header}
            content={item.content}
            name={item.name}
            positon={item.positon}
            avatar={item.avatar}
          />
        ))}
        {CardData1.map((item) => (
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
