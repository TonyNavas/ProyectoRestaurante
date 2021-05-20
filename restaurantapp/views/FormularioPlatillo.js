import React, {useState, useContext, useEffect} from 'react';
import {Alert} from 'react-native';
import{
Container,
Content,
Form,
Icon,
Button,
Input,
Grid,
Col,
Text,
Footer,
FooterTab
} from 'native-base'
import { useNavigation } from '@react-navigation/native';
import globalStyles from '../styles/global';
import PedidoContext from '../context/pedidos/pedidosContext';

const FormularioPedido = () => {

    const [cantidad, guardarCantidad] =useState(1);
    const [total, guardarTotal] = useState(0);
    //Context
    const {platillo, guardarPedido} = useContext(PedidoContext);
    const {precio} = platillo;

    //Redireccionar

    const navigation = useNavigation();

    //En cuanto el componente carga calcular el total a pagar
    useEffect(() =>{
        CalcularTotal()
    },[cantidad])
    //Calcular el total del platillo por su cantidad
    const CalcularTotal = () =>{
        const totalPagar = precio * cantidad;
        guardarTotal(totalPagar);
    }
    //Decrementar uno
    const decrementarUno = () =>{

        if(cantidad > 1){
            const nuevaCantidad = parseInt(cantidad) - 1;
            guardarCantidad(nuevaCantidad)
        }
    }
    //Incrementar en uno la cantidads
    const incrementarUno = () =>{
        const nuevaCantidad = parseInt(cantidad) + 1;
        guardarCantidad(nuevaCantidad)
    }
    //Confirmas si las orden es correcta
    const confirmarOrden = () =>{
        Alert.alert(
            '¿Deseas confirmar tu pedido?',
            'Un pedido confirmado ya no se podra modificar',
            [
                {
                    text: 'Confirmar',
                    onPress: () =>{
                        //Almacenar el pedido al pedido principal
                        const pedido = {
                            ...platillo,
                                cantidad,
                                total
                        }
                        guardarPedido(pedido);

                        //Navegar hacia el resumen
                        navigation.navigate("ResumenPedido")

                    },
                },
                {
                    text: 'Cancelar',
                    style: 'cancel'
                }
            ]
        )
    }

return ( 
<Container>

<Content>
<Form>
<Text style={globalStyles.titulo}>Cantidad</Text>
<Grid>
    <Col>
    <Button
    props
    dark
    style={{ height: 80, justifyContent:'center', width:100}}
    onPress={() => decrementarUno()}>
        <Icon style={{fontSize:40,color:'yellow'}} name="remove"/>
    </Button>
    </Col>
    <Col>
    <Input
    style={{marginLeft:40, fontSize:20}}
    value={cantidad.toString()}
    keyboardType="numeric"
    onChangeText={ cantidad  => guardarCantidad(cantidad)}
    />
    </Col>
    <Button
    props
    dark
    style={{ height: 80, justifyContent:'center', width:100}}
    onPress={() => incrementarUno()}>
        <Icon style={{fontSize:40, color:'yellow'}} name="add"/>
    </Button>
</Grid>
<Text style={globalStyles.cantidad}>Total: ${total}</Text>
</Form>
</Content>
<Footer>
        <FooterTab>
            <Button style={globalStyles.boton}
            onPress={() => confirmarOrden()}
            >
                <Text style={{color:'yellow'}}>Agregar al pedido</Text>
            </Button>
        </FooterTab>
    </Footer>
</Container>
);
}
export default FormularioPedido;