import React, { Component, useState } from 'react';
import { View, Image, Text, TouchableOpacity, StatusBar, StyleSheet, Platform, Alert } from 'react-native';
import SelectDropdown from 'react-native-select-dropdown'

const Welcome: React.FC<{ navigation: any }> = ({ navigation, }) => {
    const [role, setRole] = useState('');
    const onSubmit = () => {
        console.log("role-----", role)
        if (role == '') {
            Alert.alert("Please select the role")
        } else {
            navigation.navigate("Login", { role: role })
        }
    }
    return (
        <View style={styles.MainContainer}>
            <Image
                style={{ marginTop: 50, height: '50%', width: '100%', }}
                source={require('../Images/orph.jpg')} />
            <View style={{ alignItems: 'center', padding: 0, }}>
                <Text style={{ color: "#FF9800", fontSize: 22, fontWeight: '600', marginBottom: 10, marginTop: 20 }}>Welcome to SunRice Orphanage </Text>
                <Text style={{ color: "#FF9800", fontSize: 18, fontWeight: '400' }}> An open and acepting community for </Text>
                <Text style={{ color: "#FF9800", fontSize: 18, fontWeight: '400' }}> helping to deserted orphan. Select Role</Text>
                <Text style={{ color: "#FF9800", fontSize: 18, fontWeight: '400' }}> for help and Login to get started.</Text>
            </View>
            <View style={{ padding: 10, width: "100%", marginTop:20}}>
                <SelectDropdown
                    data={["Admin", "User"]}
                    onSelect={(selectedItem, index) => {
                        console.log("selected item-------", selectedItem, index)
                        setRole(selectedItem)
                    }}
                    buttonStyle={styles.bottomView}
                    defaultButtonText="Select Role"
                    buttonTextStyle={{
                        color: '#000',
                        fontSize: 20
                    }}
                    buttonTextAfterSelection={(selectedItem, index) => {
                        // text represented after item is selected
                        // if data array is an array of objects then return selectedItem.property to render after item is selected
                        return selectedItem
                    }}
                    rowTextForSelection={(item, index) => {
                        // text represented for each item in dropdown
                        // if data array is an array of objects then return item.property to represent item in dropdown
                        return item
                    }}
                    // rowStyle={{backgroundColor:"#FED8B1"}}
                    rowTextStyle={{ color: "#000", fontWeight: '600' }}
                />
                
                <TouchableOpacity style={styles.bottomView1} onPress={() => onSubmit()}>
                    <Text style={styles.textStyle}>Login as {role}</Text>
                </TouchableOpacity>
            </View>


        </View>

    );

}
const styles = StyleSheet.create(
    {
        MainContainer:
        {
            flex: 1,
            alignItems: 'center',
            // justifyContent: 'center',
            // paddingTop: StatusBar.currentHeight,
            backgroundColor: '#FFFFFF',
            padding: 10

        },

        bottomView: {
            backgroundColor: '#FFFFFF',
            borderColor: "#FF9800", borderWidth: 1, borderRadius: 10,
            marginBottom: 15, marginTop: 0,
            height: 50, width: "100%",
            justifyContent: 'center',
            alignItems: 'center',
        },
        bottomView1: {
            marginBottom: 15, marginTop: 0,
            height: 50, width: "100%",
            backgroundColor: '#FF9800',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 10,
        },

        textStyle: {

            color: '#fff',
            fontSize: 22
        }
    });
export default Welcome;