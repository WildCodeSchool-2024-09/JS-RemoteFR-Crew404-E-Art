import "./Button.css";

type ButtonProps = {
  name: string;
  type?: "button" | "submit" | "reset";
};

function Button({ name, type }: ButtonProps) {
  return (
    <button className="main-button" type={type}>
      {name}
    </button>
  );
}

export default Button;
