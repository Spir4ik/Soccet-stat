import React, {useState} from 'react'
import FinishedMatches from "./FinishedMatches.jsx";
import FormsFilters from "./FormsFilters.jsx";

function OnlyResults(props) {
    const {finishedMatches,
        nameLeague,
        firstMatchesDate,
        lastMatchesDate
    } = props;

    const [newFinishedArray, setNewFinishedArray] = useState([])

    const updateArray = (array) => {
        setNewFinishedArray(array)
    }

    return(
        <div className="body__results">
            <div className="latter-result only-result">
                <FormsFilters
                    arraysMatches={finishedMatches}
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
                            {newFinishedArray.length === 0 ? finishedMatches.map(({awayTeam, homeTeam, id, utcDate, score,}) => (
                                <FinishedMatches
                                    awayTeam={awayTeam}
                                    homeTeam={homeTeam}
                                    key={id}
                                    utcDate={utcDate}
                                    score={score}
                                />
                            )) : newFinishedArray.map(({awayTeam, homeTeam, id, utcDate, score,}) => (
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