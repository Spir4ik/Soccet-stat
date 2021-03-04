import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {useSelector} from "react-redux";
import AsyncCallsMatches from "./Async_calls/AsyncCallsMatches.js";
import BodyResults from "./BodyResults.jsx";
import LeagueNav from "./LeagueNav.jsx";

function ListCurrentLeague() {
  const [finishedMatches, setFinishedMatches] = useState([]);
  const [scheduledMatches, setScheduledMatches] = useState([]);

  const yearSeason = useSelector(state => state.yearSeason);

  useEffect(async () => {
    const nameLeague = JSON.parse(localStorage.getItem('name_league'))
    try {
      await axios(AsyncCallsMatches(
          nameLeague.numberLeagueId,
          yearSeason,
          "SCHEDULED",
          "competitions",
          "matches")
      )
      .then(res => {
        setScheduledMatches(res.data.matches)
      })

      await axios(AsyncCallsMatches(
          nameLeague.numberLeagueId,
          yearSeason,
          "FINISHED",
          "competitions",
          "matches")
      )
      .then(res => {
        setFinishedMatches(res.data.matches)
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

  return (
      <React.Fragment>
        <LeagueNav />
        <div className="league__body">
          <BodyResults
              finishedMatches={finishedMatches}
              scheduledMatches={scheduledMatches}
          />
        </div>
      </React.Fragment>
  );
}

export default ListCurrentLeague;
