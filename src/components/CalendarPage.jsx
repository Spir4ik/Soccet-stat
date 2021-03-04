import React, {useState} from 'react'
import ScheduledMatches from "./ScheduledMatches.jsx";
import FormsFilters from "./FormsFilters.jsx";

function CalendarPage(props) {
    const {scheduledMatches,
        firstMatchesDate,
        lastMatchesDate} = props;
    const [newScheduledArray, setNewScheduledArray] = useState([])

    // useEffect(() => {
    //     localStorage.removeItem("paramUrlName")
    //     window.history.pushState({}, document.title, "/" + "#/listleague/calendar")
    // }, [])

    const updateArray = (array) => {
        setNewScheduledArray(array)
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
                            {newScheduledArray.length === 0 ? scheduledMatches.map(({awayTeam, homeTeam, id, utcDate, score,}) => (
                                <ScheduledMatches
                                    awayTeam={awayTeam}
                                    homeTeam={homeTeam}
                                    key={id}
                                    utcDate={utcDate}
                                    score={score}
                                />
                            )) : newScheduledArray.map(({awayTeam, homeTeam, id, utcDate, score,}) => (
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