"use client";
import Image from "next/image";
import joseph from "@/public/james_vilca.webp";
import { useTranslations } from "next-intl";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const t = useTranslations("Index");
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "80%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <div
      ref={ref}
      className="relative size-full flex justify-center bg-slate-900 overflow-hidden pt-20 pb-32"
    >
      {/* Background ambient glow */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-purple-600/20 blur-[120px]" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-blue-600/20 blur-[120px]" />

      <motion.div
        style={{ y: yText, opacity }}
        className="relative z-10 w-full max-w-6xl mx-auto px-6 md:h-[560px] flex flex-col-reverse gap-y-10 md:flex-row items-center justify-between"
      >
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col flex-wrap gap-y-6 max-w-xl"
        >
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white">
            FULL STACK{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
              DEVELOPER
            </span>
          </h1>

          <p className="roboto text-lg text-slate-400 leading-relaxed max-w-md">
            {t.rich("heroDesc", {
              important: (chunks) => (
                <span className="font-semibold text-white">{chunks}</span>
              ),
              important2: (chunks) => (
                <span className="text-blue-400 font-semibold">{chunks}</span>
              ),
            })}
          </p>

          <div className="flex gap-x-4 mt-4">
            <a
              target="_blank"
              href="https://github.com/nee47"
              className="flex items-center justify-center size-12 rounded-xl bg-slate-800 border border-slate-700 text-slate-300 hover:text-white hover:bg-slate-700 hover:border-slate-600 hover:scale-105 transition-all duration-300 shadow-lg"
              aria-label="GitHub Profile"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-4.466 19.59c-.405.078-.534-.171-.534-.384v-2.195c0-.747-.262-1.233-.55-1.481 1.782-.198 3.654-.875 3.654-3.947 0-.874-.312-1.588-.823-2.147.082-.202.356-1.016-.079-2.117 0 0-.671-.215-2.198.82-.64-.18-1.324-.267-2.004-.271-.68.003-1.364.091-2.003.269-1.528-1.035-2.2-.82-2.2-.82-.434 1.102-.16 1.915-.077 2.118-.512.56-.824 1.273-.824 2.147 0 3.064 1.867 3.751 3.645 3.954-.229.2-.436.552-.508 1.07-.457.204-1.614.557-2.328-.666 0 0-.423-.768-1.227-.825 0 0-.78-.01-.055.487 0 0 .525.246.889 1.17 0 0 .463 1.428 2.688.944v1.489c0 .211-.129.459-.528.385-3.18-1.057-5.472-4.056-5.472-7.59 0-4.419 3.582-8 8-8s8 3.581 8 8c0 3.533-2.289 6.531-5.466 7.59z" />
              </svg>
            </a>

            <a
              target="_blank"
              href="https://www.linkedin.com/in/james-joseph-vilca-vargas-70a795305"
              className="flex items-center justify-center size-12 rounded-xl bg-slate-800 border border-slate-700 text-slate-300 hover:text-white hover:bg-[#0077b5] hover:border-[#0077b5] hover:scale-105 transition-all duration-300 shadow-lg"
              aria-label="LinkedIn Profile"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          style={{ y: yBg }}
          className="relative"
        >
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-500 to-purple-500 blur-3xl opacity-30 animate-pulse" />
          <Image
            className="relative size-[250px] md:size-[360px] bg-slate-800 rounded-full object-cover border border-slate-700 shadow-[0_0_40px_rgba(0,0,0,0.5)] transition-transform duration-500 hover:scale-[1.02]"
            src={joseph}
            alt="Joseph Vilca"
            priority
          />
        </motion.div>
      </motion.div>
    </div>
  );
}
