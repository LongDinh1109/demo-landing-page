import Button from "../Button";
import { ArrowDownIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

export default function LeftContainer() {
  return (
    <>
      <div className="md:w-1/2 py-10 md:py-24">
        <h1 className="font-bold text-xl mb-5">
          Close More Deals by{" "}
          <span className="text-primary">Instantly Matching</span> Buyers to the
          Right Properties
        </h1>
        <div className="text-lg font-medium text-secondary lg:mr-48">
          Revolutionize how you find and present properties—save time and
          impress clients with professional presentation
        </div>
        <div className="mt-10 flex gap-5">
          <Button icon={<ArrowDownIcon className="w-6 h-6" />}>
            Get Started
          </Button>
          <Button
            theme="secondary"
            icon={<ChevronRightIcon className="w-6 h-6" />}
          >
            Try Playground
          </Button>
        </div>
      </div>
    </>
  );
}
