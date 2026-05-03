"use client";
import ReactCon from "./icons/ReactCon";
import HtmlIcon from "./icons/HtmlIcon";
import NodeJs from "./icons/NodeJs";
import Nicon from "./icons/Nicon";
import QT from "./icons/QT";
import CssIcon from "./icons/CssIcon";
import Tailwind from "./icons/Tailwind";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

export default function Frameworks() {
  const t = useTranslations("Index");
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 shadow-xl rounded-2xl w-full md:w-[600px] p-8"
    >
      <h2 className="text-2xl font-bold text-white mb-6 tracking-tight">{t("skills.frameworks")}</h2>

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
            className="relative flex items-center justify-center rounded-xl h-24 bg-slate-900/50 border border-slate-700/50 group p-4 hover:bg-slate-800 hover:border-purple-500/50 transition-all duration-300 shadow-inner"
          >
            <div className="opacity-0 translate-y-2 group-hover:opacity-100 group-hover:-translate-y-2 text-xs absolute z-30 -top-6 rounded-md left-0 right-0 mx-auto bg-slate-800 text-slate-200 border border-slate-600 w-max px-3 py-1 shadow-lg transition-all duration-300 pointer-events-none">
              {item.label}
            </div>
            <div className="group-hover:scale-110 transition-transform duration-300 filter drop-shadow-md">
              <item.icon width="50px" height="50px" />
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
