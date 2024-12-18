import LeftContainer from "./LeftContainer";
import RightContainer from "./RightContainer";
export default function Body() {
  return (
    <div className="flex py-9 px-5 md:px-12 lg:px-24 lg:flex-row flex-col">
      <LeftContainer />
      <RightContainer />
    </div>
  );
}
