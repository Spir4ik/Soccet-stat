import React, { useState } from 'react'
import {Link} from "react-router-dom";
import cn from 'classnames'


function Header() {
    const [showBurger, setShowBurger] = useState(false);

    const classesForHeader = cn({
        "header__burger": true,
        "active": showBurger
    })

    const classesForHeaderMenu = cn({
        "header__menu": true,
        "active": showBurger
    })

    return(
        <>
            <header className="header">
                <div className="container">
                    <div className="header__body">
                        <a href="#" className="header__logo">
                            SOCCER STAT
                        </a>
                        <div className={classesForHeader} onClick={() => setShowBurger(!showBurger)}>
                            <span></span>
                        </div>
                        <nav className={classesForHeaderMenu}>
                            <ul className="header__list">
                                <li><Link to="/" className="header__link">Список лиг</Link></li>
                                {/*<li><a href="#" className="header__link">Список команд</a></li>*/}
                                {/*<li><a href="#" className="header__link">Календарь лиги</a></li>*/}
                                <li><Link to="/listleague/Team_Calendar" className="header__link">Календарь одной команды</Link></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header

