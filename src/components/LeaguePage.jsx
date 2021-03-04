import React from 'react'
import {Route, Switch} from "react-router";
import SelectSeason from "./SelectSeason.jsx";
import ListCurrentLeague from "./ListCurrentLeague.jsx";
import ListFinishedMatches from "./ListFinishedMatches.jsx";
import TeamCalendar from "./TeamCalendar.jsx";
import ListScheduledMatches from "./ListScheduledMatches.jsx";
import LeagueHeader from "./LeagueHeader.jsx";
import NotFoundPage from "./NotFoundPage.jsx";


function LeaguePage() {
    const hash = window.location.hash
    return(
        <div className="league">
            <div className="container">
                <div className="league__row">
                    {(hash === "#/listleague" ||
                        hash === "#/listleague/results" ||
                        hash === "#/listleague/calendar" ||
                        hash.includes("#/listleague/Team_Calendar"))
                    && <React.Fragment>
                            {(window.location.href.includes('/Team_Calendar') && !window.location.href.includes('/Team_Calendar/')) ?
                                <SelectSeason />
                                :
                                <LeagueHeader />
                            }
                        </React.Fragment>
                    }
                    <Switch>
                        <Route exact path="/listleague" component={ListCurrentLeague} />
                        <Route path="/listleague/results" component={ListFinishedMatches} />
                        <Route path="/listleague/calendar" component={ListScheduledMatches} />
                        <Route path="/listleague/Team_Calendar" component={TeamCalendar} />
                        <Route component={NotFoundPage} />
                    </Switch>
                </div>
            </div>
        </div>
    )
}

export default LeaguePage