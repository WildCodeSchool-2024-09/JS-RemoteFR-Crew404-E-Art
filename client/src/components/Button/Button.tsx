import "./Button.css";

type ButtonProps = {
  name: string;
  type?: "button" | "submit" | "reset";
  ownStyle?: string;
};

function Button({ name, type, ownStyle }: ButtonProps) {
  return (
    <button className={`main-button ${ownStyle}`} type={type}>
      {name}
    </button>
  );
}

export default Button;
