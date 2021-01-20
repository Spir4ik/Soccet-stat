import React, {useState} from 'react';
import {useSelector} from "react-redux";
import BodyResults from "./BodyResults.jsx";
import SelectSeason from "./SelectSeason.jsx";
import OnlyResults from "./OnlyResults.jsx";
import CalendarPage from "./CalendarPage.jsx";
// import LeagueNav from "./LeagueNav.jsx";
import LoadComponent from "./LoadComponent.jsx";

function ListCurrentLeague(props) {
  const [showOverview, setShowOverview] = useState(true);
  const [showResults, setShowResults] = useState(false);
  const [showCalendar, setShowCalendar] = useState(false);

  const loadStatusScheduled = useSelector(state => state.loadStatusScheduled);
  const loadStatusFinished = useSelector(state => state.loadStatusFinished);

  const {
    scheduledMatches,
    finishedMatches,
    numberLeagueImg,
    yearSeason,
    nameLeague,
  } = props;

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

    return (
    <div className="league">
      <div className="container">
        <div className="league__row">
            <SelectSeason />
          <div className="league__header">
            <div className="header__logo">
              <img src={numberLeagueImg} alt="" />
            </div>
            <div className="header__info">
              <span>{nameLeague}</span>
              <p>{currentSeason()}</p>
            </div>
          </div>
          <div className="league__nav">
            <div className={showOverview ? "nav__item first" : "nav__item"} onClick={() => {
              setShowOverview(true)
              setShowResults(false)
              setShowCalendar(false)
            }}>
              <p>Обзор</p>
            </div>
            <div className={showResults ? "nav__item first" : "nav__item"} onClick={() => {
              setShowOverview(false)
              setShowResults(true)
              setShowCalendar(false)
            }}>
              <p>Результаты</p>
            </div>
            <div className={showCalendar ? "nav__item first" : "nav__item"} onClick={() => {
              setShowOverview(false)
              setShowResults(false)
              setShowCalendar(true)
            }}>
              <p>Календарь</p>
            </div>
          </div>
          <div className="league__body">
            {showOverview && <BodyResults
                finishedMatches={finishedMatches}
                scheduledMatches={scheduledMatches}
                nameLeague={nameLeague}
            />}
            {showResults && <OnlyResults
                finishedMatches={finishedMatches}
                nameLeague={nameLeague}
            />}
            {showCalendar && <CalendarPage
                scheduledMatches={scheduledMatches}
                nameLeague={nameLeague}
            />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ListCurrentLeague;
