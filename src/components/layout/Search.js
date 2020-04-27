import React, { useState, useContext } from 'react';
import GithubContext from '../../components/context/github/githubContext'
import AlertContext from '../../components/context/alert/alertContext'

//antes era una clase class Search bla bla
// no usamos this.props porque lo deconstruimos en los parametros
const Search  = () => {

    //inicializamos el contexto de la app
    const githubContext = useContext(GithubContext);
    const alertContext = useContext(AlertContext);
    const { users, clearUsers } = githubContext;
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
            alertContext.setAlert('Please enter Something','light');
        }else{
        //pasamos el resultado del search para rriba como props
            githubContext.searchUsers(text);
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
            {users.length > 0 && <button className='btn btn-light btn-block' onClick={clearUsers}>Clear</button>}
        </div>
    );
}


export default Search
