import React, { useState, useEffect } from 'react'
import axios from 'axios';
import {useDispatch, useSelector} from "react-redux";
import Link from "react-router-dom";
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
                        return(
                            <div className="cardLeague"
                                 key={id}
                                 onClick={() => {
                                     window.location.replace(window.location.href + 'listleague')
                                     dispatch(actions.getNumberLeague({numberLeagueId: id, numberLeagueImg: img}))
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