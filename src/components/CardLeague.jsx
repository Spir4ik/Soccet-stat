import React from 'react'
import {useDispatch, useSelector} from "react-redux";
import leagueList from "../leagueList";
import SelectSeason from "./SelectSeason.jsx";
import * as actions from '../actions'

function CardLeague() {
    const numberLeague = useSelector(state => state.numberLeague);
    const dispatch = useDispatch();

    return(
        <div className="content">
            <div className="container">
                <div className="content__date">
                    <SelectSeason />
                </div>
                <div className="card">
                    {leagueList.map(({img, name, id}) => {
                        let parametersList = {
                            numberLeagueId: id,
                            numberLeagueImg: img,
                            nameLeagueName: name
                        }
                        return(
                            <div className="cardLeague"
                                 key={id}
                                 onClick={() => {
                                     window.location.assign(window.location.href + 'listleague')
                                     dispatch(actions.getNumberLeague({numberLeagueId: id, numberLeagueImg: img, nameLeague: name}))
                                     localStorage.setItem('name_league', JSON.stringify(parametersList))
                                     window.location.reload();
                                     }
                                 }
                            >
                                <img src={img} alt="" />
                                <div className="cardLeague__footer">
                                    <h4><b>{name}</b></h4>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default CardLeague