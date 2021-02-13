import React, {useState, useEffect} from 'react';
import axios from 'axios';
import BodyResults from "./BodyResults.jsx";
import LeagueNav from "./LeagueNav.jsx";

function ListTeamMatches() {
    const [finishedMatches, setFinishedMatches] = useState([]);
    const [scheduledMatches, setScheduledMatches] = useState([]);

    useEffect(async () => {
        const selectTeam = JSON.parse(localStorage.getItem('selectTeam'))
        const nameLeague = JSON.parse(localStorage.getItem('name_league'))
        try {
            await axios({
                url: `https://api.football-data.org/v2/teams/${selectTeam.numberTeamId}/matches?status=SCHEDULED`,
                method: 'GET',
                headers: {
                    'X-Auth-Token': '31da4377f6bd472d89c5c79443bfb5db',
                    'Content-type': 'application/json',
                }
            }).then(res => {
                setScheduledMatches(res.data.matches.filter(item =>
                    (item.competition.id === parseInt(nameLeague.numberLeagueId)) ? item : null))
            })

            await axios({
                url: `https://api.football-data.org/v2/teams/${selectTeam.numberTeamId}/matches?status=FINISHED`,
                method: 'GET',
                headers: {
                    'X-Auth-Token': '31da4377f6bd472d89c5c79443bfb5db',
                    'Content-type': 'application/json',
                }
            }).then(res => {
                setFinishedMatches(res.data.matches.filter(item =>
                    (item.competition.id === parseInt(nameLeague.numberLeagueId)) ? item : null))
            })
        } catch(e) {
            alert(`Что то пошло не так! ${e}`)
        }
    }, [])

    return(
        <React.Fragment>
            <LeagueNav />
            <div className="league__body">
                <BodyResults
                    finishedMatches={finishedMatches}
                    scheduledMatches={scheduledMatches}
                />
            </div>
        </React.Fragment>
    )
}

export default ListTeamMatches