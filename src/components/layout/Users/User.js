import React, {Fragment, useEffect, useContext } from 'react';
import Spinner from './Spinner';
import { Link } from 'react-router-dom';
import GithubContext from '../../context/github/githubContext';

//cambiamos la clase a componente funcional
//utilizaremos useEffect para reemplazar el componentDidMount y cualquier otra accion que se lleve a cabo

//podriamos descontruir aun mas user
const User = ({match}) => {

    const githubContext = useContext(GithubContext);
    const {user, loading, getUser} = githubContext;
    //useEffect cumpliria el rol de componentDidMount o compoenentDidUpdate
    //ejecuta cada accion que se lleva a cabo en el componente actual
    //debemos definir cuando queeremos que corra o la cantidad de veces sino entramos en un loop infinito
    useEffect(() => {
        getUser(match.params.login);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]); // con esto decimos que se ejecute una unica vez

    /*
    componentDidMount() {
        getUser(this.props.match.params.login);
    }
*/
        const {
            name,
            avatar_url,
            location,
            bio,
            blog,
            html_url,
            followers,
            following,
            public_repos,
            public_gists,
            hireable
        } = user;


        if(loading) return <Spinner />
        return (
            <Fragment>
                <Link to='/' className='btn btn-light'> Back to search </Link>
                Hirable: {''}
                {hireable ? (<i className='fas fa-check text-success'/>) : 
                            (<i className='fas fa-times-circle text-danger'/>)}
                
                <div className='card grid-2'>
                    <div className='all-center'>
                        <img src={avatar_url} 
                        className='round-img'
                        alt=''
                        style={{width: '150px'}} />
                        <h1>{name}</h1>
                        <p>location: {location}</p>
                    </div>
                    <div>
                        {bio && 
                        (<Fragment>
                            <h3>bio</h3>
                            <p>{bio}</p>
                        </Fragment>)}
                        <a href={html_url} className='btn btn-dark my-1'>Visit Github Prof</a>
                    </div>
                </div>
                <div className='card text-center'>
                        <div className='badge badge-primary'>Followers: {followers}</div>
                        <div className='badge badge-secondary'>Following: {following}</div>
                        <div className='badge badge-light'>Public Repos: {public_repos} </div>
                        <div className='badge badge-dark'>Public Gists: {public_gists}</div>
                        <div className='badge badge-success'>Website: {blog}</div>
                </div>
            </Fragment>
        )
}

export default User
