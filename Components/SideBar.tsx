import React, { Component } from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';

const SideBar = () => {
    return (
        <View style={{
            flex: 1,
            // justifyContent: 'center',
            // alignItems: 'center',
            padding:10,marginTop:50,
        }}>
            <TouchableOpacity style={{backgroundColor:"#FED8B1",height:40,width:"100%",justifyContent:'center',borderRadius:10,marginBottom:20}}>
            <Text style={{color:"#FF8A25",textAlign:'center',fontWeight:'600'}}>Home</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{backgroundColor:"#FED8B1",height:40,width:"100%",justifyContent:'center',borderRadius:10,marginBottom:20}}>
            <Text style={{color:"#FF8A25",textAlign:'center',fontWeight:'600'}}>Adoption</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{backgroundColor:"#FED8B1",height:40,width:"100%",justifyContent:'center',borderRadius:10,marginBottom:20}}>
            <Text style={{color:"#FF8A25",textAlign:'center',fontWeight:'600'}}>Donation</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{backgroundColor:"#FED8B1",height:40,width:"100%",justifyContent:'center',borderRadius:10,marginBottom:20}}>
            <Text style={{color:"#FF8A25",textAlign:'center',fontWeight:'600'}}>FosterCare</Text>
            </TouchableOpacity>
            
            {/* <Image
                style={{ height: '100%', width: '100%' }}
                source={require('../../assets/images/logo_new.png')} /> */}
        </View>
    );

}
export default SideBar;