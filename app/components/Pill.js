export default function Pill({ props }) {
  return (
    <div
      className={`flex items-center gap-x-1 rounded-md  px-4 py-1 text-xs   ${props.classe}`}
    >
      <div>{<props.logo width="18px" height="18px" />}</div>
      <div>{props.name}</div>
    </div>
  );
}
