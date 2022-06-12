import React from 'react';
import style from './style.module.scss';
import logo from '../../../assets/logo-icon/logo-icon.png';
import search from '../../../assets/logo-icon/white-search-icon.png';


const Header = () => {
    return (
        <header className={style.header}>
            <div className='container'>
                <div className={style.content}>
                    <div className={style.headerLogo}>
                        <img src={logo} alt="logo" className="logo-image" />
                    </div>
                    <div className={style.headerMenu}>
                        <ul className={style.menuList}>
                            <li className={style.menuItem}>
                                Discover
                            </li>
                            <li className={style.menuItem}>
                                Job
                            </li>
                        </ul>
                    </div>
                    <div className={style.headerSearch}>
                        <span className={style.searchText}>
                            Search for motion trend......
                        </span>
                    </div>
                    <div className={style.headerAction}>
                        <ul className={style.menuAction}>
                            <li className={style.actionItem}>
                                <img src={search} alt="search" className="white_search_icon" />
                            </li>
                            <li className={style.actionItem}>
                                Login
                            </li>
                            <li className={style.actionItem}>
                                Sign up
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header