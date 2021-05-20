
import React, {useContext} from 'react';
import {Image} from 'react-native';
import PedidoContext from '../context/pedidos/pedidosContext';
import{
Container,
Content,
Footer,
FooterTab,
Button,
Body,
Text,
H1,
Card,
CardItem
} from 'native-base'
import { useNavigation } from '@react-navigation/native';
import globalStyles from '../styles/global';

const DetallePedido = () => {

//Pedido context

const {platillo} = useContext(PedidoContext);
const {nombre, imagen, descripcion, precio} = platillo;

//Redireccionar 
const navigation = useNavigation();

return ( 
<Container style={globalStyles.contenedor}>
    <Content style={globalStyles.contenido}>
        <H1 style={globalStyles.titulo}>{nombre}</H1>
        <Card>
            <CardItem>
                <Body>
                    <Image style={globalStyles.imagenes} source={{uri: imagen}} />
                    <Text style={{marginTop:20}}>{descripcion}</Text>
                    <Text style={globalStyles.contidad}>Precio: $ {precio}</Text>
                </Body>
            </CardItem>
        </Card>
    </Content>
    <Footer>
        <FooterTab>
            <Button style={globalStyles.boton}
            onPress={() => navigation.navigate("FormularioPlatillo")
            }>
                <Text style={{color:'#FFDA00'}}>Ordenar este platillo</Text>
            </Button>
        </FooterTab>
    </Footer>
</Container>
);
}
export default DetallePedido;