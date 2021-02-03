import {makeStyles} from '@material-ui/core'

const centeredStyleObj = {

    display:'flex',
    alignItems:'center',
    justifyContent:'center'
}

export default makeStyles({

container:{
    height:'100vh',
    flexDirection:'column',
    ...centeredStyleObj
},
cardContainer:{
    flexDirection:'column',
    width:600,
    height:300,
    padding:'2rem',
    ...centeredStyleObj
},
title:{
    fontSize:'4rem'

},
titleGridContainer:{
    ...centeredStyleObj
},
textFieldSearch:{
    width:'90%'
},
buttonSearch:{
    marginLeft:'.5rem'
},
buttonsContainer:{
    marginTop:'.5rem'
},
movieIcon:{
    fontSize:'4rem'
}
});