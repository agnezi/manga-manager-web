interface Props {
  title: string;
  volume: number;
  description: string;
}

export const CollectionCard: React.FC<Props> = ({
  title,
  volume,
  description,
}) => {
  return (
    <div className="border-2 rounded border-black flex flex-col max-w-sm bg-gray-300">
      <div className="px-2">
        <span>{title}</span>
      </div>
      <div className="border-t-2 border-black px-2">
        <div className="flex justify-between items-center">
          <span className="text-xl">{volume}</span>
          <div className="flex flex-col justify-end">
            <span className="font-bold italic">{description}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
