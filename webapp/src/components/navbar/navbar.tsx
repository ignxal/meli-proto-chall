import "./navbar.css";

import logo from "../../assets/logo.png";

import useWindowWidth from "../../hooks/use-window-width";

import { AiOutlineSearch } from "react-icons/ai";

import { GiHamburgerMenu } from "react-icons/gi";

import { HiOutlineLocationMarker, HiOutlineShoppingCart } from "react-icons/hi";

import { MdKeyboardArrowDown, MdKeyboardArrowRight } from "react-icons/md";

const Navbar = () => {
  const width = useWindowWidth();

  return (
    <nav className={"nav-navbar"}>
      {width > 1200 ? (
        <div className="main-container">
          <div className="navbar-search-container">
            <img
              src={logo}
              alt="Logo de Mercado Libre: apreton de manos con texto mercado libre"
              style={{ cursor: "pointer" }}
            />

            <div className="search-input-container">
              <input
                type="text"
                className="search-input"
                placeholder="Buscar productos, marcas y m&aacute;s..."
              />
              <AiOutlineSearch className="search-icon" />
            </div>

            <div className="free-shipping">
              <img
                src="https://http2.mlstatic.com/D_NQ_779354-MLA82788204133_022025-OO.webp"
                alt="Env&iacute;o gratis en tu primera compra en Mercado Libre."
                style={{ cursor: "pointer" }}
              />
            </div>
          </div>

          <div className="navbar-main-container">
            <div className="navbar-shipping-and-buttons">
              <div className="shipping-address">
                <HiOutlineLocationMarker className="address-icon" />
                <div>
                  <p className="send-to">Enviar a</p>
                  <p className="address">Capital Federal</p>
                </div>
              </div>

              <div className="navbar-buttons">
                <button>
                  Categor&iacute;as
                  <MdKeyboardArrowDown className="arrow-categoriesBtn" />
                </button>
                <button>Ofertas</button>
                <button>Cupones</button>
                <button>Supermercado</button>
                <button>Moda</button>
                <button>Mercado Play</button>
                <button>Vender</button>
                <button>Ayuda</button>
              </div>
            </div>

            <div className="navbar-buttons-account">
              <button>Cre&aacute; tu cuenta</button>
              <button>Ingres&aacute;</button>
              <button>Mis compras</button>
              <HiOutlineShoppingCart className="cart-icon" />
            </div>
          </div>
        </div>
      ) : (
        <div>
          <div className="navbar-mobile-main-container">
            <img
              src={logo}
              alt="Logo de Mercado Libre: apreton de manos"
              style={{ cursor: "pointer" }}
              width={80}
            />

            <div className="search-input-container-mobile">
              <AiOutlineSearch className="search-icon-mobile" />
              <input
                type="text"
                className="search-input-mobile"
                placeholder="Estoy buscando..."
              />
            </div>

            <GiHamburgerMenu className="mobile-top-icon" />

            <HiOutlineShoppingCart className="mobile-top-icon" />
          </div>

          <div className="navbar-mobile-shipping">
            <div className="shipping-address-mobile">
              <div className="address-mobile">
                <HiOutlineLocationMarker />
                <p className="address">Enviar a Capital Federal</p>
              </div>

              <MdKeyboardArrowRight />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
