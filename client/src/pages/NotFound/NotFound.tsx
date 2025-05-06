import { Link } from "react-router-dom";
import "./NotFound.css";

function NotFound() {
  return (
    <div>
      <section>
        <h1 className="error_title">404 Not Found !</h1>
        <Link to="/">
          <h2 className="error_second_title">Go home</h2>
        </Link>
      </section>
    </div>
  );
}

export default NotFound;
