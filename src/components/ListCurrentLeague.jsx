import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {useSelector} from "react-redux";
import BodyResults from "./BodyResults.jsx";
import SelectSeason from "./SelectSeason.jsx";
import OnlyResults from "./OnlyResults.jsx";
import CalendarPage from "./CalendarPage.jsx";
import {Link} from 'react-router-dom'
// import LeagueNav from "./LeagueNav.jsx";
import LoadComponent from "./LoadComponent.jsx";
import * as actions from "../actions";

function ListCurrentLeague(props) {
  const [finishedMatches, setFinishedMatches] = useState([]);
  const [scheduledMatches, setScheduledMatches] = useState([]);

  const loadStatusScheduled = useSelector(state => state.loadStatusScheduled);
  const loadStatusFinished = useSelector(state => state.loadStatusFinished);
  const yearSeason = useSelector(state => state.yearSeason);

  useEffect(async () => {
    const nameLeague = JSON.parse(localStorage.getItem('name_league'))
    try {
      await axios({
        url: `https://api.football-data.org/v2/competitions/${nameLeague.numberLeagueId}/matches?status=SCHEDULED&&season=${yearSeason}`,
        method: 'GET',
        headers: {
          'X-Auth-Token': '31da4377f6bd472d89c5c79443bfb5db',
          'Content-type': 'application/json',
        }
      }).then(res => {
        setScheduledMatches(res.data.matches)
      })

      await axios({
        url: `https://api.football-data.org/v2/competitions/${nameLeague.numberLeagueId}/matches?status=FINISHED&&season=${yearSeason}`,
        method: 'GET',
        headers: {
          'X-Auth-Token': '31da4377f6bd472d89c5c79443bfb5db',
          'Content-type': 'application/json',
        }
      }).then(res => {
        setFinishedMatches(res.data.matches)
      })
    }
    catch(e) {
      alert(`Что то пошло не так! ${e}`)
    }
  }, [yearSeason])

  const {
    // scheduledMatches,
    // finishedMatches,
    // numberLeagueImg,
    // yearSeason,
    nameLeague,
  } = props;

  return (
      <React.Fragment>
        <div className="league__nav">
          <div className="nav__item first">
            <Link to="/listleague">Обзор</Link>
          </div>
          <div className="nav__item">
            <Link to="/listleague/results">Результаты</Link>
          </div>
          <div className="nav__item">
            <Link to="/listleague/calendar">Календарь</Link>
          </div>
        </div>
        <div className="league__body">
          <BodyResults
              finishedMatches={finishedMatches}
              scheduledMatches={scheduledMatches}
              nameLeague={nameLeague}
          />
        </div>
      </React.Fragment>
  );
}

export default ListCurrentLeague;
