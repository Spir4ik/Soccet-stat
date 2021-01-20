import React, {useState} from 'react'
import { Link } from "react-router-dom";

function LeagueNav() {
    const [showOverview, setShowOverview] = useState(true);
    const [showResults, setShowResults] = useState(false);
    const [showCalendar, setShowCalendar] = useState(false);

    return(
        <div className="league__nav">
            <div className={showOverview ? "nav__item first" : "nav__item"} onClick={() => {
                setShowOverview(true)
                setShowResults(false)
                setShowCalendar(false)
            }}>
                <p>Обзор</p>
            </div>
            <div className={showResults ? "nav__item first" : "nav__item"} onClick={() => {
                setShowOverview(false)
                setShowResults(true)
                setShowCalendar(false)
            }}>
                <p>Результаты</p>
            </div>
            <div className={showCalendar ? "nav__item first" : "nav__item"} onClick={() => {
                setShowOverview(false)
                setShowResults(false)
                setShowCalendar(true)
            }}>
                <p>Календарь</p>
            </div>
        </div>
    )
}

export default LeagueNav