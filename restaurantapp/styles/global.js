import {StyleSheet} from 'react-native';
import { color } from 'react-native-reanimated';

const globalStyles = StyleSheet.create({
    contenedor:{
        flex:1,
    },
    contenido:{
        marginHorizontal:'2.5%',
        flex:1,
    },
    boton:{
        backgroundColor:'black',
    },
    boton2:{
        backgroundColor:'#FFDA00',
    },
    botonText:{
        fontWeight:'bold',
        color:'white',
    },
    botonText3:{
        fontWeight:'bold',
        color:'yellow',
    },
    botonText2:{
        fontWeight:'bold',
        color:'black',
        
    },
    titulo:{
        textAlign:'center',
        marginTop:40,
        marginBottom:20,
        fontSize:30,
        fontWeight:'bold'
    },
    imagenes:{
        height:300,
        width:'100%'
    },
    cantidad:{
        marginVertical:20,
        textAlign:'center',
        fontSize:24,
        fontWeight:'bold',
        color:'black'
    }
});
export default globalStyles;