import { useTranslations } from "next-intl";

export default function Languages() {
  const t = useTranslations("Index");
  return (
    <div className=" relative bg-black  rounded-md text-white max-w-[550px] p-4 mb-4 roboto">
      <h2 className="text-2xl  text-green-400 ">{t("skills.pl")}</h2>
      <ul className="mt-4">
        {["TypeScript", "Python", "JavaScript", "Java", "C#", "C"].map(
          (item, index) => (
            <li key={index} className=" group hover:bg-purple-600">
              <span className="text-green-400 group-hover:text-transparent">
                ~$
              </span>{" "}
              {item}
            </li>
          ),
        )}
      </ul>
    </div>
  );
}
