import React, { Component } from 'react';
import { Button, View, Text } from 'react-native';
import NetInfo from '@react-native-community/netinfo';

class Network extends Component {
    state = {
        networkinfo: "",
    };

    componentDidMount() {
        NetInfo.fetch().then(networkinfo => {
            this.setState({ networkinfo: networkinfo });
            // prueba = networkinfo.type;
            // console.log(networkinfo);
        });
    }



    render() {
        let info = <Text></Text>;
        // console.log(this.state);
        if (this.state.networkinfo != "") {
            // console.log("he entrado");
            // console.log(this.state);
            // console.log(this.state.networkinfo.isConnected);
            info =
                <Text
                    style={{
                        margin: 10,
                        fontSize: 18,
                    }}
                >
                    Estado: Conectado {this.state.networkinfo.isConnected.toString()} {'\n'}{'\n'}
                Tipo de red: {this.state.networkinfo.type} {'\n'}{'\n'}
                Dirección ip: {this.state.networkinfo.details.ipAddress} {'\n'}{'\n'}
                </Text>
        }

        return (
            <View style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
                justifyContent: 'space-evenly',
            }}>
                {info}
                {/* <Text style={{ margin: 10 }}>
                    {/* Estado: {this.state.networkinfo.details.isConnected} */}
                {/* </Text>  */}
            </View>
        );
    }
}

export default Network;