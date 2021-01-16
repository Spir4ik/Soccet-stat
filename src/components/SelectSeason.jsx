import React, {useState} from 'react'
import {useDispatch, useSelector} from "react-redux";
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import * as actions from '../actions'


const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 180,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));


function SelectSeason() {
    const classes = useStyles();
    const yearSeason = useSelector(state => state.yearSeason);
    const dispatch = useDispatch();

    return(
        <FormControl className={classes.formControl}>
            <Select
                value={yearSeason}
                onChange={(e) =>
                    dispatch(actions.getYearSeason({ yearSeason: e.target.value }))
                }
                displayEmpty
                className={classes.selectEmpty}
                inputProps={{ 'aria-label': 'Without label' }}
            >
                <MenuItem value={"2020"}>
                    <em>2020 / 2021</em>
                </MenuItem>
                <MenuItem value={"2019"}>2019 / 2020</MenuItem>
                <MenuItem value={"2018"}>2018 / 2019</MenuItem>
            </Select>
            <FormHelperText>Выберите сезон</FormHelperText>
        </FormControl>
    )
}

export default SelectSeason