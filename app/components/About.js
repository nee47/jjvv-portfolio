import Image from "next/image";
import uba from "@/public/UBA.png";
import Languages from "./Languages";
import Frameworks from "./Frameworks";
import DBS from "./DBS";
import { useTranslations } from "next-intl";

export default function About() {
  const t = useTranslations("Index");
  return (
    <div id={t("nav2.path").slice(1)} className=" py-12 px-[5%] md:px-[15%]">
      <h1 className="text-3xl font-bold ">{t("about.title")}</h1>
      <p className="mt-2">{t("about.desc1")}</p>
      <p className="mt-2">{t("about.desc2")}</p>
      <p className="mt-2"> {t("about.desc3")}</p>

      <section className="my-16">
        <article>
          <h1 className="text-3xl ">{t("skills.title")}</h1>
          <div className="flex flex-wrap gap-4 mt-6 ">
            <div>
              <Languages />
              <DBS />
            </div>
            <Frameworks />
          </div>
        </article>

        <div className="my-12">
          <h2 className="text-2xl ">{t("concepts.title")}</h2>
          <ul className="mt-2 grid grid-cols-1 w-fit md:grid-cols-2">
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
              <li key={c} className="max-w-[370px]">
                {t(`concepts.${c}`)}
              </li>
            ))}
          </ul>
        </div>

        <div className="my-12">
          <h2 className="text-2xl ">Tecnologías que deseo aprender</h2>
          <ul className="mt-2 grid grid-cols-1 w-fit gap-x-6 md:grid-cols-2">
            {["t1", "t2", "t3", "t4", "t5", "t6", "t7"].map((item) => (
              <li key={item} className="max-w-[370px]">
                {t(`toLearn.${item}`)}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="my-24">
        <h1 className="text-3xl">{t("langs.title")}</h1>
        <p className="my-4">{t("langs.l1")}</p>
        <p>{t("langs.l2")}</p>
      </section>

      <section className="my-24">
        <h1 className=" text-3xl">{t("education.title")}</h1>
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
