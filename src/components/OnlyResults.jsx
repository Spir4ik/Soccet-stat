import React, {useState} from 'react'
import FinishedMatches from "./FinishedMatches.jsx";
import FormsFilters from "./FormsFilters.jsx";
import iconError from '../assets/icon-error.svg'

function OnlyResults(props) {
    const {finishedMatches,
        firstMatchesDate,
        lastMatchesDate
    } = props;
    const [newFinishedArray, setNewFinishedArray] = useState([])
    const [showNotItemDiv, setShowNotItemDiv] = useState("none")

    const updateArray = (array) => {
        setTimeout(() => array.length === 0 ? setShowNotItemDiv("flex") : setShowNotItemDiv("none"), 1000)
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
                            {!window.location.search ?
                                finishedMatches.map(({awayTeam, homeTeam, id, utcDate, score,}) => (
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
                            ))
                            }
                            {localStorage.getItem("paramUrlName") && <div className="league-statistics__not-found"
                                 style={{display: showNotItemDiv}}
                            >
                                <img src={iconError} alt="" />
                                <p> Команды не найдены </p>
                            </div>}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OnlyResults