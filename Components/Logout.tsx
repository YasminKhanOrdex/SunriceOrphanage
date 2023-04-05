import React, { Component, useState } from 'react';
import {
    View, Image, FlatList, StatusBar,
    Text, SafeAreaView, StyleSheet, Platform, TouchableOpacity, Alert
} from 'react-native';
const Logout: React.FC<{ navigation: any }> = ({ navigation, }) => {
    return (
        <View style={{ flexDirection: 'row' }}>
            {/* <Image style={{ height: '100%', width: '100%' }}
                source={require('../Images/')} /> */}
            <TouchableOpacity style={{
                width: 30,
                height: 35,
                borderRadius: 30 / 2,
                marginRight: 15,
            }}
                onPress={() => navigation.navigate("Welcome")}>
                <Image source={require('../Images/aaa.png')}
                    style={{
                        width: "100%",
                        height: '100%',
                        borderRadius: 35 / 2,
                        marginRight: 15,
                    }} />
            </TouchableOpacity>
        </View>
    )
}
export default Logout;