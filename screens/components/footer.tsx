import styles from "../../styles/Home.module.css";
import { BaseFooter, FooterSpan } from "./footer.styled";

function Footer() {
  return (
    <BaseFooter>
      <a
        target="_blank"
        href="https://giphy.com/gifs/conor-mcgregor-floyd-mayweather-showmax-sUdILQgcIAe2I/fullscreen"
      >
        Powered by <FooterSpan>TMT OLX Group</FooterSpan>
      </a>
    </BaseFooter>
  );
}

export default Footer;
