import React, {useState, useEffect} from 'react'
import axios from 'axios';
import {useSelector, useDispatch} from "react-redux";
import ListCurrentLeague from "./ListCurrentLeague.jsx";
import * as actions from '../actions';


function LeaguePage() {
    const [finishedMatches, setFinishedMatches] = useState([]);
    const [scheduledMatches, setScheduledMatches] = useState([]);
    const dispatch = useDispatch();


    const numberLeagueId = useSelector(state => state.numberLeague.numberLeagueId);
    const numberLeagueImg = useSelector(state => state.numberLeague.numberLeagueImg);
    const yearSeason = useSelector(state => state.yearSeason);
    const nameLeague = useSelector(state => state.numberLeague.nameLeague);
    const loadStatusScheduled = useSelector(state => state.loadStatusScheduled);
    const loadStatusFinished = useSelector(state => state.loadStatusFinished);


    useEffect(async () => {
        try {
           await axios({
                url: `https://api.football-data.org/v2/competitions/${numberLeagueId}/matches?season=${yearSeason}`,
                method: 'GET',
                headers: {
                    'X-Auth-Token': '31da4377f6bd472d89c5c79443bfb5db',
                    'Content-type': 'application/json',
                }
            }).then(res => {
               setFinishedMatches(res.data.matches);
               setScheduledMatches(res.data.matches.filter(item => (item.status.includes("SCHEDULED")) ? item : null))
               dispatch(
                    actions.getLoadStatusScheduled({loadStatusScheduled: false})
               )
            })

            // await axios({
            //     url: `https://api.football-data.org/v2/competitions/${numberLeagueId}/matches?status=FINISHED&season=${yearSeason}`,
            //     method: 'GET',
            //     headers: {
            //         'X-Auth-Token': '31da4377f6bd472d89c5c79443bfb5db',
            //         'Content-type': 'application/json',
            //     }
            // }).then(res => {
            //     setFinishedMatches(res.data.matches)
            //     dispatch(
            //         actions.getLoadStatusFinished({loadStatusFinished: false})
            //     )
            // })
        }
        catch(e) {
            alert(`Что то пошло не так! ${e}`)
        }
    }, [yearSeason])

    console.log(scheduledMatches);

    return(
        <React.Fragment>
            <ListCurrentLeague
                scheduledMatches={scheduledMatches}
                finishedMatches={finishedMatches}
                numberLeagueImg={numberLeagueImg}
                yearSeason={yearSeason}
                nameLeague={nameLeague}
            />
        </React.Fragment>
    )
}

export default LeaguePage