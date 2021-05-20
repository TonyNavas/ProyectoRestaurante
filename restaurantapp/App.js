import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import NuevaOrden from './views/NuevaOrden';
import Menu from './views/Menu';
import DetallePlatillo from './views/DetallePlatillo';
import FormularioPlatillo from './views/FormularioPlatillo';
import ResumenPedido from './views/ResumenPedido';
import ProgresoPedido from './views/ProgresoPedido';

//Components

import ButonResumen from './components/BotonResumen';

//Importar State de context
import FirebaseState from './context/firebase/firebaseState';
import PedidoState from './context/pedidos/pedidosState';

const App = () => {

  const Stack = createStackNavigator();

  return (
    <>
    <FirebaseState>
    <PedidoState>
    <NavigationContainer>
      <Stack.Navigator
      screenOptions={{
        headerStyle:{
          backgroundColor:'#FFDA00',
        },
        headerTitleStyle:{
          fontWeight:'bold'
        },
        headerTintColor:'#000'
      }}>
        <Stack.Screen
          name="NuevaOrden"
          component={NuevaOrden}
          options={{
            title:"Nueva Orden",
            headerTintColor:'white'
          }}
        />
                <Stack.Screen
          name="Menu"
          component={Menu}
          options={{
            title:"Nuestro menú",
            headerTintColor:'white',
            headerRight: props => <ButonResumen/>
          }}
        />
                <Stack.Screen
          name="DetallePlatillo"
          component={DetallePlatillo}
          options={{
            title:"Detalles del platillo",
            headerTintColor:'white'
          }}
        />
                <Stack.Screen
          name="FormularioPlatillo"
          component={FormularioPlatillo}
          options={{
            title:"Ordenar platillos",
            headerTintColor:'white'
          }}
        />
                <Stack.Screen
          name="ResumenPedido"
          component={ResumenPedido}
          options={{
            title:"Resumen del pedido",
            headerTintColor:'white'
          }}
        />
                <Stack.Screen
          name="ProgresoPedido"
          component={ProgresoPedido}
          options={{
            title:"Progreso del pedido",
            headerTintColor:'white'
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
    </PedidoState>
    </FirebaseState>
    </>
  );
};

export default App;
