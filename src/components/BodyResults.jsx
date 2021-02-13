import React from 'react'
import FinishedMatches from "./FinishedMatches.jsx";
import ScheduledMatches from "./ScheduledMatches.jsx";

function BodyResults(props) {
    const {
        scheduledMatches,
        finishedMatches,
        // nameLeague
    } = props;
    const nameLeague = JSON.parse(localStorage.getItem('name_league'))

    const showFirstFinishedMatches = () => {
        let elems = finishedMatches.length - 16;
        return (finishedMatches.length <= 16) ? finishedMatches : finishedMatches.slice(elems)
    };

    const showFirstScheduledMatches = () => {
        return (scheduledMatches.length >= 16) ? scheduledMatches.slice(0, 16) : scheduledMatches
    }

    return(
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
                            {nameLeague.nameLeagueName}
                        </div>
                        <div className="league-statistics__item">
                            {showFirstFinishedMatches().map(({
                                                                 awayTeam, homeTeam, id, utcDate, score,
                                                             }) => (
                                <FinishedMatches
                                    awayTeam={awayTeam}
                                    homeTeam={homeTeam}
                                    key={id}
                                    utcDate={utcDate}
                                    score={score}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            {scheduledMatches.length !== 0 && <div className="latter-result scheduled-mathes">
                <div className="tabs-body">
                    <div className="tabs-text">
                        <span>Предстоящие матчи</span>
                    </div>
                </div>
                <div className="league-statistics">
                    <div className="league-statistics__body">
                        <div className="league-statistics__header">
                            {nameLeague.nameLeagueName}
                        </div>
                        <div className="league-statistics__item">
                            {showFirstScheduledMatches().map(({awayTeam, homeTeam, id, utcDate, score}) => {
                                return (
                                    <ScheduledMatches
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
            </div>}
        </div>
    )
}

export default BodyResults