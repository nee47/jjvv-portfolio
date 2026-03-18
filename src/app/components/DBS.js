"use client";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

export default function DBS() {
  const t = useTranslations("Index");
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.75, ease: "easeOut", delay: 0.2 }}
      className="bg-stone-700  rounded-md roboto text-white max-w-[550px]  p-4 "
    >
      <h2 className="text-2xl  ">{t("skills.db")}</h2>

      <ul className="mt-4 py-4 ">
        {["SQL", "MongoDB", "FirebaseDB"].map((item, index) => (
          <li
            key={index}
            className="hover:bg-green-600  border border-stone-300 pl-2"
          >
            {item}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}
