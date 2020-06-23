import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <footer className="page-footer font-small bg-menu mt-4">
            {/* Copyright */}
            <div className="footer-copyright text-center py-3">
              © 2020 GunnersKma:
              <a href="https://mdbootstrap.com/"> GunnersKma.best</a>
            </div>
            {/* Copyright */}
          </footer>
        );
    }
}

export default Footer;