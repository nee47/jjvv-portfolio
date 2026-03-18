"use client";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

export default function Languages() {
  const t = useTranslations("Index");
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.75, ease: "easeOut", delay: 0.2 }}
      className="relative bg-black  rounded-md text-white max-w-[550px] p-4 mb-4 roboto"
    >
      <h2 className="text-2xl  text-green-400 ">{t("skills.pl")}</h2>
      <ul className="mt-4">
        {["TypeScript", "Python", "JavaScript", "Java", "C#", "C"].map(
          (item, index) => (
            <li key={index} className=" group hover:bg-purple-600">
              <span className="text-green-400 group-hover:text-transparent">
                ~$
              </span>{" "}
              {item}
            </li>
          ),
        )}
      </ul>
    </motion.div>
  );
}
