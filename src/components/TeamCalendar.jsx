import React, {useState, useEffect} from 'react'
import {Route, Switch} from "react-router";
import SelectTeamPage from "./SelectTeamPage.jsx";

function TeamCalendar() {
    return(
        <div className="league__body">
            <div className="container">
                <Switch>
                    <Route exact path="/listleague/Team_Calendar" component={SelectTeamPage} />
                    <Route path={`/listleague/Team_Calendar/${JSON.parse(localStorage.getItem('selectTeam')).nameTeam.toLowerCase().replace(/\s+/g, '').trim()}`}> <div>hello world</div></Route>
                </Switch>
            </div>
        </div>
    )
}

export default TeamCalendar