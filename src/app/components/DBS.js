"use client";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

export default function DBS() {
  const t = useTranslations("Index");
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
      className="bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 shadow-xl rounded-2xl w-full md:w-[350px] p-8"
    >
      <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 text-transparent bg-clip-text mb-6 tracking-tight">{t("skills.db")}</h2>

      <ul className="flex flex-col gap-3">
        {["SQL", "MongoDB", "FirebaseDB"].map((item, index) => (
          <li
            key={index}
            className="flex items-center text-slate-300 hover:text-white bg-slate-900/50 hover:bg-slate-700/50 border border-slate-700 hover:border-cyan-500/50 py-3 px-4 rounded-xl transition-all duration-300 cursor-default"
          >
            <span className="text-cyan-500 mr-3">⛁</span>
            {item}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}
