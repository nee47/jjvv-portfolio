"use client";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

export default function Languages() {
  const t = useTranslations("Index");
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
      className="relative bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 shadow-xl rounded-2xl text-white w-full md:w-[350px] p-8 mb-6 font-mono"
    >
      <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text mb-6 tracking-tight">{t("skills.pl")}</h2>
      <ul className="mt-4">
        {["TypeScript", "Python", "JavaScript", "Java", "C#", "C"].map(
          (item, index) => (
            <li key={index} className="group flex items-center gap-3 py-2 px-3 rounded-lg hover:bg-slate-700/50 transition-colors cursor-default mb-1">
              <span className="text-purple-500 font-bold group-hover:text-blue-400 transition-colors">
                ~$
              </span>
              <span className="text-slate-300 group-hover:text-white transition-colors">{item}</span>
            </li>
          ),
        )}
      </ul>
    </motion.div>
  );
}
