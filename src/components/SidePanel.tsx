import { XMarkIcon } from "@heroicons/react/24/outline";
type SidePanelProps = {
  onClose: () => void;
  children: React.ReactNode;
};
export default function SidePanel({ onClose, children }: SidePanelProps) {
  return (
    <>
      <div className="flex flex-col gap-5 border-l w-1/2 h-full absolute top-0 right-0 bg-white p-6">
        {children}
      </div>
      <XMarkIcon className="w-5 h-5 absolute top-2 right-2" onClick={onClose} />
    </>
  );
}
