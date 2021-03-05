import React, { Fragment } from 'react';
import { Container, Typography, Card, Grid, TextField, Button } from '@material-ui/core'
import PropTypes from 'prop-types';
import ResultItem from './ResultItem';
import style from './style.js'

const ResultList = ({ resultsData }) => {
    const classes = style();
    return (
        <Fragment>
            <Grid container spacing={2}>
            {
                resultsData.length > 0 && resultsData.map((item, index) => (
                        <Grid xs={4} spacing={2} classes={classes.cardDay}>
                            <ResultItem resultData={item} key={index} />
                        </Grid>
                ))
            } 
            </Grid>
        </Fragment>
    );
}

ResultList.propTypes = {
    resultData: PropTypes.object.isRequired,
}

export default ResultList;
