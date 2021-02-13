import React, {useState, useEffect} from 'react'
import TextField from "@material-ui/core/TextField";
import DatePicker, {registerLocale} from "react-datepicker";
import ru from "date-fns/locale/ru";

function FormsFilters(props) {
    const {arraysMatches, firstMatchesDate, lastMatchesDate, updateArray} = props
    const [test, setTest] = useState('')
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null)
    registerLocale("ru", ru);

    useEffect(() => {
        if (window.location.href.includes('?')) {
            localStorage.setItem('paramUrlName',
                JSON.stringify(window.location.search
                    .substring(1)
                    .split('&')
                    .reduce((tally, total) => {
                        const newTotal = total.split('=')
                        tally[newTotal[0]] = newTotal[1]
                        return tally
                    }, {})
                )
            )
        }
        return null
    }, [])

    const testFunc = () => {
        if (!startDate && !endDate) {
            // setTestArray(arraysMatches.filter(item => {
            //     if (item.awayTeam.name.includes(test) || item.homeTeam.name.includes(test)) {
            //         return item
            //     }
            // }))
            updateArray(arraysMatches.filter(item => {
                    if (item.awayTeam.name.includes(test) || item.homeTeam.name.includes(test)) {
                        return item
                    }
                }))
        }
        if (!test && startDate && endDate) {
            // setTestArray(arraysMatches.filter(item => {
            //     const dateNum = Date.parse(item.utcDate)
            //     return (dateNum >= startDate.getTime() && dateNum <= endDate.getTime()) ? item : null
            // }))
            updateArray(arraysMatches.filter(item => {
                const dateNum = Date.parse(item.utcDate)
                return (dateNum >= startDate.getTime() && dateNum <= endDate.getTime()) ? item : null
            }))
        }
        if (test && startDate && endDate) {
            // setTestArray(arraysMatches.filter(item => {
            //     const dateNum = Date.parse(item.utcDate)
            //     return ((item.awayTeam.name.includes(test) ||
            //         item.homeTeam.name.includes(test)) &&
            //         (dateNum >= startDate.getTime() && dateNum <= endDate.getTime())) ? item : null
            // }))
            updateArray(arraysMatches.filter(item => {
                const dateNum = Date.parse(item.utcDate)
                return ((item.awayTeam.name.includes(test) ||
                    item.homeTeam.name.includes(test)) &&
                    (dateNum >= startDate.getTime() && dateNum <= endDate.getTime())) ? item : null
            }))
        }
    }

    useEffect(() => {
        if (window.location.href.includes('?')) {
            const testURL = JSON.parse(localStorage.getItem('paramUrlName'))
            if (testURL.datefrom && testURL.dateto) {
                const [dayFrom, monthFrom, yearFrom] = testURL.datefrom.split('.')
                const [dayTo, monthTo, yearTo] = testURL.dateto.split('.')

                setStartDate(new Date(parseInt(yearFrom), parseInt(monthFrom) - 1, parseInt(dayFrom)))
                setEndDate(new Date(parseInt(yearTo), parseInt(monthTo) - 1, parseInt(dayTo), 23, 59))
            }
            setTest(testURL.team)
            testFunc()
        }
        return null
    }, [arraysMatches])

    return(
        <form className="filters__name-team" autoComplete="off">
            <div className="results__filters">
                <TextField
                    id="standard-search"
                    label="Введите команду"
                    name="team"
                    onChange={(e) => setTest(e.target.value.trim())}
                    value={test}
                    type="search"
                    placeholder="Sevilla FC"
                />
                <div className="filters__date">
                    <div className="filters__from">
                        <label> С </label>
                        <DatePicker
                            locale={ru}
                            dateFormat="dd.MM.yyyy"
                            selected={startDate}
                            minDate={firstMatchesDate}
                            maxDate={lastMatchesDate}
                            name="datefrom"
                            onChange={date => setStartDate(date)}
                            placeholderText="Выберите начальную дату..."
                        />
                    </div>
                    <div className="filters__to">
                        <label> По </label>
                        <DatePicker
                            locale={ru}
                            dateFormat="dd.MM.yyyy"
                            selected={endDate}
                            maxDate={lastMatchesDate}
                            minDate={startDate}
                            name="dateto"
                            // disabled={startDate ? 'false' : 'true'}
                            onChange={date => setEndDate(date)}
                            placeholderText="Выберите конечную дату..."
                        />
                    </div>
                </div>
            </div>
            <div className="tabs-body">
                <div className="tabs-text">
                    <button type="submit">Найти</button>
                </div>
            </div>
        </form>
    )
}

export default FormsFilters