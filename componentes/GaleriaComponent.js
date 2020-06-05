import React, { Component } from 'react';
import { Button, Image, View } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';
import Constants from 'expo-constants';

class Galeria extends Component {
    state = {
        image: null,
    };

    componentDidMount() {
        this.getPermissionAsync();
    }

    getPermissionAsync = async () => {
        if (Constants.platform.ios) {
            const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
            if (status !== 'granted') {
                alert('Permite a esta aplicación acceder a la galería.');
            }
        }
    };

    cogerImagen = async () => {
        try {
            let result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.All,
                allowsEditing: true,
                aspect: [4, 3],
                quality: 1,
            });
            if (!result.cancelled) {
                this.setState({ image: result.uri });
            }
        } catch (E) {
        }
    };

    render() {
        let { image } = this.state;

        return (
            <View
                style={{
                    flex: 1,
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexDirection: 'column',
                    justifyContent: 'space-evenly',
                }}>
                {image && <Image source={{ uri: image }} style={{ width: 200, height: 200, borderWidth: 1, borderColor: '#000000', }}
                />}
                <Button title="Selecciona una imagen" onPress={this.cogerImagen} />

            </View>
        );
    }
}

export default Galeria;