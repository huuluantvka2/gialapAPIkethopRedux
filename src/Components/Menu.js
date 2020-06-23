import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
const MenuLink = ({ to, activeOnlyWhenExact, label }) => {
    return (
        <Route path={to} exact={activeOnlyWhenExact} children={({ match }) => {
            var active = match ? 'active-bg' : '';
            return (
                <li className={`nav-item ${active}`}>
                    <Link className="nav-link padding-menu" to={to}>{label}</Link>
                </li>
            )
        }} />
    );
};
const menus = [
    {
        label: 'Trang chủ',
        to: '/',
        exact: true,
    },
    {
        label: 'Giỏ hàng',
        to: '/cart',
        exact: false,
    },
    {
        label: 'Đăng sản phẩm',
        to: '/upload-product',
        exact: false,
    },
]
class Menu extends Component {
    render() {
        return (
            <nav className="mb-1 navbar navbar-expand-lg navbar-light bg-menu">
                <a className="navbar-brand px-3" href="/">TheGioiDienThoai</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent-555" aria-controls="navbarSupportedContent-555" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent-555">
                    <ul className="navbar-nav m-auto">
                        {this.showMenus(menus)}
                    </ul>
                    <ul className="navbar-nav ml-auto nav-flex-icons px-3">
                        <li className="nav-item avatar">
                            <a className="nav-link p-0" href="https://www.facebook.com/huuluantvk/">
                                <img src="./img/profile.jpg" className="rounded-circle z-depth-0" alt="" height={35} />
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
    showMenus = (menus) => {
        var result = null;
        if(menus.length>0){
            result = menus.map((menu,index) =>{
                return <MenuLink key={index} to={menu.to} activeOnlyWhenExact={menu.exact} label={menu.label} />
            })
        }
        return result;
    };
}

export default Menu;