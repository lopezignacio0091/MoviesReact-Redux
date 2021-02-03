import React ,{useEffect}from 'react';
import {connect} from 'react-redux'
import {Container} from '@material-ui/core'
import ResultList from './ResultList'
import Progress from '../../pages/Loading'

const Movie=({searchReducer: {resultsMovies,loading}})=>{  

    if(loading){
        return (
            <Progress/>
        )
    }
    return (
        <Container>
        <ResultList resultsData={resultsMovies}/>
    );
        </Container>
    )
}
const mapStateProps = state => ({
    searchReducer: state.searchReducer
})

export default connect(mapStateProps,)(Movie);

