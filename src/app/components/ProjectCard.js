"use client";
import Image from "next/image";
import Pill from "./Pill";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

export default function ProjectCard({ info, tags, index }) {
  const t = useTranslations("Index");
  return (
    <motion.article
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <header className="flex flex-col xl:flex-row gap-x-12 gap-y-8 items-center justify-between group">
        <div className="relative w-full xl:w-1/2 overflow-hidden rounded-xl border border-slate-700/50 shadow-2xl">
          <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors duration-500 z-10 pointer-events-none" />
          <Image
            className="w-full object-cover aspect-video group-hover:scale-105 transform transition-transform duration-700 ease-out"
          src={info.img}
          alt="Aplicacion desarrollada por James Vilca"
          width={700}
          height={500}
          />
        </div>

        <div className="w-full xl:w-1/2 flex flex-col">
          <h3 className="font-extrabold text-3xl text-white mb-4 group-hover:text-purple-400 transition-colors duration-300">{info.title}</h3>
          <div className="p-6 rounded-xl bg-slate-800/50 border border-slate-700/50 shadow-lg backdrop-blur-sm mb-6">
            <p className="text-base text-slate-300 leading-relaxed">{info.description}</p>
          </div>
          <div className="flex flex-wrap items-center gap-4 mb-6">
            {info.projectGitHub && (
              <a
                href={info.projectGitHub}
                target="_blank"
                className="flex items-center gap-2 px-5 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 rounded-lg text-sm font-semibold transition-all duration-300 hover:-translate-y-1 shadow-md"
              >
                {t("externals.git")}
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </a>
            )}

            {info.projectDemo && (
              <a
                href={info.projectDemo}
                target="_blank"
                className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white rounded-lg text-sm font-semibold transition-all duration-300 hover:-translate-y-1 shadow-md shadow-purple-500/20"
              >
                {t("externals.demo")}
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
              </a>
            )}
          </div>

          {
            <div className="flex gap-x-2 pt-6">
              {tags?.map((tag, index) => (
                <Pill key={index} tag={tag} />
              ))}
            </div>
          }
        </div>
      </header>
    </motion.article>
  );
}
