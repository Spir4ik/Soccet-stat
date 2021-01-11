import React from 'react';
import moment from 'moment';

function FinishedMatches(props) {
  const {
    awayTeam, homeTeam, utcDate, score,
  } = props;
  const scoreHomeTeam = score.fullTime.homeTeam;
  const scoreAwayTeam = score.fullTime.awayTeam;

  moment.locale('ru');
  return (
    <div className="league-statistics__element">
      <div className="league-statistics__date">
        {moment(utcDate).format('LLL')}
      </div>
      <div className="league-statistics__matches">
        {
                    score.winner === 'HOME_TEAM'
                      ? (
                        <p>
                          <b>{homeTeam.name}</b>
                          {' '}
                          {scoreHomeTeam}
                          {' '}
                          -
                          {' '}
                          {scoreAwayTeam}
                          {' '}
                          {awayTeam.name}
                        </p>
                      )
                      : score.winner === 'AWAY_TEAM'
                        ? (
                          <p>
                            {homeTeam.name}
                            {' '}
                            {scoreHomeTeam}
                            {' '}
                            -
                            {' '}
                            {scoreAwayTeam}
                            {' '}
                            <b>{awayTeam.name}</b>
                          </p>
                        )
                        : (
                          <p>
                            {homeTeam.name}
                            {' '}
                            <b>
                              {scoreHomeTeam}
                              {' '}
                              -
                              {' '}
                              {scoreAwayTeam}
                            </b>
                            {' '}
                            {awayTeam.name}
                          </p>
                        )
                }
      </div>
    </div>
  );
}

export default FinishedMatches;
