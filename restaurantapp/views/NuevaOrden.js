import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Container, Button, Text} from 'native-base';
import globalStyles from '../styles/global';
import { useNavigation } from '@react-navigation/core';

const NuevaOrden = () => {

    const navigation = useNavigation();

    return ( 
        <Container style={globalStyles.contenedor}>
            <View style={[globalStyles.contenido, styles.contenido]}>
            <Button
            block
            rounded
            onPress={() => navigation.navigate('Menu')}
            style={globalStyles.boton}>
            <Text style={globalStyles.botonText,{color:'#FFDA00'}}>Agregar nueva orden</Text>
            </Button>
            </View>
        </Container>
    );
}
const styles = StyleSheet.create({
    contenido:{
        flexDirection:'column',
        justifyContent:'center'
    }
})
export default NuevaOrden;