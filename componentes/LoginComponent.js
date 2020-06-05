import React, { Component } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import * as Google from "expo-google-app-auth";


const ANDROID_CLIENT_ID =
    "925378179803-7eevhkoliua43kvmltagrpub92e6cc2k.apps.googleusercontent.com";

class Login extends Component {
    state = {
        email: "",
        password: ""
    };
    updateInputState = (key, val) => {
        if (key === "email") {
            this.setState(prevState => {
                return {
                    ...prevState,
                    email: val
                }
            });
        }
        if (key === "password") {
            this.setState(prevState => {
                return {
                    ...prevState,
                    password: val
                }
            });
        }
    };

    loginHandler = ({ navigate }) => {
        const apiKey = "AIzaSyDzFFltm2DUe55PFsBvpzVqe-lyRvuhk8Y";
        let url =
            "https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=" +
            apiKey;
        fetch(url, {
            method: "POST",
            body: JSON.stringify({
                email: this.state.email,
                password: this.state.password,
                returnSecureToken: true
            }),
            headers: {
                "Content-Type": "application/json"
            }
        })
            .catch(err => {
                console.log(err);
                alert("Authentication failed, please try again!");
            })
            .then(res => res.json())
            .then(parsedRes => {
                console.log(parsedRes);
                if (!parsedRes.idToken) {
                    // alert("An error occured, please check your data!");
                    alert(parsedRes.error.message);
                } else {
                    // this.props.navigator.push({
                    //     screen: "display-screens.HomeScreen",
                    //     title: "Home",
                    //     passProps: {
                    //         user: this.state.email
                    //     }
                    // });
                    // console.log(this.state.email)
                    navigate('Home', { email: this.state.email });
                }
            });
    };

    signInWithGoogle = async () => {
        try {
            const result = await Google.logInAsync({
                // iosClientId: IOS_CLIENT_ID,
                androidClientId: ANDROID_CLIENT_ID,
                scopes: ["profile", "email"]
            });

            if (result.type === "success") {
                console.log("LoginScreen.js.js 21 | ", result.user.givenName);
                this.props.navigation.navigate("Home", { email: result.user.email });
                // return result.accessToken;
            } else {
                return { cancelled: true };
            }
        } catch (e) {
            console.log('Error with login', e);
            return { error: true };
        }
    };


    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.contianer}>
                <View style={styles.headerView}>
                    <Text style={styles.header}>Login</Text>
                </View>
                <TextInput
                    placeholder="Email"
                    autoCapitalize="none"
                    value={this.state.email}
                    onChangeText={val => this.updateInputState("email", val)}
                    underlineColorAndroid="#1E90FF"
                    style={styles.input}
                />
                <TextInput
                    placeholder="Password"
                    autoCapitalize="none"
                    value={this.state.password}
                    onChangeText={val => this.updateInputState("password", val)}
                    underlineColorAndroid="#1E90FF"
                    style={styles.input}
                    secureTextEntry
                />
                <View style={styles.button}>
                    <Button
                        title="Login"
                        onPress={() => this.loginHandler({ navigate })}
                        style={styles.button}
                        disabled={(this.state.email === "" || this.state.password === "")} />
                </View>
                <Text style={styles.text}>Don't have an account?
                    <Text onPress={() => navigate('Regístrate')}
                        style={styles.navigateText}> Login </Text>
                </Text>
                <Button title="Login with Google" onPress={this.signInWithGoogle} />
            </View>
        )
    }
}
const styles = StyleSheet.create({
    contianer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    headerView: {
        marginBottom: 20
    },
    header: {
        fontWeight: "bold",
        fontSize: 26,
        color: "#1E90FF"
    },
    text: {
        color: "black"
    },
    navigateText: {
        color: "#1E90FF"
    },
    input: {
        width: "70%"
    },
    button: {
        marginTop: 15,
        marginBottom: 15
    }
});
export default Login;