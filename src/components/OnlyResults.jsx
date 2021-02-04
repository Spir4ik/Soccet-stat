import React, {useState, useEffect} from 'react'
import ru from 'date-fns/locale/ru'
import DatePicker, {registerLocale} from "react-datepicker"
import FinishedMatches from "./FinishedMatches.jsx";
import TextField from "@material-ui/core/TextField";

function OnlyResults(props) {
    const {finishedMatches, nameLeague, firstMatchesDate, lastMatchesDate} = props;
    const [test, setTest] = useState('')
    const [testArray, setTestArray] = useState([])
    // const mbWorked = lastMatchesDate.slice(0, 10).split('-').join('/')
    const [startDate, setStartDate] = useState(null);
    registerLocale("ru", ru);

    const testAgainFunc = () => (
        setTestArray(finishedMatches.filter(item => {
            // if (startDate === '') return item
            // return (item.utcDate.includes(startDate.toISOString().substr(0, 10))) ? item : null
            const dateNum = Date.parse(item.utcDate)
            // return Date.parse(item.utcDate)
            return dateNum >= startDate.getTime() ? item : null
        }))
    )

    // useEffect(() => {
    //     // (window.location.href.includes('?')) ? localStorage.setItem('paramUrlName', window.location.href.split('?')[1]) : localStorage.setItem('paramUrlName', null)
    // }, [])
    //
    // const testFunc = () => {
    //     const paramUrlName = localStorage.getItem('paramUrlName').slice(5)
    //     return finishedMatches.filter(item => {
    //         if (!paramUrlName) return item
    //         if (item.awayTeam.name.includes(paramUrlName) || item.homeTeam.name.includes(paramUrlName)) {
    //             return item
    //         }
    //     })
    // }

    // console.log(testAgainFunc())
    // console.log(mbWorked === "2020/12/09")
    // console.log(startDate)


    return(
        <div className="body__results">
            <div className="results__filters">
                <form className="filters__name-team">
                    <TextField
                        id="standard-search"
                        label="Введите название команды"
                        name="team"
                        onChange={(e) => setTest(e.target.value)}
                        value={test}
                        type="search"
                        placeholder="Sevilla FC"
                    />
                </form>
                <div className="filters__date">
                    <div className="filters__from">
                        <label> С </label>
                        <DatePicker
                            locale={ru}
                            dateFormat="dd.MM.yyyy"
                            selected={startDate}
                            // disabled={false}
                            minDate={firstMatchesDate}
                            onChange={date => setStartDate(date)}
                            placeholderText="Выберите дату"
                        />
                    </div>
                    <div className="filters__to">
                        <label> По </label>
                        <DatePicker
                            locale={ru}
                            dateFormat="dd.MM.yyyy"
                            selected={lastMatchesDate}
                            // disabled={false}
                            onChange={() => testAgainFunc()}
                            placeholder="Выберите дату"
                        />
                    </div>
                </div>
            </div>
            <div className="latter-result">
                <div className="league-statistics">
                    <div className="league-statistics__body">
                        <div className="league-statistics__header">
                            {nameLeague}
                        </div>
                        <div className="league-statistics__item">
                            {/*{finishedMatches.map(({*/}
                            {/*                                     awayTeam, homeTeam, id, utcDate, score,*/}
                            {/*                                 }) => (*/}
                            {/*    <FinishedMatches*/}
                            {/*        awayTeam={awayTeam}*/}
                            {/*        homeTeam={homeTeam}*/}
                            {/*        key={id}*/}
                            {/*        utcDate={utcDate}*/}
                            {/*        score={score}*/}
                            {/*    />*/}
                            {/*))}*/}
                            {testArray.length === 0 ? finishedMatches.map(({awayTeam, homeTeam, id, utcDate, score,}) => (
                                <FinishedMatches
                                    awayTeam={awayTeam}
                                    homeTeam={homeTeam}
                                    key={id}
                                    utcDate={utcDate}
                                    score={score}
                                />
                            )) : testArray.map(({awayTeam, homeTeam, id, utcDate, score,}) => (
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
        </div>
    )
}

export default OnlyResults