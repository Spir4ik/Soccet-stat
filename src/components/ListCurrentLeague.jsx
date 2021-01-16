import React, {useEffect} from 'react';
import axios from "axios";
import { Link } from 'react-router-dom';
import ScheduledMatches from './ScheduledMatches.jsx';
import FinishedMatches from './FinishedMatches.jsx';
import SelectSeason from "./SelectSeason.jsx";

function ListCurrentLeague(props) {
  const {
    scheduledMatches, finishedMatches, numberLeagueImg, yearSeason, nameLeague,
  } = props;

  const ConclusionMatches = () => {
    const LastElems = finishedMatches.length - 16;
    return finishedMatches.slice(LastElems);
  };

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
            <div className="nav__item first">
              <p>Обзор</p>
            </div>
            <div className="nav__item">
              <Link to={(location) => ({ ...location, pathname: '/results' })}>
                <p>Результаты</p>
              </Link>
            </div>
            <div className="nav__item">
              <p>Календарь</p>
            </div>
          </div>
          <div className="league__body">
            <div className="body__results">
              <div className="latter-result">
                <div className="tabs-body">
                  <div className="tabs-text">
                    <span>Последние результаты</span>
                  </div>
                </div>
                <div className="league-statistics">
                  <div className="league-statistics__body">
                    <div className="league-statistics__header">
                          Какой то там тур
                    </div>
                    <div className="league-statistics__item">
                          {ConclusionMatches().map(({
                              awayTeam, homeTeam, id, utcDate, score,
                            }) => (
                                <FinishedMatches
                                    awayTeam={awayTeam}
                                    homeTeam={homeTeam}
                                    key={id}
                                    utcDate={utcDate}
                                    score={score}
                                  />
                            ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="latter-result scheduled-mathes">
                <div className="tabs-body">
                  <div className="tabs-text">
                    <span>Предстоящие матчи</span>
                  </div>
                </div>
                <div className="league-statistics">
                  <div className="league-statistics__body">
                    <div className="league-statistics__header">
                          Тур...
                    </div>
                    <div className="league-statistics__item">
                          {props.scheduledMatches.map(({
                              awayTeam, homeTeam, id, utcDate, stage,
                            }) => (
                                <ScheduledMatches
                                    awayTeam={awayTeam}
                                    homeTeam={homeTeam}
                                    key={id}
                                    utcDate={utcDate}
                                    stage={stage}
                                  />
                            ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ListCurrentLeague;
