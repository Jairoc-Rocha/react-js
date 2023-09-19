import "./Header.css";

export default function Header({ children }) {
  return (
    <header>
      <div className="container">
        <h1>{children}</h1>
      </div>
    </header>
  );
}
