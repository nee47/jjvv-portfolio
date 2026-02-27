import Image from "next/image";
import uba from "@/public/uba-logo.webp";
import Languages from "./Languages";
import Frameworks from "./Frameworks";
import DBS from "./DBS";
import { useTranslations } from "next-intl";

export default function About() {
  const t = useTranslations("Index");
  return (
    <div id={t("nav2.path").slice(1)} className="py-12 px-[5%] md:px-[15%]">
      <div className="py-20">
        <h2 className="text-3xl font-bold ">{t("about.title")}</h2>
        <p className="mt-8">
          {t.rich("about.desc1", {
            important3: (chunks) => (
              <span className="font-bold text-black bg-zinc-300 px-2 ">
                {chunks}
              </span>
            ),
          })}
        </p>
        <p className="mt-2">{t("about.desc2")}</p>
        <p className="mt-2"> {t("about.desc3")}</p>
      </div>

      <section className="my-12">
        <article>
          <h2 className="text-3xl font-bold">{t("skills.title")}</h2>
          <div className="flex flex-wrap gap-4 mt-8 ">
            <div>
              <Languages />
              <DBS />
            </div>
            <Frameworks />
          </div>
        </article>

        <div className="my-20 bg-yellow-300 py-12 rounded-md ">
          <h2 className="ml-20 text-3xl font-bold">{t("concepts.title")}</h2>
          <ul className="mt-8 grid grid-cols-1 md:grid-cols-2 ml-24  gap-y-3">
            {[
              "c1",
              "c2",
              "c3",
              "c4",
              "c5",
              "c6",
              "c7",
              "c8",
              "c9",
              "c10",
              "c11",
              "c12",
            ].map((c) => (
              <li
                key={c}
                className="max-w-[370px] flex rounded-md hover:font-bold"
              >
                <span className="mr-1">☢ </span> {t(`concepts.${c}`)}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="my-24">
        <h2 className="text-3xl font-bold">{t("langs.title")}</h2>
        <p className="mt-8">{t("langs.l1")}</p>
        <p>{t("langs.l2")}</p>
      </section>

      <section className="my-24">
        <h2 className=" text-3xl font-bold">{t("education.title")}</h2>
        <div className="flex gap-x-2 mt-10 items-center">
          <Image
            src={uba}
            alt="Universidad de Buenos Aires"
            className=" h-36  w-auto"
          />
          <div className="flex flex-col">
            <div className="font-bold text-7xl">.UBA</div>
            <div className="text-xl w-[180px] break-words leading-5 pl-4">
              Universidad de Buenos Aires
            </div>
          </div>
        </div>

        <div className="mt-4">
          <h2 className="text-3xl bg-gray-900 rounded-sm w-fit text-white p-4 ">
            {t("education.e1")}
          </h2>
          <p className="text-gray-700">{t("education.date")}</p>
        </div>
      </section>
    </div>
  );
}
