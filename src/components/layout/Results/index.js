import React ,{useEffect}from 'react';
import {connect} from 'react-redux'
import {Container} from '@material-ui/core'
import ResultList from './ResultList'
import Progress from '../../pages/Loading'
import Error from '../../pages/NotFound'

const Result=({searchReducer: {resultsMovies,loading}})=>{  

    if(loading){
        return (
            <Progress/>
        )
    }
    if(resultsMovies.length ==0){
        return (
            <Error/>
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


export default connect(mapStateProps,{})(Result);

