import { useTranslations } from "next-intl";
import Image from "next/image";

export default function Experience() {
  const t = useTranslations("Index");
  return (
    <div
      id={t("nav3.path").slice(1)}
      className="bg-slate-900/50 py-32 px-[5%] w-full relative z-10 border-t border-slate-800"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-20 text-center">
          {t("exp.title")}
        </h2>

      {[
        {
          title: t("exp.e1.title"),
          date: t("exp.e1.date"),
          desc: [t("exp.e1.desc1"), t("exp.e1.desc2")],
          pic: "/free.webp",
        },
        ,
        {
          title: t("exp.e2.title"),
          date: t("exp.e2.date"),
          desc: [t("exp.e2.desc1"), t("exp.e2.desc2")],
          pic: "/seller.webp",
        },
      ].map((item, index) => (
        item && (
          <div
            key={index}
            className="flex flex-col lg:flex-row gap-y-8 lg:items-center gap-x-16 mb-24 text-white transition-all ease-in group"
          >
            <div className="relative overflow-hidden rounded-2xl w-full lg:w-1/2 shadow-2xl border border-slate-700/50">
              <div className="absolute inset-0 bg-purple-500/10 group-hover:bg-transparent transition-colors duration-500 z-10" />
              <Image
                src={item.pic}
                height={500}
                width={700}
                alt="job image"
                className="w-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="w-full lg:w-1/2">
              <div className="inline-block px-4 py-2 mb-6 rounded-lg bg-slate-800 border border-slate-700 shadow-md">
                <h3 className="text-2xl font-bold text-white">
                  {item.title}
                </h3>
              </div>
              <p className="text-purple-400 font-medium mb-6 uppercase tracking-wider text-sm">{item.date}</p>
              <div className="space-y-4">
                {item.desc.map((d, idx) => (
                  <p
                    key={idx}
                    className="text-slate-300 leading-relaxed bg-slate-800/30 p-5 rounded-xl border border-slate-700/30 hover:border-slate-600 transition-colors"
                  >
                    {d}
                  </p>
                ))}
              </div>
            </div>
          </div>
        )
      ))}
      </div>
    </div>
  );
}
