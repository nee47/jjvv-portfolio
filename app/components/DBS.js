export default function DBS() {
  return (
    <div className="bg-stone-700  rounded-md roboto text-white max-w-[550px]  p-4 ">
      <h2 className="text-2xl  ">Base de datos</h2>

      <ul className="mt-4 py-4 ">
        {["SQL", "MongoDB", "FirebaseDB"].map((item, index) => (
          <li
            key={index}
            className="hover:bg-green-600  border border-stone-300 pl-2"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
