    import React, {useContext, useEffect} from 'react';
    import {Alert} from 'react-native';
    import{Container,Content,List,ListItem,Thumbnail,Text,Left,Body,Button,H1,Footer,FooterTab} from 'native-base'
    import { useNavigation } from '@react-navigation/native';
    import globalStyles from '../styles/global';
    import PedidoContext from '../context/pedidos/pedidosContext';
    import firebase from '../firebase';


    const ResumenPedido = () => {
        
        const navigation = useNavigation();
    
    //Context del pedido
    const {pedido, total, mostrarResumen, eliminarProducto, pedidoRealizado} = useContext(PedidoContext);

    useEffect(() =>{
        calcularTotal();
    },[pedido]);

    const calcularTotal = () =>{
        let nuevoTotal = 0;
        nuevoTotal = pedido.reduce((nuevoTotal, articulo) => nuevoTotal + articulo.total,0);
        mostrarResumen(nuevoTotal)
        
    }

    //Redireccionar a progreso pedido

    const  ProgresoPedido = () =>{
        Alert.alert(
            '¿Revisa tu pedido?',
            'Una vez que realizas tu pedido no prodras cambiarlo',
            [
                {
                    text: 'Confirmar',
                    onPress: async () =>{

                        //crear un objeto
                        const pedidoObj = {
                            tiempoentrega:0,
                            completado: false,
                            total:Number(total),
                            orden: pedido, //array
                            creado: Date.now()
                        }
                        //Escribir el pedido en firebase
                        try {
                            const pedido = await firebase.db.collection('ordenes').add(pedidoObj);
                            pedidoRealizado(pedido.id);
                            //Redireccionar a progreso
                            navigation.navigate("ProgresoPedido")
                        } catch (error) {
                            console.log(erro);
                        }
                        
                    },
                },
                {
                    text: 'Revisar',
                    style: 'cancel'
                }
            ]
        )
    }
    //Eliminar producto del pedido

    const confirmarEliminacion = id =>{
        Alert.alert(
            '¿Deseas eliminar este artículo?',
            'Una vez eliminado no se puede recuperar',
            [
                {
                    text: 'Confirmar',
                    onPress: () =>{
                        //Eliminar del estate
                        eliminarProducto(id);
                    },
                },
                {
                    text: 'Cancelar',
                    style: 'cancel'
                }
            ]
        )
    }

    //Eliminar un articulo del carrito

    return ( 
    <Container style={globalStyles.contenedor}>
    <Content style={globalStyles.contenido}>
    <H1 style={globalStyles.titulo}>Resumen del pedido</H1>
    {pedido.map((platillo, i) =>{

    const  {cantidad, nombre, imagen, id, precio} = platillo;
    return(
    <List key={id + i}>
    <ListItem thumbnail>
    <Left>
    <Thumbnail large square source={{uri: imagen}}/>
    </Left>
    <Body>
    <Text>{nombre}</Text>
    <Text>Cantidad: $ {cantidad}</Text>
    <Text>Precio: $ {precio}</Text>
    
    <Button
    onPress={() => confirmarEliminacion(id)}
    full
    danger
    style={{marginTop:10}}
    >
        <Text style={[globalStyles.botonText]}>Eliminar</Text>
    </Button>

    </Body>
    </ListItem>
    </List>
    )
    })}
    <Text style={globalStyles.cantidad}>Total a pagar: $ {total}</Text>

    <Button
    full
    style={[globalStyles.boton2, {marginTop:20}]}
    onPress={() =>navigation.navigate('Menu')}>
        <Text style={globalStyles.botonText2}>Seguir piediendo</Text>
    </Button>
    </Content>

    <Footer>
        <FooterTab>
        <Button
    full
    style={globalStyles.boton}
    onPress={() => ProgresoPedido()}>
        <Text style={globalStyles.botonText3}>Confirmar pedido</Text>
    </Button>
        </FooterTab>
    </Footer>
    </Container>
    );
    }
    export default ResumenPedido;