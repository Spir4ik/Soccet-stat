import React, { useState, useEffect } from 'react'
import axios from 'axios';
import {useDispatch, useSelector} from "react-redux";
import leagueList from "../leagueList";
import SelectSeason from "./SelectSeason.jsx";
import * as actions from '../actions'

function CardLeague() {
    const numberLeague = useSelector(state => state.numberLeague);
    const dispatch = useDispatch();

    console.log(numberLeague);

    const showCurrentLeague = async (id) => {
        try {
            await axios({
                url: `https://api.football-data.org/v2/competitions/2001/`,
                method: 'GET',
                headers: {
                    'X-Auth-Token': '31da4377f6bd472d89c5c79443bfb5db',
                    'Content-type': 'application/json',
                }
            }).then(res => console.log(res))
        }
        catch (e) {
            alert(`Что то пошло не так! ${e}`)
        }
    }

    showCurrentLeague()

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
                                 onClick={() => dispatch(actions.getNumberLeague({numberLeague: id}))}
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