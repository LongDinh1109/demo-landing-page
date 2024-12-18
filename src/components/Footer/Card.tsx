type CardProps = {
  isEmpty?: boolean;
  header?: string;
  content?: string;
  name?: string;
  positon?: string;
  avatar?: string;
  className?: string;
};
export default function Card({
  isEmpty= false,
  avatar,
  content,
  header,
  name,
  positon,
  className = ""
}: CardProps) {
  return (
    <div className={`w-[328px] ${!isEmpty && 'bg-white'} mx-auto rounded-lg p-5 ${className}`}>
      {!isEmpty && (
        <>
          <h1 className="font-bold text-base mb-4">{header}</h1>
          <p className="text-md text-gray">{content}</p>
          <div className="flex items-center gap-3 mt-6">
            <img
              src={avatar}
              alt="avatar"
              className="w-[41px] h-[42px] rounded-full"
            />
            <div>
              <h1 className="text-md font-semibold">{name}</h1>
              <p className="text-sm text-gray">{positon}</p>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
