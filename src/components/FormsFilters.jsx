import React, {useState, useEffect} from 'react'
import TextField from "@material-ui/core/TextField";
import DatePicker, {registerLocale} from "react-datepicker";
import ru from "date-fns/locale/ru";

function FormsFilters(props) {
    const {arraysMatches, firstMatchesDate, lastMatchesDate, updateArray} = props
    const [paramUrlTeam, setParamUrlTeam] = useState('')
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
                        if (newTotal[1].includes("+")) {
                            tally[newTotal[0]] = newTotal[1].split("+").join(" ")
                        } else {
                            tally[newTotal[0]] = newTotal[1]
                        }
                        return tally
                    }, {})
                )
            )
        }
        return null
    }, [])

    const filtersArrayMatches = () => {
        if (!startDate && !endDate) {
            updateArray(arraysMatches.filter(item =>
                (item.awayTeam.name.includes(paramUrlTeam) || item.homeTeam.name.includes(paramUrlTeam))
            ))
        }
        if (!paramUrlTeam && startDate && endDate) {
            updateArray(arraysMatches.filter(item => {
                const dateNum = Date.parse(item.utcDate)
                return (dateNum >= startDate.getTime() && dateNum <= endDate.getTime()) ? item : null
            }))
        }
        if (paramUrlTeam && startDate && endDate) {
            updateArray(arraysMatches.filter(item => {
                const dateNum = Date.parse(item.utcDate)
                return ((item.awayTeam.name.includes(paramUrlTeam) ||
                    item.homeTeam.name.includes(paramUrlTeam)) &&
                    (dateNum >= startDate.getTime() && dateNum <= endDate.getTime())) ? item : null
            }))
        }
    }

    useEffect(() => {
        if (window.location.href.includes('?')) {
            const paramURL = JSON.parse(localStorage.getItem('paramUrlName'))
            if (paramURL.datefrom && paramURL.dateto) {
                const [dayFrom, monthFrom, yearFrom] = paramURL.datefrom.split('.')
                const [dayTo, monthTo, yearTo] = paramURL.dateto.split('.')

                setStartDate(new Date(parseInt(yearFrom), parseInt(monthFrom) - 1, parseInt(dayFrom)))
                setEndDate(new Date(parseInt(yearTo), parseInt(monthTo) - 1, parseInt(dayTo), 23, 59))
            }
            setParamUrlTeam(paramURL.team)
            filtersArrayMatches()
        }
        return null
    }, [arraysMatches])

    return(
        <form className="filters__name-team" autoComplete="off" >
            <div className="results__filters">
                <TextField
                    id="standard-search"
                    label="Введите команду"
                    name="team"
                    onChange={(e) =>
                        setParamUrlTeam(e.target.value)
                    }
                    value={paramUrlTeam}
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
                            disabled={startDate ? false : true}
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