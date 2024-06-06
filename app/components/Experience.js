import { useTranslations } from "next-intl";

export default function Experience() {
  const t = useTranslations("Index");
  return (
    <div
      id={t("nav3.path").slice(1)}
      className=" bg-gray-400 py-12 px-[5%] md:px-[15%] w-full"
    >
      <h1 className="text-3xl font-bold ">{t("exp.title")}</h1>

      {[
        {
          title: t("exp.e1.title"),
          date: t("exp.e1.date"),
          desc: [t("exp.e1.desc1"), t("exp.e1.desc2")],
        },
        ,
        {
          title: t("exp.e2.title"),
          date: t("exp.e2.date"),
          desc: [t("exp.e2.desc1"), t("exp.e2.desc2")],
        },
      ].map((item, index) => (
        <div
          key={index}
          className=" group mt-6 hover:bg-gray-300 hover:p-4 hover:relative transition-all ease-in rounded-md "
        >
          <h2 className="text-2xl  mb-2 group-hover:text-purple-600">
            {item.title}
          </h2>
          <p className="text-gray-700 text-sm">{item.date}</p>
          {item.desc.map((d, index) => (
            <p key={index}>{d}</p>
          ))}
        </div>
      ))}
    </div>
  );
}
