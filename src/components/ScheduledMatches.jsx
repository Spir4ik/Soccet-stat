import React from 'react';
import moment from "moment";


function ScheduledMatches(props) {
    const {awayTeam, homeTeam, utcDate, stage} = props

    moment.locale('ru');
    return (
        <div className="league-statistics__element">
            <div className="league-statistics__date">
                {moment(utcDate).format('LLL')}
            </div>
            <div className="league-statistics__matches">
                {`${homeTeam.name} 0 - 0 ${awayTeam.name}`}
            </div>
        </div>
    )
}

export default ScheduledMatches