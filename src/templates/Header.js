import ImgLogoPokemon from '../assets/images/logoPokemon.png'
import ImgTiktok from '../assets/images/logoTiktok.png'
import ImgInstagram from '../assets/images/logoInstagram.png'


const Header = () => {
  const view = `
    <div class="Header-main">

      <div class="Header-logo">
        <a href="/">
        <img src="${ImgLogoPokemon}" alt="imagen logo palabra pokemon"></a>
      </div>

      <div class="Header-nav">
        <a href="https://www.instagram.com/oatad59/">
          <img class="Img-instagram" src="${ImgInstagram}" alt="imagen logo instagram">
        </a>

        <a href="https://www.tiktok.com/@el_david_v">
          <img class="Img-tiktok" src="${ImgTiktok}" alt="imagen logo tiktok">
        </a>
      </div>

    </div>
  `;
  return view;
};

export default Header;