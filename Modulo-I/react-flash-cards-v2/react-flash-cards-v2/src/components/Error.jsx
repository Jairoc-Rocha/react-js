import "./Error.css";

export default function Error({ children: errorMessage }) {
  return <span className="error-container">{errorMessage}</span>;
}
