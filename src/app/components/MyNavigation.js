"use client";
import { useState, useRef, useEffect } from "react";
import { useTranslations, useLocale } from "next-intl";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

function MyNavigation() {
  const [clicked, setClicked] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const locale = useLocale();
  const langRef = useRef(null);

  const toggle = () => setClicked(!clicked);
  const toggleLang = () => setLangOpen((prev) => !prev);

  useEffect(() => {
    function handleClickOutside(event) {
      if (langRef.current && !langRef.current.contains(event.target)) {
        setLangOpen(false);
      }
    }
    if (langOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [langOpen]);

  const t = useTranslations("Index");
  const tabs = ["nav1", "nav2", "nav3", "nav4"];

  const languages = [
    { code: "en", label: "EN" },
    { code: "es", label: "ES" },
  ];

  return (
    <header className="archivo">
      <nav className="visible md:invisible max-w-screen-md mx-auto absolute top-0 z-40 md:top-10 left-0 right-0">
        <button
          onClick={toggle}
          className=" fixed z-50 right-2 p-2 text-2xl text-purple-200"
        >
          ☰
        </button>

        <ul
          className={` ${
            clicked ? " right-8" : "-right-[50%]"
          }  transition-[right] z-40 ease-in duration-300 w-[50%] fixed md:static 
           mt-8 md:visible md:w-auto ml-auto bg-slate-800/90 backdrop-blur-md rounded-2xl md:bg-transparent flex flex-col md:flex-row md:mt-0 py-4 md:py-2 text-white justify-center gap-x-2 gap-y-6 md:gap-y-0 shadow-2xl md:shadow-none border border-slate-700/50 md:border-none`}
        >
          {tabs.map((tab, index) => (
            <motion.li
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              key={index}
            >
              <a href={t(`${tab}.path`)}>
                <div className="p-2 ml-4 md:py-1.5 px-4 text-sm w-fit md:text-center text-slate-300 hover:text-purple-400 transition-colors font-medium rounded-lg hover:bg-slate-800/50">
                  {t(`${tab}.label`)}
                </div>
              </a>
            </motion.li>
          ))}
        </ul>
      </nav>

      <div id="langs" className="absolute top-0 z-40">
        <div className="flex justify-start ">
          <div className="relative" ref={langRef}>
            <motion.button
              type="button"
              onClick={toggleLang}
              className="flex items-center gap-2 px-4 py-2 text-slate-300 rounded-lg hover:bg-slate-800 hover:text-white border border-transparent hover:border-slate-700 transition-all min-w-[4rem]"
              whileTap={{ scale: 0.97 }}
              aria-expanded={langOpen}
              aria-haspopup="listbox"
              aria-label="Select language"
            >
              <span className="font-medium uppercase">{locale}</span>
              <motion.svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                animate={{ rotate: langOpen ? 180 : 0 }}
                transition={{ duration: 0.2 }}
                className="shrink-0"
              >
                <path d="M6 9l6 6 6-6" />
              </motion.svg>
            </motion.button>

            <AnimatePresence>
              {langOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -8, scale: 0.96 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -8, scale: 0.96 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  className="absolute left-0 top-full mt-2 py-1.5 min-w-[5rem] bg-slate-800/95 backdrop-blur-md rounded-xl shadow-xl border border-slate-700/50 overflow-hidden z-50"
                >
                  {languages.map(({ code, label }) => (
                    <Link
                      key={code}
                      href={`/${code}`}
                      onClick={() => setLangOpen(false)}
                      className={`block px-5 py-2.5 text-sm transition-colors ${
                        locale === code
                          ? "bg-purple-500/20 text-purple-400 font-bold"
                          : "text-slate-300 hover:bg-slate-700/80 hover:text-white"
                      }`}
                    >
                      {label}
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </header>
  );
}

export default MyNavigation;
