import React, { Component } from 'react';
import Home from './HomeComponent';
import Calendario from './CalendarioComponent';
import QuienesSomos from './QuienesSomosComponent';
import Contacto from './ContactoComponent';
import DetalleExcursion from './DetalleExcursionComponent';
import VistaFavoritos from './VistaFavoritosComponent';
import PruebaEsfuerzo from './PruebaEsfuerzoComponent';
import Galeria from './GaleriaComponent';
import Network from './NetworkComponent';
import SignUp from './SignUpComponent';
import Login from './LoginComponent';
import { View, StyleSheet, Image, Text } from 'react-native';
import { NavigationContainer, DrawerActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import { Icon } from 'react-native-elements';
import { SafeAreaView } from 'react-native-safe-area-context';
import Constants from 'expo-constants';
import { colorGaztaroaClaro, colorGaztaroaOscuro } from '../comun/comun';
import { connect } from 'react-redux';
import { fetchExcursiones, fetchComentarios, fetchCabeceras, fetchActividades } from '../redux/ActionCreators';

const mapStateToProps = state => {
  return {
    excursiones: state.excursiones,
    comentarios: state.comentarios,
    cabeceras: state.cabeceras,
    actividades: state.actividades
  }
}

const mapDispatchToProps = dispatch => ({
  fetchExcursiones: () => dispatch(fetchExcursiones()),
  fetchComentarios: () => dispatch(fetchComentarios()),
  fetchCabeceras: () => dispatch(fetchCabeceras()),
  fetchActividades: () => dispatch(fetchActividades()),
})

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function HomeNavegador({ navigation }) {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      headerMode="screen"
      screenOptions={{
        headerTintColor: '#fff',
        headerStyle: { backgroundColor: colorGaztaroaOscuro },
        headerTitleStyle: { color: '#fff' },
        headerLeft: () => (<Icon name="menu" size={28} color='white' onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())} />),
      }}
    >
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          title: 'Campo Base',
        }}
      />
    </Stack.Navigator>
  );
}

function QuienesSomosNavegador({ navigation }) {
  return (
    <Stack.Navigator
      initialRouteName="QuienesSomos"
      headerMode="screen"
      screenOptions={{
        headerTintColor: '#fff',
        headerStyle: { backgroundColor: colorGaztaroaOscuro },
        headerTitleStyle: { color: '#fff' },
        headerLeft: () => (<Icon name="menu" size={28} color='white' onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())} />),
      }}
    >
      <Stack.Screen
        name="QuienesSomos"
        component={QuienesSomos}
        options={{
          title: 'Quiénes somos',
        }}
      />
    </Stack.Navigator>
  );
}

function CalendarioNavegador({ navigation }) {
  return (
    <Stack.Navigator
      initialRouteName="Calendario"
      headerMode="screen"
      screenOptions={{
        headerTintColor: '#fff',
        headerStyle: { backgroundColor: colorGaztaroaOscuro },
        headerTitleStyle: { color: '#fff' },

      }}
    >
      <Stack.Screen
        name="Calendario"
        component={Calendario}
        options={{
          title: 'Calendario Gaztaroa',
          headerLeft: () => (<Icon name="menu" size={28} color='white' onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())} />),
        }}
      />
      <Stack.Screen
        name="DetalleExcursion"
        component={DetalleExcursion}
        options={{
          title: 'Detalle Excursión',
        }}
      />
    </Stack.Navigator>
  );
}

function ContactoNavegador({ navigation }) {
  return (
    <Stack.Navigator
      initialRouteName="Contacto"
      headerMode="screen"
      screenOptions={{
        headerTintColor: '#fff',
        headerStyle: { backgroundColor: colorGaztaroaOscuro },
        headerTitleStyle: { color: '#fff' },
        headerLeft: () => (<Icon name="menu" size={28} color='white' onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())} />),
      }}
    >
      <Stack.Screen
        name="Contacto"
        component={Contacto}
        options={{
          title: 'Contacto',
        }}
      />
    </Stack.Navigator>
  );
}

function PruebaEsfuerzoNavegador({ navigation }) {
  return (
    <Stack.Navigator
      initialRouteName="PruebaEsfuerzo"
      headerMode="screen"
      screenOptions={{
        headerTintColor: '#fff',
        headerStyle: { backgroundColor: colorGaztaroaOscuro },
        headerTitleStyle: { color: '#fff' },
        headerLeft: () => (<Icon name="menu" size={28} color='white' onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())} />),
      }}
    >
      <Stack.Screen
        name="PruebaEsfuerzo"
        component={PruebaEsfuerzo}
        options={{
          title: 'Prueba de esfuerzo',
        }}
      />
    </Stack.Navigator>
  );
}

function VistaFavoritosNavegador({ navigation }) {
  return (
    <Stack.Navigator
      initialRouteName="VistaFavoritos"
      headerMode="screen"
      screenOptions={{
        headerTintColor: '#fff',
        headerStyle: { backgroundColor: colorGaztaroaOscuro },
        headerTitleStyle: { color: '#fff' },
        headerLeft: () => (<Icon name="menu" size={28} color='white' onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())} />),
      }}
    >
      <Stack.Screen
        name="VistaFavoritos"
        component={VistaFavoritos}
        options={{
          title: 'Excursiones favoritas',
        }}
      />
    </Stack.Navigator>
  );
}

function GaleriaNavegador({ navigation }) {
  return (
    <Stack.Navigator
      initialRouteName="Galeria"
      headerMode="screen"
      screenOptions={{
        headerTintColor: '#fff',
        headerStyle: { backgroundColor: colorGaztaroaOscuro },
        headerTitleStyle: { color: '#fff' },
        headerLeft: () => (<Icon name="menu" size={28} color='white' onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())} />),
      }}
    >
      <Stack.Screen
        name="Galeria"
        component={Galeria}
        options={{
          title: 'Galería',
        }}
      />
    </Stack.Navigator>
  );
}

function NetworkNavegador({ navigation }) {
  return (
    <Stack.Navigator
      initialRouteName="network"
      headerMode="screen"
      screenOptions={{
        headerTintColor: '#fff',
        headerStyle: { backgroundColor: colorGaztaroaOscuro },
        headerTitleStyle: { color: '#fff' },
        headerLeft: () => (<Icon name="menu" size={28} color='white' onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())} />),
      }}
    >
      <Stack.Screen
        name="Network"
        component={Network}
        options={{
          title: 'Estado de la red',
        }}
      />
    </Stack.Navigator>
  );
}

function SignUpNavegador({ navigation }) {
  return (
    <Stack.Navigator
      initialRouteName="signup"
      headerMode="screen"
      screenOptions={{
        headerTintColor: '#fff',
        headerStyle: { backgroundColor: colorGaztaroaOscuro },
        headerTitleStyle: { color: '#fff' },
        headerLeft: () => (<Icon name="menu" size={28} color='white' onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())} />),
      }}
    >
      <Stack.Screen
        name="signup"
        component={SignUp}
        options={{
          title: 'Regístrate',
        }}
      />
    </Stack.Navigator>
  );
}

function LoginNavegador({ navigation }) {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      headerMode="screen"
      screenOptions={{
        headerTintColor: '#fff',
        headerStyle: { backgroundColor: colorGaztaroaOscuro },
        headerTitleStyle: { color: '#fff' },
        headerLeft: () => (<Icon name="menu" size={28} color='white' onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())} />),
      }}
    >
      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          title: 'Inicia sesión',
        }}
      />
    </Stack.Navigator>
  );
}

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <SafeAreaView style={styles.container} forceInset={{ top: 'always', horizontal: 'never' }}>
        <View style={styles.drawerHeader}>
          <View style={{ flex: 1 }}>
            <Image source={{ uri: "https://firebasestorage.googleapis.com/v0/b/appgaztaroa-8ba7a.appspot.com/o/logo.png?alt=media&token=c5b47238-7485-470f-994c-689941d7b6a8" }} style={styles.drawerImage} />
          </View>
          <View style={{ flex: 2 }}>
            <Text style={styles.drawerHeaderText}> Gaztaroa</Text>
          </View>
        </View>
        <DrawerItemList {...props} />
      </SafeAreaView>
    </DrawerContentScrollView>
  );
}

function DrawerNavegador() {
  return (
    <Drawer.Navigator
      drawerStyle={{
        backgroundColor: colorGaztaroaClaro,
      }}
      initialRouteName="Home"
      drawerContent={props => <CustomDrawerContent {...props} />}
    >

      <Drawer.Screen name="Campo base" component={HomeNavegador}
        options={{
          drawerIcon: ({ tintColor }) => (
            <Icon
              name='home'
              type='font-awesome'
              size={24}
              color={tintColor}
            />
          )
        }}
      />

      <Drawer.Screen name="Regístrate" component={SignUpNavegador}
        options={{
          drawerIcon: ({ tintColor }) => (
            <Icon
              name='user-plus'
              type='font-awesome'
              size={24}
              color={tintColor}
            />
          )
        }}
      />

      <Drawer.Screen name="Inicia sesión" component={LoginNavegador}
        options={{
          drawerIcon: ({ tintColor }) => (
            <Icon
              name='user'
              type='font-awesome'
              size={24}
              color={tintColor}
            />
          )
        }}
      />

      <Drawer.Screen name="Quiénes somos" component={QuienesSomosNavegador}
        options={{
          drawerIcon: ({ tintColor }) => (
            <Icon
              name='info-circle'
              type='font-awesome'
              size={24}
              color={tintColor}
            />
          )
        }}
      />
      <Drawer.Screen name="Calendario" component={CalendarioNavegador}
        options={{
          drawerIcon: ({ tintColor }) => (
            <Icon
              name='calendar'
              type='font-awesome'
              size={24}
              color={tintColor}
            />
          )
        }}
      />
      <Drawer.Screen name="Contacto" component={ContactoNavegador}
        options={{
          drawerIcon: ({ tintColor }) => (
            <Icon
              name='address-card'
              type='font-awesome'
              size={22}
              color={tintColor}
            />
          )
        }}
      />
      <Drawer.Screen name="Prueba de esfuerzo" component={PruebaEsfuerzoNavegador}
        options={{
          drawerIcon: ({ tintColor }) => (
            <Icon
              name='heartbeat'
              type='font-awesome'
              size={22}
              color={tintColor}
            />
          )
        }}
      />
      <Drawer.Screen name="Excursiones Favoritas" component={VistaFavoritosNavegador}
        options={{
          drawerIcon: ({ tintColor }) => (
            <Icon
              name='thumbs-up'
              type='font-awesome'
              size={22}
              color={tintColor}
            />
          )
        }}
      />
      <Drawer.Screen name="Galeria" component={GaleriaNavegador}
        options={{
          drawerIcon: ({ tintColor }) => (
            <Icon
              name='image'
              type='font-awesome'
              size={24}
              color={tintColor}
            />
          )
        }}
      />

      <Drawer.Screen name="Network" component={NetworkNavegador}
        options={{
          drawerIcon: ({ tintColor }) => (
            <Icon
              name='wifi'
              type='font-awesome'
              size={24}
              color={tintColor}
            />
          )
        }}
      />
    </Drawer.Navigator>

  );
}

class Campobase extends Component {

  componentDidMount() {
    this.props.fetchExcursiones();
    this.props.fetchComentarios();
    this.props.fetchCabeceras();
    this.props.fetchActividades();
  }

  render() {

    return (
      <NavigationContainer>
        <View style={{ flex: 1, paddingTop: Platform.OS === 'ios' ? 0 : Constants.statusBarHeight }}>
          <DrawerNavegador />
        </View>
      </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  drawerHeader: {
    backgroundColor: colorGaztaroaOscuro,
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    flexDirection: 'row'
  },
  drawerHeaderText: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold'
  },
  drawerImage: {
    margin: 10,
    width: 80,
    height: 60
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Campobase);