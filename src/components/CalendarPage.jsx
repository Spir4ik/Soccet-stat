import React from 'react'
import ScheduledMatches from "./ScheduledMatches.jsx";

function CalendarPage(props) {
    const {scheduledMatches, nameLeague} = props;

    return(
        <div className="body__results">
            <div className="latter-result">
                <div className="league-statistics">
                    <div className="league-statistics__body">
                        <div className="league-statistics__header">
                            {nameLeague}
                        </div>
                        <div className="league-statistics__item">
                            {scheduledMatches.map(({awayTeam, homeTeam, id, utcDate, score}) => {
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
            </div>
        </div>
    )
}

export default CalendarPage