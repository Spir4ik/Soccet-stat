import React from 'react'
import FinishedMatches from "./FinishedMatches.jsx";

function OnlyResults(props) {
    const {finishedMatches, nameLeague} = props;

    const showFirstFinishedMatches = () => {
        return finishedMatches.filter(item => (item.status.includes("FINISHED")) ? item : null)
    };

    return(
        <div className="body__results">
            <div className="latter-result">
                <div className="league-statistics">
                    <div className="league-statistics__body">
                        <div className="league-statistics__header">
                            {nameLeague}
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
        </div>
    )
}

export default OnlyResults