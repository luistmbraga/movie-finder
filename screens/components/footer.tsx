import styles from "../../styles/Home.module.css";
import { BaseFooter, FooterSpan } from "./footer.styled";

function Footer() {
  return (
    <BaseFooter>
      <a
        target="_blank"
        href="https://giphy.com/gifs/showtimesports-showtime-boxing-3o6nVbe6wVgh3LkRkA/fullscreen"
      >
        Powered by <FooterSpan>TMT OLX Group</FooterSpan>
      </a>
    </BaseFooter>
  );
}

export default Footer;
