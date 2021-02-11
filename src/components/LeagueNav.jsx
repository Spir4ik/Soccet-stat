import React from 'react'
import { Link } from "react-router-dom";

function LeagueNav() {
    return(
        <div className="league__nav">
            <div className={window.location.href.includes('/results') || window.location.href.includes('/calendar') ? "nav__item" : "nav__item first"}>
                <Link to="/listleague">Обзор</Link>
            </div>
            <div className={window.location.href.includes('/results') ? "nav__item first" : "nav__item"}>
                <Link to="/listleague/results">Результаты</Link>
            </div>
            <div className={window.location.href.includes('/calendar') ? "nav__item first" : "nav__item"}>
                <Link to="/listleague/calendar">Календарь</Link>
            </div>
        </div>
    )
}

export default LeagueNav