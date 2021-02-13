import React from 'react'
import { Link } from "react-router-dom";
import {useSelector} from "react-redux";

function LeagueNav() {
    const yearSeason = useSelector(state => state.yearSeason);
    return(
        <div className="league__nav">
            <div className={window.location.href.includes('/results') || window.location.href.includes('/calendar') ? "nav__item" :
                window.location.href.includes('/Team_Calendar/') ? "nav__item first_disabled first" : "nav__item first"
            }>
                <Link to="/listleague">Обзор</Link>
            </div>
            <div className={window.location.href.includes('/results') ? "nav__item first" :
                window.location.href.includes('/Team_Calendar/') ? "nav__item disabled" : "nav__item"
            }>
                <Link to="/listleague/results">Результаты</Link>
            </div>
            <div className={window.location.href.includes('/calendar') ? "nav__item first" :
                window.location.href.includes('/Team_Calendar/') ? "nav__item disabled" : "nav__item"
            }>
                {(yearSeason === '2020') ? <Link to="/listleague/calendar">Календарь</Link> : <p>Календарь</p>}
            </div>
        </div>
    )
}

export default LeagueNav