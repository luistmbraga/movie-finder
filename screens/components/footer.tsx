import styles from "../../styles/Home.module.css";
import { BaseFooter } from "./footer.styled";

function Footer() {
  return (
    <BaseFooter>
      <a>
        Powered by{" "}
        <span className={styles.logo} style={{ fontWeight: "bold" }}>
          TMT OLX Group
        </span>
      </a>
    </BaseFooter>
  );
}

export default Footer;
