import React, { Component } from 'react';
import { Text, ScrollView, View } from 'react-native';
import { Card } from 'react-native-elements';
// import { baseUrl } from  '../comun/comun';
import { connect } from 'react-redux';
import { IndicadorActividad } from './IndicadorActividadComponent';



const IOS_CLIENT_ID =
  "your-ios-client-id";
const ANDROID_CLIENT_ID =
  "your-android-client-id";

const mapStateToProps = state => {
    return {
        excursiones: state.excursiones,
        cabeceras: state.cabeceras,
        actividades: state.actividades
    }
}

function RenderItem(props) {

    const item = props.item;

    if (props.isLoading) {
        return (
            <IndicadorActividad />
        );
    } else if (props.errMess) {
        return (
            <View>
                <Text>{props.errMess}</Text>
            </View>
        );
    } else {
        if (item != null) {
            return (
                <Card
                    featuredTitle={item.nombre}
                    image={{ uri: item.imagen }}>
                    <Text style={{ margin: 10 }}> {item.descripcion}</Text>
                </Card>
            );
        } else {
            return (
                <View></View>
            );
        }
    }
}


class Home extends Component {

    render() {
        // console.log(this.props.route.params.email);
        let email =
            <Text style={{ flex: 1, justifyContent: 'center', marginLeft: 10 }}>
                Usuario no logeado
            </Text>;
        try {
            if (typeof this.props.route.params.email != "undefined") {
                email =
                    <Text style={{ flex: 1, justifyContent: 'center', marginLeft: 10 }}>
                        Usuario: {this.props.route.params.email}
                    </Text>
            }
        } catch {

        }
        

        return (
            <ScrollView>
                {email}
                <RenderItem
                    item={this.props.cabeceras.cabeceras.filter((cabecera) => cabecera.destacado)[0]}
                    isLoading={this.props.cabeceras.isLoading}
                    errMess={this.props.cabeceras.errMess} />
                <RenderItem
                    item={this.props.excursiones.excursiones.filter((excursion) => excursion.destacado)[0]}
                    isLoading={this.props.excursiones.isLoading}
                    errMess={this.props.excursiones.errMess} />
                <RenderItem
                    item={this.props.actividades.actividades.filter((actividad) => actividad.destacado)[0]}
                    isLoading={this.props.actividades.isLoading}
                    errMess={this.props.actividades.errMess} />

            </ScrollView>
        );
    }
}

export default connect(mapStateToProps)(Home);