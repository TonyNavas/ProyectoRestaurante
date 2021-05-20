import React, {useContext} from 'react';
import {Button, Text} from 'native-base';
import globalStyles from '../styles/global';
import { useNavigation } from '@react-navigation/native';
import PedidoContext from '../context/pedidos/pedidosContext';

const ButonResumen = () => {

    //Leer el objeto de pedido

    const {pedido} = useContext(PedidoContext);

    if(pedido.length === 0) return null;

    const navigation = useNavigation();
    return ( 
        <Button 
        onPress={() => navigation.navigate('ResumenPedido')}
        style={globalStyles.boton2}>
            <Text style={globalStyles.botonText2}>Ir a Pedido</Text>
        </Button>
     );
}
 
export default ButonResumen;