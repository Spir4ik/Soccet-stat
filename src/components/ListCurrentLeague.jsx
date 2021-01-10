import React from 'react'
import ScheduledMatches from "./ScheduledMatches.jsx";

function ListCurrentLeague(props) {
    const {scheduledMatches} = props

    return(
        <div className="league">
            <div className="container">
                <div className="league__row">
                    <div className="league__header">
                        <div className="header__logo">
                            <img src="../image/logo_cl.png" alt=""/>
                        </div>
                        <div className="header__info">
                            <span>Лига чемпионов</span>
                            <p>2020 / 2021</p>
                        </div>
                    </div>
                    <div className="league__nav">
                        <div className="nav__item first">
                            <a href="#">Обзор</a>
                        </div>
                        <div className="nav__item">
                            <a href="#">Результаты</a>
                        </div>
                        <div className="nav__item">
                            <a href="#">Календарь</a>
                        </div>
                    </div>
                    <div className="league__body">
                        <div className="body__results">
                            <div className="latter-result">
                                <div className="tabs-body">
                                    <div className="tabs-text">
                                        <span>Последние результаты</span>
                                    </div>
                                </div>
                                <div className="league-statistics">
                                    <div className="league-statistics__body">
                                        <div className="league-statistics__header">
                                            Какой то там тур
                                        </div>
                                        <div className="league-statistics__item">
                                            <div className="league-statistics__element">
                                                <div className="league-statistics__date">
                                                    09.09/1242
                                                </div>
                                                <div className="league-statistics__matches">
                                                    Бавария 0-2 Атлетико
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="latter-result scheduled-mathes">
                                <div className="tabs-body">
                                    <div className="tabs-text">
                                        <span>Предстоящие матчи</span>
                                    </div>
                                </div>
                                <div className="league-statistics">
                                    <div className="league-statistics__body">
                                        <div className="league-statistics__header">
                                            Тур...
                                        </div>
                                        <div className="league-statistics__item">
                                            {props.scheduledMatches.map(({awayTeam, homeTeam, id, utcDate, stage}) => {
                                                return(
                                                    <ScheduledMatches
                                                        awayTeam={awayTeam}
                                                        homeTeam={homeTeam}
                                                        key={id}
                                                        utcDate={utcDate}
                                                        stage={stage}
                                                    />
                                                )
                                            })}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ListCurrentLeague