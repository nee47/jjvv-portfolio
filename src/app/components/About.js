import Image from "next/image";
import uba from "@/public/uba-logo.webp";
import Languages from "./Languages";
import Frameworks from "./Frameworks";
import DBS from "./DBS";
import { useTranslations } from "next-intl";

export default function About() {
  const t = useTranslations("Index");
  return (
    <div id={t("nav2.path").slice(1)} className="py-24 px-[5%] md:px-[15%] text-slate-300 relative z-10 w-full max-w-7xl">
      <div className="py-20">
        <h2 className="text-4xl font-extrabold text-white mb-8 group">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">{t("about.title")}</span>
        </h2>
        <p className="mt-8 text-lg leading-relaxed">
          {t.rich("about.desc1", {
            important3: (chunks) => (
              <span className="font-semibold text-white bg-slate-800 px-2 py-0.5 rounded-md border border-slate-700">
                {chunks}
              </span>
            ),
          })}
        </p>
        <p className="mt-4 text-lg leading-relaxed">{t("about.desc2")}</p>
        <p className="mt-4 text-lg leading-relaxed"> {t("about.desc3")}</p>
      </div>

      <section className="my-12">
        <article>
          <h2 className="text-3xl font-bold text-white mb-8">{t("skills.title")}</h2>
          <div className="flex flex-wrap gap-8 mt-8">
            <div className="flex flex-col gap-6">
              <Languages />
              <DBS />
            </div>
            <Frameworks />
          </div>
        </article>

        <div className="my-32 bg-slate-800/40 border border-slate-700/50 py-16 px-8 rounded-2xl shadow-xl backdrop-blur-sm relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl" />
          <h2 className="md:ml-12 text-3xl font-bold text-white mb-10 relative z-10">{t("concepts.title")}</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 md:ml-16 gap-y-4 gap-x-8 relative z-10">
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
                className="flex items-center gap-3 text-slate-300 hover:text-white transition-colors p-2 rounded-lg hover:bg-slate-700/50"
              >
                <span className="text-purple-400">⚡</span> {t(`concepts.${c}`)}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="my-24">
        <h2 className="text-3xl font-bold text-white mb-8">{t("langs.title")}</h2>
        <div className="space-y-4">
          <p className="text-lg text-slate-300 bg-slate-800/30 p-4 rounded-xl border border-slate-700/30 w-fit">{t("langs.l1")}</p>
          <p className="text-lg text-slate-300 bg-slate-800/30 p-4 rounded-xl border border-slate-700/30 w-fit">{t("langs.l2")}</p>
        </div>
      </section>

      <section className="my-32">
        <h2 className="text-3xl font-bold text-white mb-12">{t("education.title")}</h2>
        <div className="flex flex-wrap gap-x-8 gap-y-6 items-center p-8 bg-slate-800/30 border border-slate-700/50 rounded-2xl">
          <Image
            src={uba}
            alt="Universidad de Buenos Aires"
            className="h-32 w-auto filter drop-shadow-md brightness-90 hover:brightness-100 transition-all"
          />
          <div className="flex flex-col">
            <div className="font-extrabold text-5xl md:text-7xl text-slate-200 tracking-tighter">.UBA</div>
            <div className="text-xl w-[200px] break-words leading-tight pl-2 text-slate-400 mt-2">
              Universidad de Buenos Aires
            </div>
          </div>
        </div>

        <div className="mt-8 ml-4">
          <h3 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text w-fit mb-2">
            {t("education.e1")}
          </h3>
          <p className="text-slate-400 font-medium">{t("education.date")}</p>
        </div>
      </section>
    </div>
  );
}
