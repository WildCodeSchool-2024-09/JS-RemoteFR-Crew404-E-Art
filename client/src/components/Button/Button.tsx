import "./Button.css";

type ButtonProps = {
  name: string;
};

function Button({ name }: ButtonProps) {
  return (
    <button className="main-button" type="button">
      {name}
    </button>
  );
}

export default Button;
