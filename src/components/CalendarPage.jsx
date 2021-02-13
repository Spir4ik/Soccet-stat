import React, {useState} from 'react'
import ScheduledMatches from "./ScheduledMatches.jsx";
import FormsFilters from "./FormsFilters.jsx";

function CalendarPage(props) {
    const {scheduledMatches,
        nameLeague,
        firstMatchesDate,
        lastMatchesDate} = props;

    const [testArray, setTestArray] = useState([])

    const updateArray = (array) => {
        setTestArray(array)
    }

    return(
        <div className="body__results">
            <div className="latter-result only-result">
                <FormsFilters
                    arraysMatches={scheduledMatches}
                    updateArray={updateArray}
                    firstMatchesDate={firstMatchesDate}
                    lastMatchesDate={lastMatchesDate}
                />
                <div className="league-statistics">
                    <div className="league-statistics__body">
                        <div className="league-statistics__header">
                            {JSON.parse(localStorage.getItem('name_league')).nameLeagueName}
                        </div>
                        <div className="league-statistics__item">
                            {testArray.length === 0 ? scheduledMatches.map(({awayTeam, homeTeam, id, utcDate, score,}) => (
                                <ScheduledMatches
                                    awayTeam={awayTeam}
                                    homeTeam={homeTeam}
                                    key={id}
                                    utcDate={utcDate}
                                    score={score}
                                />
                            )) : testArray.map(({awayTeam, homeTeam, id, utcDate, score,}) => (
                                <ScheduledMatches
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

export default CalendarPage