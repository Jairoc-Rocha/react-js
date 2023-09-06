import { sanitizedBackend } from "../api/api";
import "./Main.css";

export default function Main() {
  return (
    <main className="container-main">
      <pre>
        <code>{JSON.stringify(sanitizedBackend, null, 2)}</code>
      </pre>
    </main>
  );
}
