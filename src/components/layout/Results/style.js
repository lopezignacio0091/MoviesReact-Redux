import {makeStyles} from '@material-ui/core'

const centeredStyleObj = {
    alignItems:'center',
    justifyContent:'center'
}

export default makeStyles({

container:{
    height:'300vh',
    flexDirection:'column',
    ...centeredStyleObj
},
cardContainer:{
    flexDirection:'column',
    width:800,
    height:700,
    padding:'2rem',
    marginTop:'5rem',
    ...centeredStyleObj
},
row:{
    flexDirection:'column',
    ...centeredStyleObj

},
title:{
    fontSize:'4rem',
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
},
cardDay:{
    flexDirection:'column',
    width:400,
    height:550,
    padding:'2rem',
    marginTop:'4rem',
    ...centeredStyleObj
},
containerCards:{
    marginTop:'5rem'
}
});