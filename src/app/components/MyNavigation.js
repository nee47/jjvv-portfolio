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
        <button onClick={toggle} className=" fixed z-50 right-2 p-2 text-2xl">
          ☰
        </button>

        <ul
          className={` ${
            clicked ? " right-8" : "-right-[50%]"
          }  transition-[right] z-40 ease-in duration-200 w-[50%] fixed md:static 
           mt-8 md:visible md:w-auto ml-auto bg-yellow-200 font-bold md:bg-transparent flex flex-col md:flex-row md:mt-0 py-2 text-white justify-center gap-x-2 gap-y-6 md:gap-y-0 `}
        >
          {tabs.map((tab, index) => (
            <li key={index}>
              <a href={t(`${tab}.path`)}>
                <div className="p-2 ml-4 md:py-1 text-sm  w-[100px] md:text-center text-black md:text-yellow-400 hover:text-orange-600 md:hover:border-b md:hover:border-b-zinc-400">
                  {t(`${tab}.label`)}
                </div>
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div id="langs" className="bg-zinc-700 relative">
        <div className="flex justify-start p-10">
          <div className="relative" ref={langRef}>
            <motion.button
              type="button"
              onClick={toggleLang}
              className="flex items-center gap-2 px-4 py-2 text-white rounded-lg hover:bg-zinc-600 transition-colors min-w-[4rem]"
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
                  className="absolute left-0 top-full mt-1 py-1 min-w-[4rem] bg-zinc-600 rounded-lg shadow-lg overflow-hidden z-50"
                >
                  {languages.map(({ code, label }) => (
                    <Link
                      key={code}
                      href={`/${code}`}
                      onClick={() => setLangOpen(false)}
                      className={`block px-4 py-2 text-sm transition-colors ${
                        locale === code
                          ? "bg-zinc-500 text-white font-medium"
                          : "text-zinc-200 hover:bg-zinc-500 hover:text-white"
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
