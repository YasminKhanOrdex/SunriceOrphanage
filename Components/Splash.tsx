import React, { Component } from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';

const Splash = () => {
    return (
        <View style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            <TouchableOpacity>
            <Text style={{color:"#FF8A25"}}>Splash screen</Text>

            </TouchableOpacity>
            {/* <Image
                style={{ height: '100%', width: '100%' }}
                source={require('../../assets/images/logo_new.png')} /> */}
        </View>
    );

}
export default Splash;