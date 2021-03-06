import React, {useState, useEffect} from 'react'
import axios from 'axios';
import {useSelector} from "react-redux";
import OnlyResults from "./OnlyResults.jsx";
import LeagueNav from "./LeagueNav.jsx";
import AsyncCallsMatches from "./Async_calls/AsyncCallsMatches.js";

function ListFinishedMatches() {
    const [finishedMatches, setFinishedMatches] = useState([]);
    const [firstMatchesDate, setFirstMatchesDate] = useState('')
    const [lastMatchesDate, setLastMatchesDate] = useState('')


    const yearSeason = useSelector(state => state.yearSeason);

    useEffect(async () => {
        const nameLeague = JSON.parse(localStorage.getItem('name_league'))
        try {
            await axios(AsyncCallsMatches(
                nameLeague.numberLeagueId,
                yearSeason,
                "FINISHED",
                "competitions",
                "matches")
            )
            .then(res => {
                const lastElem = res.data.matches.length - 1
                setFinishedMatches(res.data.matches)
                setFirstMatchesDate(new Date(res.data.matches[0].utcDate))
                setLastMatchesDate(new Date(res.data.matches[lastElem].utcDate))
            })
        }
        catch(e) {
            localStorage.setItem("errorConnect", JSON.stringify({
                errorName: e.name,
                errorMessage: e.message
            }))
            window.location.replace("#/error")
        }
    }, [yearSeason])

    return(
        <React.Fragment>
            <LeagueNav />
            <div className="league__body">
                <OnlyResults
                    finishedMatches={finishedMatches}
                    firstMatchesDate={firstMatchesDate}
                    lastMatchesDate={lastMatchesDate}
                />
            </div>
        </React.Fragment>
    )
}

export default ListFinishedMatches