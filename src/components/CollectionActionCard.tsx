import { BsArrowBarRight } from "react-icons/bs";

interface Props {
  name: string;
  details: string;
}

export const CollectionActionCard: React.FC<Props> = ({ name, details }) => {
  return (
    <div
      className="flex justify-center items-start flex-col flex-wrap border border-gray-400
   rounded-md p-4 bg-gray-300 xl:w-1/5 lg:w-1/5 md:w-1/3 sm:w-1/2 m-4"
    >
      <span className="font-bold">{name}</span>
      <span className="text-xs text-slate-500 my-2 break-all">{details}</span>
      <div className="flex items-center justify-end w-full">
        <button
          type="button"
          className="text-sm border rounded-md border-blue-500 bg-blue-300 p-1 text-white"
        >
          Go to
        </button>
        <BsArrowBarRight className="ml-1" />
      </div>
    </div>
  );
};
