import React, { Component } from 'react';
import { FlatList, Alert } from 'react-native';
import { ListItem } from 'react-native-elements';
import { baseUrl } from '../comun/comun';
import { connect } from 'react-redux';
import { IndicadorActividad } from './IndicadorActividadComponent';
import { borrarFavorito } from '../redux/ActionCreators';
import Swipeout from 'react-native-swipeout';


const mapStateToProps = state => {
    return {
        excursiones: state.excursiones,
        favoritos: state.favoritos
    }
}

const mapDispatchToProps = dispatch => ({
    borrarFavorito: (excursionId) => dispatch(borrarFavorito(excursionId)),
})

class VistaFavoritos extends Component {

    // borrarFavorito(excursionId) {
    //     this.props.borrarFavorito(excursionId);
    // }

    lanzarAlerta = (item) =>
        Alert.alert(
            "¿Borrar excursión favorita?",
            "Confirme que desea borrar la excursión: " + item.nombre,
            [
                {
                    text: "Cancelar",
                    onPress: () => console.log(item.nombre + ' Favorito no borrado'),
                    style: "cancel"
                },
                { text: "OK", onPress: () => this.props.borrarFavorito(item.id) }
            ],
            { cancelable: false }
        );

    render() {
        const { navigate } = this.props.navigation;

        const renderFavoritoItem = ({ item, index }) => {
            const rightButton = [{
                text: 'Borrar',
                type: 'delete',
                onPress: () => {this.lanzarAlerta(item)}
            }];

            return (
                <Swipeout right={rightButton} autoClose={true}>
                    <ListItem 
                        key={index}
                        title={item.nombre}
                        subtitle={item.descripcion}
                        hideChevron={true}
                        onPress={() => navigate('DetalleExcursion', { excursionId: item.id })}
                        onLongPress={() => {this.lanzarAlerta(item)}}
                        leftAvatar={{ source: { uri: item.imagen } }}
                    />
                </Swipeout>
            );
        }

        if (this.props.excursiones.isLoading) {
            return (
                <IndicadorActividad />
            );
        }

        else if (this.props.excursiones.errMess) {
            return (
                <View>
                    <Text>{this.props.excursiones.errMess}</Text>
                </View>
            );
        }

        else {
            let favoritas = [];
            for (var i = 0; i < this.props.favoritos.length; i++) {
                favoritas.push(this.props.excursiones.excursiones[this.props.favoritos[i]]);
            }
            return (
                <FlatList
                    data={favoritas}
                    renderItem={renderFavoritoItem}
                    keyExtractor={item => item.id.toString()}
                />
            );
        }

    };
}
export default connect(mapStateToProps, mapDispatchToProps)(VistaFavoritos);