import React, { useState } from 'react';
import { connect } from 'react-redux'
import { Container, Typography, Card, Grid, TextField, Button } from '@material-ui/core'
import style from './style.js'
import { MovieIcon } from '../../icons/index'
import { setSearchText, handleCleanText, getMovie,setLoading } from '../../../actions/SearchAction'


const Home = ({ searchReducer: { searchTextValue }, setSearchText, handleCleanText, getMovie,setLoading }) => {
	const classes = style();
	const buscando=()=>{
		setLoading()
		getMovie(searchTextValue)
	}
	return (
		<Container className={classes.container}>
			<Card className={classes.cardContainer}>
				<Grid container >
					<Grid >
						<Typography className={classes.title}>Bienvenido</Typography>
					</Grid>
					<Grid >
						<MovieIcon className={classes.movieIcon} />
					</Grid>

				</Grid>
				<TextField
					value={searchTextValue}
					placeholder="Buscar Pelicula"
					onChange={setSearchText}
					className={classes.textFieldSearch}
				/>
				<Grid className={classes.buttonsContainer}>
					<Button variant="contained" size="large" onClick={handleCleanText}>Limpiar</Button>
					<Button variant="contained"  color="primary" size="large" onClick={buscando} className={classes.buttonSearch} href='#/resultado'>Buscar</Button>

				</Grid>
			</Card>
		</Container>
	)
}


const mapStateProps = state => ({
	searchReducer: state.searchReducer
})

export default connect(mapStateProps, { setSearchText, handleCleanText, getMovie,setLoading })(Home);