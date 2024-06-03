export default function Experience() {
  return (
    <div
      id="experiencia"
      className=" bg-gray-400 py-12 px-[5%] md:px-[15%] w-full"
    >
      <h1 className="text-3xl font-bold ">Experiencia</h1>

      {[
        {
          title: "Autónomo",
          date: " Desde 2017 hasta actualmente",
          desc: [
            "He dado soporte IT y he implementado distintos tipos de scripts en python y aplicaciones web para negocios como kioscos y pequeños comercios.",
            "Atiendo emergencias y doy mantenimiento de hardware periodicamente también.",
          ],
        },
        ,
        {
          title: "Revendedor de Hardware independiente",
          date: " Desde 2020 hasta 2022",
          desc: [
            "Me encargaba de promocionar, cotizar y vender hardware a consumidor final",
            "Aprendí mucho de ensamblaje de pcs, dectar fallos en el hardware, instalación de sistemas operativos, backups y recuperación de datos.",
          ],
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
