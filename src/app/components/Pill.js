import Python from "./icons/Python";
import Tailwind from "./icons/Tailwind";
import NodeJs from "./icons/NodeJs";
import Nicon from "./icons/Nicon";
import QT from "./icons/QT";

const ICONS = {
  python: Python,
  tailwind: Tailwind,
  nodejs: NodeJs,
  nextjs: Nicon,
  qt: QT,
};

export default function Pill({ tag }) {
  const Icon = ICONS[tag.logo];

  return (
    <div
      className={`flex items-center gap-x-1 rounded-md  px-4 py-1 text-xs   ${tag.classe}`}
    >
      {Icon && (
        <div>
          <Icon width="18px" height="18px" />
        </div>
      )}
      <div>{tag.name}</div>
    </div>
  );
}
