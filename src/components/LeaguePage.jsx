import React, {useState} from 'react'
import {Route, Switch} from "react-router";
import {useSelector, useDispatch} from "react-redux";
import SelectSeason from "./SelectSeason.jsx";
import ListCurrentLeague from "./ListCurrentLeague.jsx";
import ListFinishedMatches from "./ListFinishedMatches.jsx";
import TeamCalendar from "./TeamCalendar.jsx";
import ListScheduledMatches from "./ListScheduledMatches.jsx";


function LeaguePage() {
    const yearSeason = useSelector(state => state.yearSeason);

    const nameLeague = JSON.parse(localStorage.getItem('name_league'))

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
                    {(window.location.href.includes('/Team_Calendar') && window.location.href.includes('/Team_Calendar/') === false) ?
                        <SelectSeason />
                        :
                        (window.location.href.includes('/Team_Calendar/') === true) ?
                        <React.Fragment>
                            <div className="league__header" style={{margin: '15px 0 0 8px'}}>
                                <div className="header__logo">
                                    <img
                                        src={JSON.parse(localStorage.getItem('selectTeam')).imgTeam}
                                        style={{height: '120px', width: '120px'}}
                                        alt=""
                                    />
                                </div>
                                <div className="header__info">
                                    <span>{JSON.parse(localStorage.getItem('selectTeam')).nameTeam}</span>
                                </div>
                            </div>
                        </React.Fragment>
                        :
                        <React.Fragment>
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
                        </React.Fragment>
                    }
                    <Switch>
                        <Route exact path="/listleague">
                            <ListCurrentLeague
                                nameLeague={nameLeague}
                            />
                        </Route>
                        <Route path="/listleague/results" component={ListFinishedMatches} />
                        <Route path="/listleague/calendar" component={ListScheduledMatches} />
                        <Route path="/listleague/Team_Calendar" component={TeamCalendar} />
                    </Switch>
                </div>
            </div>
        </div>
    )
}

export default LeaguePage