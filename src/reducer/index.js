import {combineReducers} from "redux";
import { handleActions } from 'redux-actions';
import * as actions from '../actions'

const numberLeague = handleActions({
    [actions.getNumberLeague](state, {payload: {numberLeagueId, numberLeagueImg}}) {
        return {...state, numberLeagueId, numberLeagueImg}
    }
}, {}
)

const yearSeason = handleActions({
    [actions.getYearSeason](state, {payload: {yearSeason}}) {
        return yearSeason ? yearSeason : null
    }
}, "2020"
)

export default combineReducers({
    numberLeague,
    yearSeason,
})