import React from "react";
import styles from "./TopMenu.module.scss";
import { Link } from 'react-scroll';
import Hamburger from "./TopMenuHamburger";


class TopMenu extends React.Component {

  state = {
    displayMobileMenu: false,
    width: 0,
    height: 0,
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions = () => {
    this.setState({width: window.innerWidth, height: window.innerHeight});
    if (window.innerWidth >= 768) {this.setState({displayMobileMenu: false})};
  }

  openMobileMenu = (e) => {
    this.setState({
      displayMobileMenu: !this.state.displayMobileMenu,
    });
    e.preventDefault();
  };

  render() {

    return (
      <>
        <ul className={styles.topMenuWrapper}>
          { !this.state.displayMobileMenu && this.state.width < 768 &&
            <Hamburger className={styles.topMenuHamburger} openMobileMenu={this.openMobileMenu} isOpen={this.state.displayMobileMenu}/>
          }
          { this.state.displayMobileMenu && this.state.width < 768 &&
            <Hamburger className={styles.topMenuHamburger} openMobileMenu={this.openMobileMenu} isOpen={this.state.displayMobileMenu}/>
          }
          { ((this.state.width >= 768) || ((this.state.width < 768 && this.state.displayMobileMenu))) &&
          <>
          <li>
            <Link to='inwestycja' spy={true} hashSpy={true} smooth={true} duration={500} className={styles.topMenuItem} activeClass={styles.topMenuItemActive}>Inwestycja</Link>
          </li>
          <li>
            <Link to='lokalizacja' spy={true} hashSpy={true} smooth={true} duration={500} className={styles.topMenuItem} activeClass={styles.topMenuItemActive}>Lokalizacja</Link>
          </li>
          <li>
            <Link to='mieszkania' spy={true} hashSpy={true} smooth={true} duration={500} className={styles.topMenuItem} activeClass={styles.topMenuItemActive}>Mieszkania</Link>
          </li>
          <li>
            <Link to='inwestor' spy={true} hashSpy={true} smooth={true} duration={500} className={styles.topMenuItem} activeClass={styles.topMenuItemActive}>Inwestor</Link>
          </li>
          <li>
            <Link to='kontakt' spy={true} hashSpy={true} smooth={true} duration={500} className={styles.topMenuItem} activeClass={styles.topMenuItemActive}>Kontakt</Link>
          </li>
        </>
        }
        </ul>
      </>
    );
  }
};

export default TopMenu;