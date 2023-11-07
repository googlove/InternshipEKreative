import styles from "./Header.module.scss";

const Header = ({className}) => (
  <header className={`${className} ${styles.main_header}`}>
    <h2>🔊SoundPaletteCode</h2>
      <p>🔉Копіюй колір, відтворюй звук</p>
  </header>
);

export default Header;
