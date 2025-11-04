import "./buttun.css";
export default function Buttun(props) {
  const { type, title, onClick ,disabled} = props;
  return (
    <button
      className={`btn ${
        (type === "add" && "add") ||
        (type === "remove" && "remove") ||
        (type === "checkout" && "checkout")
      } ${disabled ? "disabled" : ""}`}
      onClick={onClick}
      disabled={disabled}
    >
      {" "}
      {title}
    </button>
  );
}
