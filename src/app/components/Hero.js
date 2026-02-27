"use client";
import Image from "next/image";
import joseph from "@/public/foto-de-perfil.webp";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

export default function Hero() {
  const t = useTranslations("Index");

  return (
    <div className="size-full flex justify-center bg-zinc-700">
      <div className="md:h-[560px]  mt-2 items-center md:py-14 md:mt-28 md:items-start flex flex-col-reverse gap-y-4 md:flex-row ">
        <motion.div
          initial={{ x: -1300 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.8, ease: "easeIn" }}
          className=" flex flex-col pb-28 flex-wrap gap-y-4  mx-[10%] md:mx-0 "
        >
          <h1 className="text-5xl max-w-[460px] break-words font-extrabold text-yellow-300">
            FULL STACK DEVELOPER
          </h1>
          <p className=" roboto text-white md:max-w-sm ">
            {t.rich("heroDesc", {
              important: (chunks) => (
                <span className="font-bold text-black bg-zinc-300 px-2 ">
                  {chunks}
                </span>
              ),
              important2: (chunks) => (
                <span className="text-red-400 font-bold">{chunks}</span>
              ),
            })}
          </p>

          <div className="flex gap-x-3 ">
            <a
              target="_blank"
              href="https://github.com/nee47"
              className=" hover:scale-125  transition ease-in hover:bg-purple-500 rounded-md"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-4.466 19.59c-.405.078-.534-.171-.534-.384v-2.195c0-.747-.262-1.233-.55-1.481 1.782-.198 3.654-.875 3.654-3.947 0-.874-.312-1.588-.823-2.147.082-.202.356-1.016-.079-2.117 0 0-.671-.215-2.198.82-.64-.18-1.324-.267-2.004-.271-.68.003-1.364.091-2.003.269-1.528-1.035-2.2-.82-2.2-.82-.434 1.102-.16 1.915-.077 2.118-.512.56-.824 1.273-.824 2.147 0 3.064 1.867 3.751 3.645 3.954-.229.2-.436.552-.508 1.07-.457.204-1.614.557-2.328-.666 0 0-.423-.768-1.227-.825 0 0-.78-.01-.055.487 0 0 .525.246.889 1.17 0 0 .463 1.428 2.688.944v1.489c0 .211-.129.459-.528.385-3.18-1.057-5.472-4.056-5.472-7.59 0-4.419 3.582-8 8-8s8 3.581 8 8c0 3.533-2.289 6.531-5.466 7.59z" />
              </svg>
            </a>

            <a
              target="_blank"
              href="https://www.linkedin.com/in/james-joseph-vilca-vargas-70a795305"
              className="transition ease-in hover:scale-125  hover:bg-blue-500 rounded-md"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8, ease: "easeIn" }}
          className=""
        >
          <Image
            className="size-[250px] bg-zinc-600 rounded-full object-cover outline outline-3 outline-yellow-400"
            src={joseph}
            alt="Joseph Vilca"
            loading="eager"
          />
        </motion.div>
      </div>
    </div>
  );
}
