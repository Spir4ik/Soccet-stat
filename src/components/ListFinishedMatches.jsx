import React, {useState, useEffect} from 'react'
import axios from 'axios';
import TextField from '@material-ui/core/TextField';
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";
import OnlyResults from "./OnlyResults.jsx";

function ListFinishedMatches() {
    const [finishedMatches, setFinishedMatches] = useState([]);
    // const [testArray, setTestArray] = useState([])
    const [firstMatchesDate, setFirstMatchesDate] = useState('')
    const [lastMatchesDate, setLastMatchesDate] = useState('')
    // const [test, setTest] = useState('')


    const yearSeason = useSelector(state => state.yearSeason);

    useEffect(async () => {
        const nameLeague = JSON.parse(localStorage.getItem('name_league'))
        try {
            await axios({
                url: `https://api.football-data.org/v2/competitions/${nameLeague.numberLeagueId}/matches?status=FINISHED&&season=${yearSeason}`,
                method: 'GET',
                headers: {
                    'X-Auth-Token': '31da4377f6bd472d89c5c79443bfb5db',
                    'Content-type': 'application/json',
                }
            }).then(res => {
                // setTestArray(res.data.matches)
                const lastElem = res.data.matches.length - 1
                setFinishedMatches(res.data.matches)
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
            <div className="league__nav">
                <div className="nav__item">
                    <Link to="/listleague">Обзор</Link>
                </div>
                <div className="nav__item first">
                    <Link to="/listleague/results">Результаты</Link>
                </div>
                <div className="nav__item">
                    <Link to="/listleague/calendar">Календарь</Link>
                </div>
            </div>
            <div className="league__body">
                {/*<form onSubmit={(e) => {*/}
                {/*    // e.preventDefault();*/}
                {/*    // setFinishedMatches(testFunc())*/}
                {/*    // const paramUrl = window.location.href.split('?')[1]*/}
                {/*    // console.log(paramUrl.slice(5).split('+'))*/}
                {/*}}>*/}
                {/*    <TextField*/}
                {/*        id="standard-search"*/}
                {/*        label="Введите команду"*/}
                {/*        name="team"*/}
                {/*        onChange={(e) => setTest(e.target.value)}*/}
                {/*        value={test}*/}
                {/*        type="search"*/}
                {/*        placeholder="Sevilla FC"*/}
                {/*    />*/}
                {/*</form>*/}
                <OnlyResults
                    finishedMatches={finishedMatches}
                    firstMatchesDate={firstMatchesDate}
                    lastMatchesDate={lastMatchesDate}
                />
            </div>
        </React.Fragment>
    )
}

export default ListFinishedMatches