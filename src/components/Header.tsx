import ThemeSwitcher from "./ThemeSwitcher";

function Header() {
  return (
    <header className='header'>
      <h1 className='header__title'>Gestionador de Contactos</h1>
      <ThemeSwitcher />{" "}
    </header>
  );
}

export default Header;
