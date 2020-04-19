import React, { useState } from 'react';
import PropTypes from 'prop-types';

//antes era una clase class Search bla bla
// no usamos this.props porque lo deconstruimos en los parametros
const Search  = ({clearUsers , showClear, searchUsers, setAlert}) => {
    // importamos useState
    //deconstruimos nuestro estado segun la cantidad de atributos que tenga
    const [text,setText] = useState('');
    
    // a todas las funciones les agregamos el const para que puedan ser invocadas desde un componenete funcional
    const onChange = (e) => {

        //dos formas distintas de setear el evento con el nombre y valor del form
        //this.setState({text : e.target.value});
        //this.setState({[e.target.name] : e.target.value});        
        
        //cambiamos la forma de setear el state con useState
        setText(e.target.value);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        // eslint-disable-next-line eqeqeq
        if(text == ''){
            setAlert('Please enter Something','light');
        }else{
        //pasamos el resultado del search para rriba como props
            searchUsers(text);
            setText('');
        }
    }

    //si no lo hiciera con arrow functions deberia hacer un onSubmit={this.onSubmit.bind(this)} para poder utilizar una funcion comun
    // con arrow function el bindeo se hace automatico
     //destructuring para simplificar el pasaje de props

    //no hay render porque es un componente funcional 
    return (
        <div>
            <form className='form' onSubmit={onSubmit}>
                <input type='text' 
                name='text' 
                placeholder='Search Users...' 
                value={text} 
                onChange={onChange}/>
                
                <input type='submit' 
                value='Search' 
                className='btn btn-dark btn-block'/>

            </form>
            {showClear && <button className='btn btn-light btn-block' onClick={clearUsers}>Clear</button>}
        </div>
    );
}

// lo ponemos aca porqeu cambiamos de clase a componente funcional
Search.propTypes = {
    searchUsers : PropTypes.func.isRequired,
    clearUsers : PropTypes.func.isRequired,
    showClear : PropTypes.bool.isRequired,
    setAlert : PropTypes.func.isRequired,
}

export default Search
