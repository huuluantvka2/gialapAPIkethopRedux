import React, { Component } from 'react';
import Menu from './Menu';
import Slides from './Slides';
class Header extends Component {
    render() {
        return (
            <header>
          {/*Navbar */}
          <Menu />
          {/* slider */}
          <Slides />
          {/* end slider */}
          {/*/.Navbar */}
        </header>
        );
    }
}

export default Header;