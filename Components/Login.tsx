import React, { Component, useState, useEffect } from 'react';
import { View, Image, Text, StatusBar, TouchableOpacity, StyleSheet, Platform, TextInput, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import axios, { all } from 'axios';
const Login: React.FC<{ navigation: any, route: any }> = ({ navigation, route }) => {
    const [email, SetEmail] = useState('');
    const [password, SetPassword] = useState('');
    const [ifLogin, setIfLogin] = useState(true);
    let androidUrl = 'http://reactnative.dev/loginData.json'
    let iosUrl = 'http://localhost:3001/posts'

    // useEffect(() => {
    //     axios.get('https://reactnative.dev/movies.json', {

    //     })
    //         .then(function (response) {
    //             console.log("get Response---------",response.data);
    //         })
    //         .catch(function (error) {
    //             console.log(error);
    //         })
    //         .then(function () {
    //             // always executed
    //         });  
    //   });

    const onSignup = () => {
        if (email == '' || password == '') {
            Alert.alert("Email and Password are required")
        }
        else if (route.params.role == "User") {
            navigation.navigate("Root")
        }
        else if (route.params.role == "Admin") {
            navigation.navigate("Home")
        }
        else return;
        let data = {
            email: email, password: password
        }
        // axios.post(Platform.OS=='ios'?iosUrl:androidUrl, {
        //     email: email,
        //     password: password,
        //     role: route.params.role
        // })
        //     .then(function (response) {
        //         console.log("Post Response-----------", response.data);
        //         Alert.alert("Login Succesfull !")
        //     })
        //     .catch(function (error) {
        //         console.log(error);
        //     });

    }
    // const onLogin = () => {

    //     // console.log("email------", email)
    //     // console.log("password------", password)
    //     // console.log("route.params.role----", route.params.role)
    //     if (email == '' || password == '') {
    //         Alert.alert("Email and Password are required")
    //     }
    //     else {
    //         axios.get(`http://localhost:3001/posts?email=${email}&password=${password}`, {

    //         })
    //             .then(function (response) {
    //                 if (response.data.length) {
    //                     console.log("get Response-----------", response.data);
    //                     // Alert.alert("Login Succesfull !")
    //                     response.data.some(element => {
    //                         if (element.role == route.params.role) {
    //                             Alert.alert("Login Succesfull !")
    //                             if (route.params.role == "User") {
    //                                 navigation.navigate("Root")
    //                             }
    //                             else if (route.params.role == "Admin") {
    //                                 navigation.navigate("Home")
    //                             }
    //                             else return;
    //                         }
    //                         else {
    //                             Alert.alert("Login Failed! Invalid Credentials")
    //                         }
    //                     });

    //                 }
    //                 else {
    //                     Alert.alert("Login Failed! Invalid Credentials")
    //                 }

    //             })
    //             .catch(function (error) {
    //                 console.log(error);
    //             });
    //     }


    //     let data = {
    //         email: email, password: password
    //     }


    // }
    const onLogin = () => {
        // axios.delete(`http://localhost:3001/posts/6`)  
        // .then(res => {  
        //   console.log(res);  
        //   console.log("Delete data -------",res.data);  
      
        // //   const posts = this.state.posts.filter(item => item.id !== id);  
        // //   this.setState({ posts });  
        // })  
        // console.log("email------", email)
        // console.log("password------", password)
        // console.log("route.params.role----", route.params.role)
        if (email == '' || password == '') {
            Alert.alert("Email and Password are required")
        }
        else if (route.params.role == "User") {
            navigation.navigate("Root")
        }
        else if (route.params.role == "Admin") {
            navigation.navigate("Home")
        }
        else return;
        let data = {
                    email: email, password: password
                }
                console.log("----login data ----",data)
    }
    return (
        // <SafeAreaView style={styles.MainContainer}>
        //     {ifLogin ?
        //         <View>
        //             <Text style={{ color: "#FF8A25", fontSize: 30, fontWeight: '600', marginTop: 50 }}>Login as {route.params.role}</Text>
        //         </View>
        //         :
        //         <Text style={{ color: "#FF8A25", fontSize: 30, fontWeight: '600', marginTop: 50, textAlign: "center" }}>Sign up as {route.params.role}</Text>
        //     }

        //     <View style={{ padding: 10, width: "100%", marginTop: 20 }}>

        //         <TextInput style={{
        //             height: 50, width: "100%",
        //             padding: 10,
        //             borderRadius: 10, borderWidth: 1, borderColor: "#FF8A25", marginTop: 20,
        //         }}
        //             placeholder="Email"
        //             keyboardType='email-address'
        //             value={email}
        //             onChangeText={(e: any) => SetEmail(e)} />
        //         <TextInput style={{
        //             height: 50,
        //             width: "100%",
        //             padding: 10,
        //             borderRadius: 10, borderWidth: 1, borderColor: "#FF8A25", marginTop: 20,
        //         }}
        //             placeholder="Password"
        //             value={password}
        //             secureTextEntry={true}
        //             onChangeText={(e: any) => SetPassword(e)} />

        //         {ifLogin ?
        //             <View>
        //                 <TouchableOpacity style={styles.bottomView}
        //                     onPress={() => onLogin()}
        //                 >
        //                     <Text style={styles.textStyle}>Login</Text>
        //                 </TouchableOpacity>
        //                 <TouchableOpacity style={{ justifyContent: 'center', alignItems: 'center' }}
        //                     onPress={() => { setIfLogin(!ifLogin) }}>
        //                     <Text style={{ color: "#FF8A25", fontSize: 20, fontWeight: '300', }}>Sign up?</Text></TouchableOpacity>
        //             </View>
        //             :
        //             <View>
        //                 <TouchableOpacity style={styles.bottomView}
        //                     onPress={() => onSignup()}
        //                 >
        //                     <Text style={styles.textStyle}>Sign up</Text>
        //                 </TouchableOpacity>
        //                 <TouchableOpacity style={{ justifyContent: 'center', alignItems: 'center' }}
        //                     onPress={() => { setIfLogin(!ifLogin) }}>
        //                     <Text style={{ color: "#FF8A25", fontSize: 20, fontWeight: '300', }}>Login?</Text>
        //                 </TouchableOpacity>
        //             </View>}


        //     </View>
        // </SafeAreaView>
        <SafeAreaView style={styles.MainContainer}>
            <Text style={{ color: "#FF8A25", fontSize: 30, fontWeight: '600', marginTop: 50 }}>Login as {route.params.role}</Text>

            <View style={{ padding: 10, width: "100%", marginTop: 20 }}>

                <TextInput style={{
                    height: 50, width: "100%",
                    padding: 10,
                    borderRadius: 10, borderWidth: 1, borderColor: "#FF8A25", marginTop: 20,
                }}
                    placeholder="Email"
                    keyboardType='email-address'
                    value={email}
                    onChangeText={(e: any) => SetEmail(e)} />
                <TextInput style={{
                    height: 50,
                    width: "100%",
                    padding: 10,
                    borderRadius: 10, borderWidth: 1, borderColor: "#FF8A25", marginTop: 20,
                }}
                    placeholder="Password"
                    value={password}
                    secureTextEntry={true}
                    onChangeText={(e: any) => SetPassword(e)} />
                <TouchableOpacity style={styles.bottomView}
                    onPress={() => onLogin()}
                >
                    <Text style={styles.textStyle}>Login</Text>
                </TouchableOpacity>



            </View>
        </SafeAreaView>

    );

}
const styles = StyleSheet.create(
    {
        MainContainer:
        {
            flex: 1,
            alignItems: 'center',
            // justifyContent: 'center',
            paddingTop: StatusBar.currentHeight,
            backgroundColor: "#FFFFFF",
            padding: 10
        },
        childContainer: {
            // flex: 2,
            alignItems: 'center',
            justifyContent: 'center',
            // paddingTop: (Platform.OS === 'ios') ? 20 : 0,
            backgroundColor: "red",
            marginTop: 50

        },
        bottomView: {
            height: 50,
            justifyContent: 'center',
            alignItems: 'center', marginTop: 20,
            borderRadius: 10, borderWidth: 1, borderColor: "#FF8A25", marginBottom: 20,
            width: "100%",
            backgroundColor: '#FF9800',

        },
        textStyle: {
            color: '#fff', fontWeight: '600',
            fontSize: 22
        }
    });
export default Login;