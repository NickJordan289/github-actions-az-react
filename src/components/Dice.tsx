import { IDice } from "../IDice";

export function Dice ({ value, held, handler }: IDice) {
  return (
    <div onClick={handler} className={`dice ${held ? "held" : ""}`}>
      <p className="dice-text">{value}</p>
    </div>
  );
}
