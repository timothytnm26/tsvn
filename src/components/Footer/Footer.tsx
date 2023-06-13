import TSVNLogo from "../TSVNLogo";
import "./styles.css";
export function Footer({ title = "" }) {
  return (
    <footer>
      <a href="/" rel="noreferrer">
        <TSVNLogo />
      </a>
      <a href="/" rel="noreferrer">
        <code>{title}</code>
      </a>
    </footer>
  );
}
