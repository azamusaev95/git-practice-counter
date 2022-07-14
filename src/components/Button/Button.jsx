import "./Button.css";

export default function Button({ children, handleClick }) {
  console.log(children);
  return (
    <button className="btn" onClick={handleClick}>
      {children}
    </button>
  );
}
