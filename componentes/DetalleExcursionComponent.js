import React, { Component } from 'react';
import { Text, View, ScrollView, FlatList, Modal } from 'react-native';
import { Card, Icon, Rating, Input, Button } from 'react-native-elements';
import { baseUrl } from '../comun/comun';
import { connect } from 'react-redux';
import { postFavorito, postComentario } from '../redux/ActionCreators';
import { colorGaztaroaOscuro } from '../comun/comun';

const mapStateToProps = state => {
    return {
        excursiones: state.excursiones,
        comentarios: state.comentarios,
        favoritos: state.favoritos,
    }
}

const mapDispatchToProps = dispatch => ({
    postFavorito: (excursionId) => dispatch(postFavorito(excursionId)),
    postComentario: (excursionId, valoracion, autor, comentario) => dispatch(postComentario(excursionId, valoracion, autor, comentario)),
})

function RenderExcursion(props) {

    const excursion = props.excursion;

    if (excursion != null) {
        return (
            <Card
                featuredTitle={excursion.nombre}
                image={{ uri: baseUrl + excursion.imagen }}>
                <Text style={{ margin: 10 }}>
                    {excursion.descripcion}
                </Text>
                <View style={{
                    flex: 1,
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
                >
                    <Icon
                        raised
                        reverse
                        name={props.favorita ? 'heart' : 'heart-o'}
                        type='font-awesome'
                        color='#f50'
                        onPress={() => props.favorita ? console.log('La excursión ya se encuentra entre las favoritas') : props.onPress()}
                    />
                    <Icon
                        raised
                        reverse
                        name='pencil'
                        type='font-awesome'
                        color={colorGaztaroaOscuro}
                        onPress={() => props.toggleModal()}
                    />
                </View>
            </Card>
        );
    }
    else {
        return (<View></View>);
    }
}

function RenderComentario(props) {

    const comentarios = props.comentarios;

    const renderCommentarioItem = ({ item, index }) => {

        return (
            <View key={index} style={{ margin: 10 }}>
                <Text style={{ fontSize: 14 }}>{item.comentario}</Text>
                <Text style={{ fontSize: 12 }}>{item.valoracion} Stars</Text>
                <Text style={{ fontSize: 12 }}>{'-- ' + item.autor + ', ' + item.dia} </Text>
            </View>
        );
    };

    return (
        <Card title='Comentarios' >
            <FlatList
                data={comentarios}
                renderItem={renderCommentarioItem}
                keyExtractor={item => item.id.toString()}
            />
        </Card>
    );
}


class DetalleExcursion extends Component {
    constructor(props) {
        super(props);
        this.state = {
            autor: '',
            valoracion: 3,
            comentario: '',
            showModal: false
        }
    }

    marcarFavorito(excursionId) {
        this.props.postFavorito(excursionId);
    }

    toggleModal() {
        this.setState({ showModal: !this.state.showModal });
    }

    cerrarModal() {
        this.toggleModal();
        this.setState({
            autor: '',
            valoracion: 3,
            comentario: '',
            showModal: false
        });
    }

    gestionarComentario(excursionId) {
        this.props.postComentario(excursionId, this.state.valoracion, this.state.autor, this.state.comentario); 
        this.cerrarModal(); 
    }

    render() {

        const { excursionId } = this.props.route.params;
        return (
            <ScrollView>
                <RenderExcursion
                    toggleModal={() => this.toggleModal()}
                    excursion={this.props.excursiones.excursiones[+excursionId]}
                    favorita={this.props.favoritos.some(el => el === excursionId)}
                    onPress={() => this.marcarFavorito(excursionId)}
                />
                <RenderComentario
                    comentarios={this.props.comentarios.comentarios.filter((comentario) => comentario.excursionId === excursionId)}
                />

                <Modal 
                    visible={this.state.showModal}
                    onDismiss={() => { this.cerrarModal() }}
                    onRequestClose={() => { this.cerrarModal() }}>
                    <View style={{
                        flex: 1,
                        margin: 10,
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                        <Rating
                            showRating
                            fractions="{1}"
                            startingValue={this.props.valoracion}
                            onFinishRating={this.finValoracion} />
                        <Input
                            placeholder="Autor"
                            leftIcon={{ type: 'font-awesome', name: 'user' }}
                            onChangeText={autor => this.setState({ autor: autor })}
                        />
                        <Input
                            placeholder="Comentario"
                            leftIcon={{ type: 'font-awesome', name: 'comment-o' }}
                            onChangeText={comentario => this.setState({ comentario: comentario })}
                        />
                        <Button
                            onPress={() => this.gestionarComentario(excursionId)}
                            title="Enviar"
                            color={colorGaztaroaOscuro}
                        />
                        <Text></Text>
                        <Button
                            onPress={() => this.cerrarModal()}
                            title="Cancelar"
                            color={colorGaztaroaOscuro}
                        />

                    </View>

                </Modal>
            </ScrollView>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DetalleExcursion);