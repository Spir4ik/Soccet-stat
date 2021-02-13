import React, {useState, useEffect} from 'react'
import axios from 'axios';
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";
import CalendarPage from "./CalendarPage.jsx";
import LeagueNav from "./LeagueNav.jsx";

function ListScheduledMatches() {
    const [scheduledMatches, setScheduledMatches] = useState([]);
    const [firstMatchesDate, setFirstMatchesDate] = useState('')
    const [lastMatchesDate, setLastMatchesDate] = useState('')


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
                // setTestArray(res.data.matches)
                const lastElem = res.data.matches.length - 1
                setScheduledMatches(res.data.matches)
                setFirstMatchesDate(new Date(res.data.matches[0].utcDate))
                setLastMatchesDate(new Date(res.data.matches[lastElem].utcDate))
                // console.log(res.data.matches[0].utcDate)
            })
        }
        catch(e) {
            alert(`Что то пошло не так! ${e}`)
        }

        // return (window.location.href.includes('?')) ? localStorage.setItem('paramUrlName', window.location.href.split('?')[1]) : null
        // return (window.location.href.includes('?')) ? testFunc(window.location.href.split('?')[1]) : null
    }, [yearSeason])

    // const testFunc = (str) => {
    //     const paramUrlName = str.slice(5)
    //     console.log(paramUrlName)
    //     setFinishedMatches(finishedMatches)
    //     console.log(testArray);
    //     const mbWorked = testArray.filter(item => {
    //         // if (test === '') return item
    //         if (item.awayTeam.name.includes(paramUrlName) || item.homeTeam.name.includes(paramUrlName)) {
    //             return item
    //         }
    //     })
    // }

    return(
        <React.Fragment>
            {/*<div className="league__nav">*/}
            {/*    <div className="nav__item">*/}
            {/*        <Link to="/listleague">Обзор</Link>*/}
            {/*    </div>*/}
            {/*    <div className="nav__item first">*/}
            {/*        <Link to="/listleague/results">Результаты</Link>*/}
            {/*    </div>*/}
            {/*    <div className="nav__item">*/}
            {/*        <Link to="/listleague/calendar">Календарь</Link>*/}
            {/*    </div>*/}
            {/*</div>*/}
            <LeagueNav />
            <div className="league__body">
                <CalendarPage
                    scheduledMatches={scheduledMatches}
                    firstMatchesDate={firstMatchesDate}
                    lastMatchesDate={lastMatchesDate}
                />
            </div>
        </React.Fragment>
    )
}

export default ListScheduledMatches