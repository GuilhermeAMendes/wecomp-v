import useIsMobile from "../../hooks/useIsMobile";
import DefaultMenu from "./DefaultMenu";
import DropdownMenu from "./DropDownNav";
import styles from "./Nav.module.css";

export default function NavBar() {
  const isMobile = useIsMobile();

  return <nav className={styles.navbar}>{isMobile ? <DropdownMenu /> : <DefaultMenu />}</nav>;
}
