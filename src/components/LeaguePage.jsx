import React, {useState, useEffect} from 'react'
import axios from 'axios';
import {Route, Switch} from "react-router";
import {useSelector, useDispatch} from "react-redux";
import SelectSeason from "./SelectSeason.jsx";
import ListCurrentLeague from "./ListCurrentLeague.jsx";
import ListFinishedMatches from "./ListFinishedMatches.jsx";
import * as actions from '../actions';
import LeagueNav from "./LeagueNav.jsx";


function LeaguePage() {
    const [finishedMatches, setFinishedMatches] = useState([]);
    const [scheduledMatches, setScheduledMatches] = useState([]);
    const dispatch = useDispatch();


    const numberLeagueId = useSelector(state => state.numberLeague.numberLeagueId);
    const numberLeagueImg = useSelector(state => state.numberLeague.numberLeagueImg);
    const yearSeason = useSelector(state => state.yearSeason);
    // const nameLeague = useSelector(state => state.numberLeague.nameLeague);
    const loadStatusScheduled = useSelector(state => state.loadStatusScheduled);
    const loadStatusFinished = useSelector(state => state.loadStatusFinished);

    const nameLeague = JSON.parse(localStorage.getItem('name_league'))

    // useEffect(async () => {
    //     const nameLeague = localStorage.getItem('name_league')
    //     try {
    //        await axios({
    //             url: `https://api.football-data.org/v2/competitions/${nameLeague}/matches?season=${yearSeason}`,
    //             method: 'GET',
    //             headers: {
    //                 'X-Auth-Token': '31da4377f6bd472d89c5c79443bfb5db',
    //                 'Content-type': 'application/json',
    //             }
    //         }).then(res => {
    //            setFinishedMatches(res.data.matches);
    //            setScheduledMatches(res.data.matches.filter(item => (item.status.includes("SCHEDULED")) ? item : null))
    //            dispatch(
    //                 actions.getLoadStatusScheduled({loadStatusScheduled: false})
    //            )
    //         })
    //     }
    //     catch(e) {
    //         alert(`Что то пошло не так! ${e}`)
    //     }
    // }, [yearSeason])

    const currentSeason = () => {
        switch (yearSeason) {
            case '2020':
                return '2020 / 2021';
            case '2019':
                return '2019 / 2020';
            case '2018':
                return '2018 / 2019';
            default:
                return null;
        }
    };

    return(
        <div className="league">
            <div className="container">
                <div className="league__row">
                    <SelectSeason />
                    <div className="league__header">
                        <div className="header__logo">
                            <img src={nameLeague.numberLeagueImg} alt="" />
                        </div>
                        <div className="header__info">
                            <span>{nameLeague.nameLeagueName}</span>
                            <p>{currentSeason()}</p>
                        </div>
                    </div>
                    <Switch>
                        <Route exact path="/listleague">
                            <ListCurrentLeague
                                scheduledMatches={scheduledMatches}
                                finishedMatches={finishedMatches}
                                numberLeagueImg={numberLeagueImg}
                                yearSeason={yearSeason}
                                nameLeague={nameLeague}
                            />
                        </Route>

                        <Route path="/listleague/results" component={ListFinishedMatches} />


                    </Switch>
                </div>
            </div>
        </div>
    )
}

export default LeaguePage