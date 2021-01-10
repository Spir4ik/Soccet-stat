import React, {useState, useEffect} from 'react'
import axios from 'axios';
import moment from "moment";
import ListCurrentLeague from "./ListCurrentLeague.jsx";


function LeaguePage() {
    const [finishedMatches, setFinishedMatches] = useState([]);
    const [scheduledMatches, setScheduledMatches] = useState([]);

    useEffect(async () => {
        try {
           await axios({
                url: `https://api.football-data.org/v2/competitions/2001/matches?status=SCHEDULED`,
                method: 'GET',
                headers: {
                    'X-Auth-Token': '31da4377f6bd472d89c5c79443bfb5db',
                    'Content-type': 'application/json',
                }
            }).then(res => setScheduledMatches(res.data.matches))
        }
        catch(e) {
            alert(`Что то пошло не так! ${e}`)
        }
    }, [])


    console.log(scheduledMatches);
    return(
        <React.Fragment>
            <ListCurrentLeague scheduledMatches={scheduledMatches}/>
        </React.Fragment>
    )
}

export default LeaguePage