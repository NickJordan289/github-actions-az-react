export function Dice({ value, held, handler }) {
  return (
    <div onClick={handler} className={`dice ${held ? "held" : ""}`}>
      <p className="dice-text">{value}</p>
    </div>
  );
}
