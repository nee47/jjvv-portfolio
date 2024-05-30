export default function Pill({ props }) {
  return (
    <div
      className={`flex items-center gap-x-1 rounded-md  px-4 py-1 text-xs   cursor-pointer ${props.classe}`}
    >
      <div>{<props.logo width="18" height="18" />}</div>
      <div>{props.name}</div>
    </div>
  );
}
