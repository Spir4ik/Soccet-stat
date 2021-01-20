import {combineReducers} from "redux";
import { handleActions } from 'redux-actions';
import * as actions from '../actions'

const numberLeague = handleActions({
    [actions.getNumberLeague](state, {payload: {numberLeagueId, numberLeagueImg, nameLeague}}) {
        return {...state, numberLeagueId, numberLeagueImg, nameLeague}
    }
}, {}
)

const yearSeason = handleActions({
    [actions.getYearSeason](state, {payload: {yearSeason}}) {
        return yearSeason ? yearSeason : null
    }
}, "2020"
)

const loadStatusScheduled = handleActions({
    [actions.getLoadStatusScheduled](state, {payload: {loadStatusScheduled}}) {
        return loadStatusScheduled
    }
}, true
)

const loadStatusFinished = handleActions({
        [actions.getLoadStatusFinished](state, {payload: {loadStatusFinished}}) {
            return loadStatusFinished
        }
    }, true
)

export default combineReducers({
    numberLeague,
    yearSeason,
    loadStatusScheduled,
    loadStatusFinished
})