import React from 'react'
import {Route, Switch} from "react-router";
import SelectTeamPage from "./SelectTeamPage.jsx";
import ListTeamMatches from "./ListTeamMatches.jsx";
import NotFoundPage from "./NotFoundPage.jsx";

function TeamCalendar() {
    const linkSelectedTeam = () => {
        return(
            `/listleague/Team_Calendar/${JSON.parse(localStorage.getItem('selectTeam'))
                .nameTeam
                .toLowerCase()
                .replace(/\s+/g, '')
                .trim()}`
        )
    }

    return(
        <div className="league__body">
            <div className="container">
                <Switch>
                    <Route exact path="/listleague/Team_Calendar" component={SelectTeamPage} />
                    {JSON.parse(localStorage.getItem('selectTeam')) &&
                        <Route
                            path={linkSelectedTeam()}
                            component={ListTeamMatches}
                        />
                    }
                    <Route component={NotFoundPage} />
                </Switch>
            </div>
        </div>
    )
}

export default TeamCalendar