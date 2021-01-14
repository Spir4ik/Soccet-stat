import React from 'react'
import ScheduledMatches from "./ScheduledMatches.jsx";
import FinishedMatches from "./FinishedMatches.jsx";
import {useSelector} from "react-redux";

function ListCurrentLeague(props) {
    const {scheduledMatches, finishedMatches, numberLeagueImg, yearSeason, nameLeague} = props;

    const ConclusionMatches = () => {
        const LastElems = finishedMatches.length - 16;
        return finishedMatches.splice(LastElems)
    }

    const currentSeason = () => {
        switch (yearSeason) {
            case "2020":
                return "2020 / 2021"
            case "2019":
                return "2019 / 2020"
            case "2018":
                return "2018 / 2019"
            case "2017":
                return "2017 / 2018"
            default:
                return null
        }
    }

    // console.log(finishedMatches.filter(item => item.stage.includes("GROUP_STAGE") ? item : null))


    return(
        <div className="league">
            <div className="container">
                <div className="league__row">
                    <div className="league__header">
                        <div className="header__logo">
                            <img src={numberLeagueImg} alt=""/>
                        </div>
                        <div className="header__info">
                            <span>{nameLeague}</span>
                            <p>{currentSeason()}</p>
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
                                            {ConclusionMatches().map(({awayTeam, homeTeam, id, utcDate, score}) => {
                                                return(
                                                    <FinishedMatches
                                                        awayTeam={awayTeam}
                                                        homeTeam={homeTeam}
                                                        key={id}
                                                        utcDate={utcDate}
                                                        score={score}
                                                    />
                                                )
                                            })}
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