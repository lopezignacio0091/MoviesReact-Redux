import React  from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
//como esta clase no tiene state se la denomina stateless
// por tal motivo carece de sentido que sea una clase, pasa a funcion
// deconstruir el objecto recibido como parametro en sus attr
const UsersItem = ({user : {login, avatar_url, html_url}}) => {

    return (
        <div className='card text-center'>
            <img src={avatar_url} alt='' className='round-img' style={{width : '60px'}} />
            <h3>{login}</h3>

            <div>
                <Link to={`/user/${login}`} className='btn btn-dark btn-sm my-1'> More </Link>
            </div>
        </div>
    )
}
        
UsersItem.propTypes = {
    user : PropTypes.object.isRequired,
}


export default UsersItem
