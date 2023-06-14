import styled from "styled-components";
import "./styles.css";
import { FB, IG } from "./Icons";
const Social = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export function Footer() {
  return (
    <footer>
      <span>© Taylor Swift Vietnam</span>
      <Social>
        <a href="https://www.facebook.com/erasTSVN" target="_blank">
          <FB />
        </a>
        <a href="https://www.instagram.com/taylor.vietnam/" target="_blank">
          <IG />
        </a>
      </Social>
    </footer>
  );
}
