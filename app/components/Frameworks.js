import ReactCon from "./icons/ReactCon";
import HtmlIcon from "./icons/HtmlIcon";
import NodeJs from "./icons/NodeJs";
import Nicon from "./icons/Nicon";
import QT from "./icons/QT";
import CssIcon from "./icons/CssIcon";
import Tailwind from "./icons/Tailwind";
import { useTranslations } from "next-intl";

export default function Frameworks() {
  const t = useTranslations("Index");
  return (
    <div className="bg-slate-600  rounded-md roboto text-white max-w-[550px]  p-4 ">
      <h2 className="text-2xl ">{t("skills.frameworks")}</h2>

      <div className="mt-8 grid grid-cols-2 md:grid-cols-3 gap-2 ">
        {[
          {
            label: "React",
            icon: ReactCon,
          },
          {
            label: "Html",
            icon: HtmlIcon,
          },
          {
            label: "CSS",
            icon: CssIcon,
          },
          {
            label: "Next js",
            icon: Nicon,
          },
          {
            label: "Tailwind CSS",
            icon: Tailwind,
          },
          {
            label: "Pyside",
            icon: QT,
          },
          {
            label: "Express JS",
            icon: NodeJs,
          },
        ].map((item, index) => (
          <div
            key={index}
            className="relative text-center rounded-md h-20 bg-slate-800 min-w-[120px]  group p-4 "
          >
            <div className="md:invisible text-sm  group-hover:visible absolute z-30 -top-4 rounded-md left-0 right-0 mx-auto bg-white  w-20 h-10 text-black">
              {item.label}
            </div>
            <item.icon className="m-auto " width="55px" height="55px" />
          </div>
        ))}
      </div>
    </div>
  );
}
