import React, {useState, useEffect} from 'react'
import axios from 'axios';
import {useSelector} from "react-redux";
import OnlyResults from "./OnlyResults.jsx";
import LeagueNav from "./LeagueNav.jsx";

function ListFinishedMatches() {
    const [finishedMatches, setFinishedMatches] = useState([]);
    const [firstMatchesDate, setFirstMatchesDate] = useState('')
    const [lastMatchesDate, setLastMatchesDate] = useState('')


    const yearSeason = useSelector(state => state.yearSeason);

    useEffect(async () => {
        const nameLeague = JSON.parse(localStorage.getItem('name_league'))
        try {
            await axios({
                url: `https://api.football-data.org/v2/competitions/${nameLeague.numberLeagueId}/matches?status=FINISHED&season=${yearSeason}`,
                method: 'GET',
                headers: {
                    'X-Auth-Token': '31da4377f6bd472d89c5c79443bfb5db',
                    'Content-type': 'application/json',
                }
            }).then(res => {
                const lastElem = res.data.matches.length - 1
                setFinishedMatches(res.data.matches)
                setFirstMatchesDate(new Date(res.data.matches[0].utcDate))
                setLastMatchesDate(new Date(res.data.matches[lastElem].utcDate))
            })
        }
        catch(e) {
            alert(`Что то пошло не так! ${e}`)
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