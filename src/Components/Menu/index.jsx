import React from 'react';
import logo from '../../assets/images/logo.png';
import './menu.css';

// import ButtonLink from './Components/ButtonLink';
import Button from '../../Components/Button';

const Menu = () => {
  return (
    <header className="Menu">
      <img src={logo} alt="Kittyflix" className="Logo" />
      <nav>
        {/* <ButtonLink href="/novo-video">Novo vídeo</ButtonLink> */}
        <Button as="a" href="/novo-video">
          Novo vídeo
        </Button>
      </nav>
    </header>
  );
};

export default Menu;
