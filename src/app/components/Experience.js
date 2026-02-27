import { useTranslations } from "next-intl";
import Image from "next/image";

export default function Experience() {
  const t = useTranslations("Index");
  return (
    <div
      id={t("nav3.path").slice(1)}
      className=" bg-zinc-600  py-32 px-[5%]  w-full"
    >
      <h1 className="text-5xl font-bold text-yellow-200">{t("exp.title")}</h1>

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
        <div
          key={index}
          className="flex flex-col lg:flex-row gap-y-8 lg:items-center gap-x-16 mt-16 text-white transition-all ease-in rounded-md "
        >
          <Image
            src={item.pic}
            height={500}
            width={500}
            alt="job image"
            className="bg-slate-200 rounded-lg"
          ></Image>
          <div>
            <h3 className="text-3xl font-bold mb-4  text-black bg-yellow-200 w-fit p-4">
              {item.title}
            </h3>
            <p className="text-slate-300 text-sm">{item.date}</p>
            {item.desc.map((d, index) => (
              <p
                key={index}
                className="mb-2 bg-zinc-800 p-4 rounded-md  hover:border-b-yellow-400"
              >
                {d}
              </p>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
