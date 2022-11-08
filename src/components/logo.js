/** @jsx jsx */
import { jsx, Image } from "theme-ui";
import { Link } from "components/link";
import logo from "assets/images/Slettheiaskolelogo2.svg";
import logoWhite from "assets/images/Slettheiaskolelogo2white.svg";

export default function Logo({ isWhite, ...props }) {
  return (
    <Link path="/" sx={styles.logo} {...props}>
      <Image
        width="110"
        height="32"
        src={isWhite ? logoWhite : logo}
        alt="Slettheia Skole Logo"
      />
    </Link>
  );
}
const styles = {
  logo: {
    alignItems: "center",
    cursor: "pointer",
    display: "inline-flex",
    img: {
      maxWidth: [150, "100%"],
    },
  },
};
